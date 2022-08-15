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
import {IBookAuthorResponse} from "../../../models/responses/book-author.response";
import {IBookAuthorView} from "../../../models/views/book-author.view";
import {AuthorApiService} from "../../../services/api/author-api.service";


@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.css']
})
export class BookManagerComponent implements OnInit {
  bookManager : IBookManagerView[] = []
  bookmanagerInfoForm!: FormGroup
  bookmanagerSelected!: IBookManagerView
  listBookCategory: IBookCategoryView[] = []
  listAuthor: IBookAuthorView[]= []


  constructor(private BookApiService: BookApiService,
              private fb: FormBuilder,
              private categoryApiService: CategoryApiService,
              private AuthorApiService : AuthorApiService,
              private messageService: MessageService) {
    this.bookmanagerInfoForm = fb.group({
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
    this.getAllBookAuthor()
  }
  getAllBook() {
    this.BookApiService._getAllBook().subscribe(
      (res: IResponseModel<IBookManagerResponse[]>) => {
        console.log(res)
        this.bookManager = []
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
          this.bookManager.push(bookManagerView)
        })
      }
    )
  }
  onAddNewBook() {
    const createNewBookRequest: IBookManagerRequest = {
       bookName:this.bookmanagerInfoForm.value.bookName,
       idAuthor:this.bookmanagerInfoForm.value.idAuthor,
       publishingYear:this.bookmanagerInfoForm.value.publishingYear,
       pageNumber:this.bookmanagerInfoForm.value.pageNumber,
      image:this.bookmanagerInfoForm.value.image,
      price:this.bookmanagerInfoForm.value.price,
      idTypeBook:this.bookmanagerInfoForm.value.idTypeBook,
      idCompany:this.bookmanagerInfoForm.value.idCompany,
      amount:this.bookmanagerInfoForm.value.amount
    }
    this.BookApiService._createNewBook(createNewBookRequest).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo', detail:'Thêm danh mục thành công'});
        this.getAllBook()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo', detail:' Thêm sửa danh muc that bai'});
        console.log('Them moi danh muc that bai')
      }
    )
  }
  onDeleteBookManager() {
    if(this.bookmanagerSelected) {
      this.BookApiService._deleteBook(this.bookmanagerSelected.bookId).subscribe(
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
  getAllBookAuthor() {
    this.AuthorApiService._getAllAuthor().subscribe(
      (res: IResponseModel<IBookAuthorResponse[]>) => {
        console.log(res)
        this.listAuthor = []
        res.data.forEach(bookAuthorRes => {
          const bookAuthorView: IBookAuthorView = {
            id: bookAuthorRes.idAuthor,
            address: bookAuthorRes.address,
            name_author: bookAuthorRes.nameAuthor,
            note:bookAuthorRes.note,
            title:bookAuthorRes.title,
          }
          this.listAuthor.push(bookAuthorView)
        })
      }
    )
  }
  editBook(i: IBookManagerView) {
    this.bookmanagerSelected = i
    console.log(this.bookmanagerSelected)
    this.bookmanagerInfoForm.patchValue(
      {
        bookId: i.bookId,
        bookName:i.bookName,
        idAuthor:i.idAuthor,
        publishingYear:i.publishingYear,
        pageNumber:i.pageNumber,
        image:i.image,
        price:i.price,
        idTypeBook:i.idTypeBook,
        idCompany:i.idCompany,
        amount:i.amount,
      }
    )
  }

  onEditBook() {
    const editBookManagerRequest: IEditBookManagerRequest = {
      bookId:this.bookmanagerSelected.bookId,
      bookName:this.bookmanagerInfoForm.value.bookName,
      idAuthor:this.bookmanagerInfoForm.value.idAuthor,
      publishingYear:this.bookmanagerInfoForm.value.publishingYear,
      pageNumber:this.bookmanagerInfoForm.value.pageNumber,
      image:this.bookmanagerInfoForm.value.image,
      price:this.bookmanagerInfoForm.value.price,
      idTypeBook:this.bookmanagerInfoForm.value.idTypeBook,
      idCompany:this.bookmanagerInfoForm.value.idCompany,
      amount:this.bookmanagerInfoForm.value.amount
    }
    this.BookApiService._editBook(editBookManagerRequest).subscribe(
      (res: IResponseModel<any>) => {
        console.log('Sua danh muc thanh cong')
        this.messageService.add({severity:'success', summary:'Thông báo', detail:' Chỉnh sửa danh muc thành công'});
        this.getAllBook()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo', detail:' Chỉnh sửa danh muc that bai'});
        console.log('Sua danh muc that bai')
      }
    )
  }
  selectBook(i: IBookManagerView) {
    console.log(i)
    this.bookmanagerSelected = i
  }
}
interface bookManager {
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
