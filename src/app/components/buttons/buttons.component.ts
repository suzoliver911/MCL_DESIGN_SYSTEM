import { Component } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import { delay } from 'q';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  response: HighlightResult;
  tooltipText = 'Copy to clipboard';
  tooltiptextcopied = 'Copied';

  codex = `p { line-height: 1.5em ;}`;
  display = false;
  clicked = false;

  code = `
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <button type="button" class="btn btn-link">link</button>
  `;

  copyclipboard(tooltip) {
    this.clicked = false;
    tooltip.open();
    setTimeout(() => {
      tooltip.close();
    }, 6000);
  }
  copied(e, tooltip) {
    if (e.isSuccess) {
      this.clicked = true;
      if (tooltip.isOpen()) {
        tooltip.close();
      }
      tooltip.open();
      setTimeout(() => {
        tooltip.close();
      }, 6000);
    }
  }

  onHighlight(e) {
    this.response = {
      language: e.language
    };
  }
}
