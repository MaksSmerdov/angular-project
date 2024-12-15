import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog'; // Добавляем MatDialogModule

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>
      <p>{{ data.content }}</p>
      <ng-container *ngIf="data.sections?.length">
        <section
          *ngFor="let section of data.sections"
          class="modal__accordion"
        >
          <button class="modal__accordion-title" (click)="toggleSection(section)">
            {{ section.title }}
          </button>
          <ul
            class="modal__accordion-content"
            [class.active]="section.isOpen"
            *ngIf="section.items?.length"
          >
            <li
              class="modal__accordion-content-item"
              *ngFor="let item of section.items"
            >
              <div class="modal-content__link">{{ item.name }}</div>
              <div class="modal-content__link-container">
                <a
                  class="modal-content__link-download"
                  [href]="item.dwg"
                  download
                  >Скачать DWG</a
                >
                <a
                  class="modal-content__link-download"
                  [href]="item.pdf"
                  download
                  >Скачать PDF</a
                >
              </div>
            </li>
          </ul>
        </section>
      </ng-container>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onClose()">Закрыть</button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      content: string;
      sections?: {
        title: string;
        isOpen?: boolean;
        items: { name: string; dwg: string; pdf: string }[];
      }[];
    },
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  onClose() {
    this.dialogRef.close();
  }

  /**
   * Логика переключения секции: открытие выбранной и закрытие всех остальных.
   */
  toggleSection(selectedSection: {
    title: string;
    isOpen?: boolean;
    items: { name: string; dwg: string; pdf: string }[];
  }) {
    this.data.sections?.forEach((section) => {
      if (section === selectedSection) {
        section.isOpen = !section.isOpen; // Переключаем состояние выбранной секции
      } else {
        section.isOpen = false; // Все остальные секции закрываем
      }
    });
  }
}
