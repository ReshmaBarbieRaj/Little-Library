import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book : Book = new Book();
  id !: number ;
  constructor(private bookService : BookService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.id =this. route.snapshot.params['id'];
    this.bookService.getbook(this.id).subscribe(data =>{
      this.book=data;
    });
  }

  onSubmit(){
    this.bookService.updateBook(this.id, this.book).subscribe((data : any) =>{
      if(data.HttpErrorResponse ==404)
      console.log("id not found");
      this.goToBooksListPage();

      }
        );
  }

  goToBooksListPage(){
    this.router.navigate(['/books']);
  }
}
