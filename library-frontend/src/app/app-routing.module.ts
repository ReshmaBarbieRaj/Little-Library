import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {path:'books', component: BookListComponent },
  {path:'', redirectTo:'books', pathMatch:'full' },
  {path:'add-book', component : AddBookComponent},
  {path:'update-book/:id', component : UpdateBookComponent },
  {path:'book-details/:id', component : BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
