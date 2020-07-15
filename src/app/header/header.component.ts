import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() navToggle = new EventEmitter();
  @Input() isHamburgerChecked = false;

  constructor() {}

  ngOnInit() {}

  sendToggleClick() {
    this.navToggle.emit();
  }
}
