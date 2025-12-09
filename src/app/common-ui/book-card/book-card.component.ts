import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from '../../data/interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent implements OnChanges {
  @Input({ required: true }) book!: Book;

    ngOnChanges(changes: SimpleChanges): void {
    if (changes['book'] && this.book) {
      console.log(`Книга загружена или обновлена: ${this.book.title}`);
    }
  }

  getDownloadFileName(): string {
    return `${this.book.title}_${this.book.author.shortName}_${this.book.resource}`;
  }
}
