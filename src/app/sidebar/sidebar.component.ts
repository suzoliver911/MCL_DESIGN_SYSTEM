import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() navToggle = new EventEmitter();

  isComponentsCollapsed = true;
  isGettingStartedCollapsed = false;

  constructor(private router: Router) {}

  sendToggleClick() {
    this.navToggle.emit();
  }

  expandComponents() {
    this.isComponentsCollapsed = false;
    this.isGettingStartedCollapsed = true;
    this.router.navigateByUrl('/components/alerts');
  }

  expandGettingStarted() {
    this.isGettingStartedCollapsed = false;
    this.isComponentsCollapsed = true;
    this.router.navigateByUrl('/getting-started/introduction');
  }
}
