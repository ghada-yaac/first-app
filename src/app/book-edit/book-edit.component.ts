import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css' 
  ]
})
export class BookEditComponent {
  @Input() selectbook!: Book; 
  @Output() finish=new EventEmitter<Book>();


  editBook(title: string, author: string, price: number) {
    this.selectbook.title = title;
    this.selectbook.author = author;
    this.selectbook.price = price;
  }
}
