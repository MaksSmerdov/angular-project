import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Указываем, что компонент standalone
  imports: [RouterOutlet], // Импорты для компонента
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Добро пожаловать в Angular!';
}
