import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent }, // Стартовая страница
  { path: 'page1', component: Page1Component }, // Страница 1
  { path: 'page2', component: Page2Component }, // Страница 2
];
