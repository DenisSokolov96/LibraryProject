import { Component, Input } from '@angular/core';
import { Book } from '../../data/interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Input() book!: Book;

  getDownloadFileName(): string {
    return `${this.book.title}_${this.book.author.shortName}_${this.book.resource}`;
  }
}
