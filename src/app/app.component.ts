import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LPEA-MCL-STYLE-UI-KIT';
  openMenu = false;
  isHamburgerChecked = false;

  receiveToggle($event) {
    this.openMenu = !this.openMenu;
    this.isHamburgerChecked = !this.isHamburgerChecked;
  }

  receiveNavClick() {
    if (this.openMenu) {
      this.openMenu = false;
      this.isHamburgerChecked = false;
    }
  }
}
