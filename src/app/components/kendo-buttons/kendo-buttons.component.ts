import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-buttons',
  templateUrl: './kendo-buttons.component.html',
  styleUrls: ['./kendo-buttons.component.scss']
})
export class KendoButtonsComponent implements OnInit {
  constructor() {}
  title = 'Hello World!';
  ngOnInit() {}
  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }
}
