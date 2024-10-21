import { Component } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";
import { Book } from '../model/book';
import { BookEditComponent } from "../book-edit/book-edit.component";

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BookAddComponent, BookEditComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
  title ="Liste des nouveaux livres :";
  books = [
    new Book(1,"Atomic Habits","James Clear",35),
    new Book(2,"The slight edge","Jeff Olsen",30),
    new Book(3,"Power of habits","....",25),
];
  action ="";
  selectbook: Book = new Book(0,"","",0);
  
  changeAction(action:string){
    this.action=action;
  };
  changeActionedit(action:string,book:Book){
    this.action=action;
    this.selectbook = book;
  };

  addBook (book:Book){
    this.books=[...this.books, book];
    this.changeAction("");
  }
  editBook(){
    this.changeAction("");
  }
}

