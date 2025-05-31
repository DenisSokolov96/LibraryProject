import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookCardComponent } from "./common-ui/book-card/book-card.component";
import { BookService } from './data/services/book.service';
import { Book } from './data/interfaces/book.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookCardComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  bookService  = inject(BookService)
  books:Book[] = []
  constructor () {
     this.bookService.getBooks().subscribe( val => {
        var obj = Object.values(val);
        Object.values(obj[0]).map(item => this.books.push(item))
      }) 
  }
  
}
