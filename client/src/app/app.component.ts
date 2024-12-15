import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Объявляем компонент standalone
  imports: [RouterModule], // Добавляем RouterModule
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'client';
}
