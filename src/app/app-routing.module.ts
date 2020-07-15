import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { IntroductionComponent } from './getting-started/introduction/introduction.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CardComponent } from './components/card/card.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { TableComponent } from './components/table/table.component';
import { ColorsComponent } from './getting-started/colors/colors.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { PopoversComponent } from './components/popovers/popovers.component';
import { KendoButtonsComponent } from './components/kendo-buttons/kendo-buttons.component';
import { KendoGridComponent } from './components/kendo-grid/kendo-grid.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  {
    path: 'getting-started',
    children: [
      { path: '', component: IntroductionComponent },
      { path: 'introduction', component: IntroductionComponent },
      { path: 'colors', component: ColorsComponent }
    ]
  },
  {
    path: 'components',
    children: [
      { path: '', component: AlertsComponent },
      { path: 'alerts', component: AlertsComponent },
      { path: 'breadcrumb', component: BreadcrumbComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'card', component: CardComponent },
      { path: 'collapse', component: CollapseComponent },
      { path: 'dropdowns', component: DropdownsComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'popovers', component: PopoversComponent },
      { path: 'table', component: TableComponent },
      { path: 'tooltips', component: TooltipComponent },
      { path: 'kendo-buttons', component: KendoButtonsComponent },
      { path: 'kendo-grid', component: KendoGridComponent }
    ]
  },
  {
    path: '',
    redirectTo: '/getting-started/introduction',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],

  exports: [RouterModule]
})
export class AppRoutingModule {}
