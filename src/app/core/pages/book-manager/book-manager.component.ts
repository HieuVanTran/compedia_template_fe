import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {IBookManagerView} from "../../../models/views/book-manager.view";
import {BookApiService} from "../../../services/api/book-api.service";
import {IResponseModel} from "../../../models/commons/response.model";
import {IBookManagerResponse} from "../../../models/responses/book-manager.response";
import {IBookManagerRequest, IEditBookManagerRequest} from "../../../models/requests/book-manager.request";
import {IBookCategoryView} from "../../../models/views/book-category.view";
import {IBookCategoryResponse} from "../../../models/responses/book-category.response";
import {CategoryApiService} from "../../../services/api/category-api.service";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.css']
})
export class BookManagerComponent implements OnInit {
  BookManager : IBookManagerView[] = []
  BookInfoForm!: FormGroup
  BookSelected!: IBookManagerView
  listBookCategory: IBookCategoryView[] = []


  constructor(private BookApiService: BookApiService,
              private fb: FormBuilder,
              private categoryApiService: CategoryApiService,
              private messageService: MessageService) {
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
    this.getAllBookCategory()
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
          this.messageService.add({severity:'success', summary:'Thông báo', detail:'Xóa danh mục thành công'});
          this.getAllBook()
        },
        err => {
          this.messageService.add({severity:'error', summary:'Thông báo', detail:'Xoa danh muc that bai'});
          console.log('Xoa danh muc that bai')
        }
      )
    }
  }
  getAllBookCategory() {
    this.categoryApiService._getAllCategory().subscribe(
      (res: IResponseModel<IBookCategoryResponse[]>) => {
        this.listBookCategory = []
        res.data.forEach(bookCategoryRes => {
          const bookCategoryView: IBookCategoryView = {
            id: bookCategoryRes.idtypeBook,
            code: bookCategoryRes.code,
            name: bookCategoryRes.bookName
          }
          this.listBookCategory.push(bookCategoryView)
        })
      }
    )
  }
  editBook(i: IBookManagerView) {
    this.BookSelected = i
    console.log(this.BookSelected)
    this.BookInfoForm.patchValue(
      {
        bookId: this.BookSelected.bookId,
        bookName:this.BookSelected.bookName,
        idAuthor:this.BookSelected.idAuthor,
        publishingYear:this.BookSelected.publishingYear,
        pageNumber:this.BookSelected.pageNumber,
        image:this.BookSelected.image,
        price:this.BookSelected.price,
        idTypeBook:this.BookSelected.idTypeBook,
        idCompany:this.BookSelected.idCompany,
        amount:this.BookSelected.amount,
      }
    )
  }

  onEditBook() {
    const editBookManagerRequest: IEditBookManagerRequest = {
      bookId:this.BookSelected.bookId,
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
    this.BookApiService._editBook(editBookManagerRequest).subscribe(
      (res: IResponseModel<any>) => {
        console.log('Sua danh muc thanh cong')
        this.getAllBook()
      },
      err => {
        console.log('Sua danh muc that bai')
      }
    )
  }
  selectBook(i: IBookManagerView) {
    console.log(i)
    this.BookSelected = i
  }
}
interface BookManager {
  bookId: number,
  bookName: string,
  idAuthor: string,
  publishingYear: string,
  pageNumber: string,
  image: string,
  price: string,
  idTypeBook: string,
  idCompany: string,
  amount: string,
}
