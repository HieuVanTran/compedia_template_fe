import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {IBookManagerView} from "../../../models/views/book-manager.view";
import {BookApiService} from "../../../services/api/book-api.service";
import {IResponseModel} from "../../../models/commons/response.model";
import {IBookManagerResponse} from "../../../models/responses/book-manager.response";
import {IBookAuthorRequest} from "../../../models/requests/book-author.request";
import {IBookManagerRequest} from "../../../models/requests/book-manager.request";
import {IBookAuthorView} from "../../../models/views/book-author.view";

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.css']
})
export class BookManagerComponent implements OnInit {
  BookManager : IBookManagerView[] = []
  BookInfoForm!: FormGroup
  BookSelected!: IBookManagerView;

  constructor(private BookApiService: BookApiService,
              private fb: FormBuilder) {
    this.BookInfoForm = fb.group({
      bookId: [null],
      bookName: [null],
      idAuthor: [null],
      publishingYear: [null],
      pageNumber: [null],
      image: [null],
      price: [null],
      idTypeBook: [null],
      idCompany: [null],
      amount: [null],
    })
  }

  ngOnInit(): void {
    this.getAllBook()
  }
  getAllBook() {
    this.BookApiService._getAllBook().subscribe(
      (res: IResponseModel<IBookManagerResponse[]>) => {
        console.log(res)
        this.BookManager = []
        res.data.forEach(bookManagerRes => {
          const bookManagerView: IBookManagerView = {
            bookId: bookManagerRes.bookId,
            bookName:bookManagerRes.bookName,
            idAuthor:bookManagerRes.idAuthor,
            publishingYear:bookManagerRes.publishingYear,
            pageNumber:bookManagerRes.pageNumber,
            image:bookManagerRes.image,
            price:bookManagerRes.price,
            idTypeBook:bookManagerRes.idTypeBook,
            idCompany:bookManagerRes.idCompany,
            amount:bookManagerRes.amount
          }
          this.BookManager.push(bookManagerView)
        })
      }
    )
  }
  onAddNewBook() {
    const createNewBookRequest: IBookManagerRequest = {
      bookId:this.BookInfoForm.value.bookId,
       bookName:this.BookInfoForm.value.bookName,
       idAuthor:this.BookInfoForm.value.idAuthor,
      publishingYear:this.BookInfoForm.value.publishingYear,
     pageNumber:this.BookInfoForm.value.pageNumber,
      image:this.BookInfoForm.value.image,
      price:this.BookInfoForm.value.price,
      idTypeBook:this.BookInfoForm.value.idTypeBook,
      idCompany:this.BookInfoForm.value.idCompany,
      amount:this.BookInfoForm.value.amount
    }
    this.BookApiService._createNewBook(createNewBookRequest).subscribe(
      (res: IResponseModel<any>) => {
        console.log('Them moi danh muc thanh cong')
        this.getAllBook()
      },
      err => {
        console.log('Them moi danh muc that bai')
      }
    )
  }
  onDeleteBookManager() {
    if(this.BookSelected) {
      this.BookApiService._deleteBook(this.BookSelected.bookId).subscribe(
        (res: IResponseModel<any>) => {
          console.log('Xoa danh muc thanh cong')
          this.getAllBook()
        },
        err => {
          console.log('Xoa danh muc that bai')
        }
      )
    }
  }
  selectBook(i: IBookManagerView) {
    console.log(i)
    this.BookSelected = i
  }
}
interface BookManager {
  bookId: number,
  bookName: string,
  idAuthor: number,
  publishingYear: string,
  pageNumber: number,
  image: string,
  price: number,
  idTypeBook: number,
  idCompany: number,
  amount: number,
}
