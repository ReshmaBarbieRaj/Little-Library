import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseURL="http://localhost:8080/api/v1/books";

  constructor(private httpClient:HttpClient) { }

  getBookList():Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }

  addBook(book:Book) : Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,book);
  }

  getbook(id : number) : Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseURL}/${id}`);
  }

  updateBook(id : number , book : Book) : Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, book);
  }

  deleteBook(id : number) : Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
