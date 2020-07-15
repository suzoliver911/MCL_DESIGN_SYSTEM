import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import bash from 'highlight.js/lib/languages/bash';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { IntroductionComponent } from './getting-started/introduction/introduction.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ContentComponent } from './content/content.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CardComponent } from './components/card/card.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightDirective } from './highlight.directive';
import { TableModule } from './components/table/table.module';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ColorsComponent } from './getting-started/colors/colors.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PopoversComponent } from './components/popovers/popovers.component';
import { KendoButtonsComponent } from './components/kendo-buttons/kendo-buttons.component';
import { KendoGridComponent } from './components/kendo-grid/kendo-grid.component';

// Kendo UI Components
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsComponent } from './components/forms/forms.component';

export function hljsLanguages() {
  return [
    { name: 'css', func: css },
    { name: 'javascript', func: javascript },
    { name: 'typescript', func: typescript },
    { name: 'xml', func: xml },
    { name: 'bash', func: bash }
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ButtonsComponent,
    IntroductionComponent,
    AlertsComponent,
    ContentComponent,
    BreadcrumbComponent,
    CardComponent,
    CollapseComponent,
    DropdownsComponent,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    TooltipComponent,
    ColorsComponent,
    PageNotFoundComponent,
    PopoversComponent,
    KendoButtonsComponent,
    KendoGridComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HighlightModule,
    ClipboardModule,
    NgbModule,
    TableModule,
    ButtonsModule,
    InputsModule,
    GridModule
  ],

  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: { languages: hljsLanguages }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
