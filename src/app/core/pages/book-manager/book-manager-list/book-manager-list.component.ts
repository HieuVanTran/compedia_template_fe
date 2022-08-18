import { Component, OnInit } from '@angular/core';
import {IBookManagerView} from "../../../../models/views/book-manager.view";
import {FormBuilder, FormGroup} from "@angular/forms";
import {IBookCategoryView} from "../../../../models/views/book-category.view";
import {IBookAuthorView} from "../../../../models/views/book-author.view";
import {IPublishCompanyView} from "../../../../models/views/publish-company.view";
import {CategoryApiService} from "../../../../services/api/category-api.service";
import {PublishCompanyApiService} from "../../../../services/api/publish-company-api.service";
import {MessageService} from "primeng/api";
import {IResponseModel} from "../../../../models/commons/response.model";
import {IBookManagerResponse} from "../../../../models/responses/book-manager.response";
import {IBookManagerRequest, IEditBookManagerRequest} from "../../../../models/requests/book-manager.request";
import {IBookCategoryResponse} from "../../../../models/responses/book-category.response";
import {IBookAuthorResponse} from "../../../../models/responses/book-author.response";
import {IPublishCompanyResponse} from "../../../../models/responses/publish-company.response";
import {BookApiService} from "../../../../services/api/book-api.service";
import {AuthorApiService} from "../../../../services/api/author-api.service";

@Component({
  selector: 'app-book-manager-list',
  templateUrl: './book-manager-list.component.html',
  styleUrls: ['./book-manager-list.component.css']
})
export class BookManagerListComponent implements OnInit {

  bookManager : IBookManagerView[] = [];
  bookmanagerInfoForm!: FormGroup;
  bookmanagerSelected!: IBookManagerView;
  listBookCategory: IBookCategoryView[] = [];
  listAuthor: IBookAuthorView[]= [];
  listpublishingCompany:IPublishCompanyView[]=[];
  uploadFile!: File
  requestBookForm: FormData = new FormData()
  constructor(private BookApiService: BookApiService,
              private fb: FormBuilder,
              private categoryApiService: CategoryApiService,
              private AuthorApiService : AuthorApiService,
              private publishCompanyApiService: PublishCompanyApiService,
              private messageService: MessageService) {
    this.bookmanagerInfoForm = fb.group({
      book_name: [null],
      name_author: [null],
      publishing_year: [null],
      page_number: [null],
      image: [null],
      price: [null],
      category_name: [null],
      publish_name: [null],
      amount: [null],
      status:[null]
    })
  }

  ngOnInit(): void {
    this.getAllBook()
    this.getAllBookCategory()
    this.getAllBookAuthor()
    this.getAllPublishCompany()
  }

  getAllBook() {
    this.BookApiService._getAllBook().subscribe(
      (res: IResponseModel<IBookManagerResponse[]>) => {
        console.log(res)
        this.bookManager = []
        res.data.forEach(bookManagerRes => {
          const bookManagerView: IBookManagerView = {
            book_id: bookManagerRes.bookId,
            book_name:bookManagerRes.bookName,
            name_author:bookManagerRes.nameAuthor,
            publishing_year:bookManagerRes.publishingYear,
            page_number:bookManagerRes.pageNumber,
            image:bookManagerRes.image,
            price:bookManagerRes.price,
            category_name:bookManagerRes.categoryName,
            publish_name:bookManagerRes.publishName,
            amount:bookManagerRes.amount,
            status:bookManagerRes.status,
          }
          this.bookManager.push(bookManagerView)
        })
      }
    )
  }
  onAddNewBook() {
    const createNewBookRequest: IBookManagerRequest = {
      book_name:this.bookmanagerInfoForm.value.book_name,
      name_author:this.bookmanagerInfoForm.value.name_author,
      publishing_year:this.bookmanagerInfoForm.value.publishing_year,
      page_number:this.bookmanagerInfoForm.value.page_number,
      image:this.bookmanagerInfoForm.value.image,
      price:this.bookmanagerInfoForm.value.price,
      category_name:this.bookmanagerInfoForm.value.category_name,
      publish_name:this.bookmanagerInfoForm.value.publish_name,
      amount:this.bookmanagerInfoForm.value.amount,
      status:this.bookmanagerInfoForm.value.status
    };
    this.requestBookForm.set('amount',this.bookmanagerInfoForm.value.amount)
    this.requestBookForm.set('bookName',this.bookmanagerInfoForm.value.book_name)
    this.requestBookForm.set('categoryName',this.bookmanagerInfoForm.value.category_name)
    this.requestBookForm.set('file',this.uploadFile)
    this.requestBookForm.set('nameAuthor',this.bookmanagerInfoForm.value.name_author)
    this.requestBookForm.set('pageNumber',this.bookmanagerInfoForm.value.page_number)
    this.requestBookForm.set('price',this.bookmanagerInfoForm.value.price)
    this.requestBookForm.set('publishName',this.bookmanagerInfoForm.value.publish_name)
    this.requestBookForm.set('publishingYear',this.bookmanagerInfoForm.value.publishing_year)
    this.requestBookForm.set('status',this.bookmanagerInfoForm.value.status)

    this.BookApiService._createNewBook(this.requestBookForm).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo', detail:'Thêm mới danh mục thành công'});
        this.getAllBook()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo', detail:' Thêm mới danh muc that bai'});
        console.log('Them moi danh muc that bai')
      }
    )
  }
  onDeleteBookManager() {
    if(this.bookmanagerSelected) {
      this.BookApiService._deleteBook(this.bookmanagerSelected.book_id).subscribe(
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
  getAllPublishCompany() {
    this.publishCompanyApiService._getAllPublishCompany().subscribe(
      (res: IResponseModel<IPublishCompanyResponse[]>) => {
        this.listpublishingCompany = [];
        res.data.forEach( publishCompanyRes => {
          const publishCompanyView: IPublishCompanyView = {
            id: publishCompanyRes.idPub,
            name: publishCompanyRes.publishName,
            address: publishCompanyRes.address,
            email: publishCompanyRes.email,
            agent_people: publishCompanyRes.agentPeople,
            date_founding: publishCompanyRes.dateFounding
          };
          this.listpublishingCompany.push(publishCompanyView)
        })

      }
    )
  }
  editBook(i: IBookManagerView) {
    this.bookmanagerSelected = i
    console.log(this.bookmanagerSelected)
    this.bookmanagerInfoForm.patchValue(
      {
        book_name:i.book_name,
        name_author:i.name_author,
        publishing_year:i.publishing_year,
        page_number:i.page_number,
        image:i.image,
        price:i.price,
        category_name:i.category_name,
        publish_name:i.publish_name,
        amount:i.amount,
      }
    )
    console.log(this.bookmanagerInfoForm.value)
  }

  onEditBook() {
    const editBookManagerRequest: IEditBookManagerRequest = {
      book_id:this.bookmanagerSelected.book_id,
      book_name:this.bookmanagerInfoForm.value.book_name,
      name_author:this.bookmanagerInfoForm.value.name_author,
      publishing_year:this.bookmanagerInfoForm.value.publishing_year,
      page_number:this.bookmanagerInfoForm.value.page_number,
      image:this.bookmanagerInfoForm.value.image,
      price:this.bookmanagerInfoForm.value.price,
      category_name:this.bookmanagerInfoForm.value.category_name,
      publish_name:this.bookmanagerInfoForm.value.publish_name,
      amount:this.bookmanagerInfoForm.value.amount,
      status:this.bookmanagerInfoForm.value.status
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

  getFile(event: Event) {
    // @ts-ignore
    this.uploadFile = event.target?.files[0]
    console.log(this.uploadFile)
  }
}
