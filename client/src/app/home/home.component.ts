import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Добро пожаловать!</h1>
    <button routerLink="/page1">Перейти на страницу 1</button>
    <button routerLink="/page2">Перейти на страницу 2</button>
  `,
})
export class HomeComponent {}
