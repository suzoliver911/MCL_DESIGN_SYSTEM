// import the new component
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { PlanetService } from './planet.service';
import { NgbdSortableHeader } from './sortable.directive';

@NgModule({
  imports: [CommonModule, NgbModule, FormsModule],
  declarations: [TableComponent, NgbdSortableHeader],
  providers: [PlanetService]
})
export class TableModule {}
