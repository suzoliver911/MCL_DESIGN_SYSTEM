import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { products } from './products';
import { RowClassArgs } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-kendo-grid',
  encapsulation: ViewEncapsulation.None,
   
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.scss'],
 
})
export class KendoGridComponent implements OnInit {
  public gridData: any[] = products;
  constructor() {}

  ngOnInit() {}
  public rowCallback(context: RowClassArgs) {
    const isEven = context.index % 2 == 0;
    return {
        even: isEven,
        odd: !isEven
    };
}
}
