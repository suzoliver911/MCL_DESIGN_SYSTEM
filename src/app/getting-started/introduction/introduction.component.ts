import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  code = `npm install @mcl/bootstrap-theme`;
  constructor() {}

  ngOnInit() {}
}
