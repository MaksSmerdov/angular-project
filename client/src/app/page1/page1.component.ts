import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-page1',
  template: `
    <h1>Страница 1</h1>
    <button mat-raised-button (click)="openDialog()">Открыть модалку</button>
  `,
})
export class Page1Component {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '600px',
      data: {
        title: 'Список документации',
        content: 'Выберите нужный раздел для загрузки файлов.',
        sections: [
          {
            title: 'Схемы проекта',
            items: [
              { name: 'Общие данные', dwg: 'common_data.dwg', pdf: 'common_data.pdf' },
              { name: 'Структурные данные', dwg: 'structural.dwg', pdf: 'structural.pdf' },
            ],
          },
          {
            title: 'Руководства по эксплуатации',
            items: [
              { name: 'Руководство АИР', dwg: '', pdf: 're_air.pdf' },
            ],
          },
        ],
      },
    });
  }
}
