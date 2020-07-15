import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from './planet';
import { PlanetService } from './planet.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [PlanetService, DecimalPipe]
})
export class TableComponent {
  planets$: Observable<Planet[]>;
  total$: Observable<number>;
  planetsbasic: Planet[];

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: PlanetService) {
    this.planets$ = service.planets$;
    this.total$ = service.total$;
    this.planetsbasic = service.planetsbasic;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
