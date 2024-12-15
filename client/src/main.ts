import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Основная точка входа для Angular приложения
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
