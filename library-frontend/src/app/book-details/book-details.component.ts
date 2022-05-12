import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  id!: number;
  book !:Book;
  constructor(private bookService : BookService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id =this. route.snapshot.params['id'];
    this.book=  new Book();
    this.bookService.getbook(this.id).subscribe(data =>
      {
        this.book=data;
      });
  }
  
  

}
