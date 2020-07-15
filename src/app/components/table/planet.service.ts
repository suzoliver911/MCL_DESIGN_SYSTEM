import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { Planet } from './planet';
import { PLANETS, PLANETSBASIC } from './planets';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortDirection } from './sortable.directive';

interface SearchResult {
  planets: Planet[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(planets: Planet[], column: string, direction: string): Planet[] {
  if (direction === '') {
    return planets;
  } else {
    return [...planets].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(planet: Planet, term: string, pipe: PipeTransform) {
  return (
    planet.name.toLowerCase().includes(term.toLowerCase()) ||
    planet.distanceFromSun.toLowerCase().includes(term.toLowerCase()) ||
    pipe.transform(planet.moons).includes(term)
  );
}

@Injectable({ providedIn: 'root' })
export class PlanetService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _planets$ = new BehaviorSubject<Planet[]>([]);
  private _planetsbasic = PLANETSBASIC;
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false))
      )
      .subscribe(result => {
        this._planets$.next(result.planets);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  get planetsbasic() {
    return this._planetsbasic;
  }

  get planets$() {
    return this._planets$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn: string) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let planets = sort(PLANETS, sortColumn, sortDirection);

    // 2. filter
    planets = planets.filter(planet => matches(planet, searchTerm, this.pipe));
    const total = planets.length;

    // 3. paginate
    planets = planets.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ planets, total });
  }
}
