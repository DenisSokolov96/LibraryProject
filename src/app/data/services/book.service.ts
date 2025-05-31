import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  httpRequest : HttpClient = inject(HttpClient)

  baseApiUrl = '/Library/'
  
  getBooks() {
    console.log("getBooks");
    return this.httpRequest.post<Book[]>(`${this.baseApiUrl}books`, {})
  }

}
