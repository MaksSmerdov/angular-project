import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Корневой маршрут
  { path: '**', redirectTo: '' },        // Перенаправление на корень для всех неопределенных маршрутов
];
