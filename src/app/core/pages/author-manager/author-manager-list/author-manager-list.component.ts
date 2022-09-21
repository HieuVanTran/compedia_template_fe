import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {IPageResponseModel, IResponseModel} from "../../../../models/commons/response.model";
import {IBookAuthorResponse} from "../../../../models/responses/book-author.response";
import {IBookAuthorView} from "../../../../models/views/book-author.view";
import {AuthorApiService} from "../../../../services/api/author-api.service";
import {IBookAuthorRequest, IEditBookAuthorRequest} from "../../../../models/requests/book-author.request";
import {MessageService} from "primeng/api";
import {IBookManagerResponse} from "../../../../models/responses/book-manager.response";
import {IBookManagerView} from "../../../../models/views/book-manager.view";
import {Constant} from "../../../../util/constant";

@Component({
  selector: 'app-author-manager-list',
  templateUrl: './author-manager-list.component.html',
  styleUrls: ['./author-manager-list.component.css']
})
export class AuthorManagerListComponent implements OnInit {
  authorManager : IBookAuthorView[] = []
  AuthorInfoForm!: FormGroup
  bookAuthorSelected!: IBookAuthorView;
  authorNameSearch!: string
  page: number = Constant.PAGE_INIT
  size: number = Constant.SIZE_INIT
  address!: string
  title!: string
  totalElement: number = 300;



  constructor(private AuthorApiService: AuthorApiService,
              private messageService: MessageService,
              private fb: FormBuilder) {
    this.AuthorInfoForm = fb.group({
      address: [null],
      name_author: [null],
      title: [null],
      note: [null]
    })
  }

  ngOnInit(): void {
    this.getAllBookAuthor()
  }
  getAllBookAuthor() {
    this.AuthorApiService._getAllAuthor().subscribe(
      (res: IResponseModel<IBookAuthorResponse[]>) => {
        console.log(res)
        this.authorManager = []
        res.data.forEach(bookAuthorRes => {
          const bookAuthorView: IBookAuthorView = {
            id: bookAuthorRes.author_id,
            address: bookAuthorRes.address,
            name_author: bookAuthorRes.author_name,
            note:bookAuthorRes.note,
            title:bookAuthorRes.title,
          }
          this.authorManager.push(bookAuthorView)
        })
      }
    )
  }
  onSearchAuthor() {
    const searchRequest = {
      authorName: this.authorNameSearch,
      page: this.page,
      size: this.size,
      address: this.address,
      title: this.title,
    }
    console.log(searchRequest)
    this.AuthorApiService._searchAuthor(searchRequest).subscribe(
      (res: IResponseModel<IPageResponseModel<IBookAuthorResponse>>) => {
        console.log(res)
        this.totalElement = res.data.total_elements
        this.authorManager = []
        res.data.results.forEach(bookAuthorRes => {
          const bookAuthorView: IBookAuthorView = {
            id: bookAuthorRes.author_id,
            address: bookAuthorRes.address,
            name_author: bookAuthorRes.author_name,
            note:bookAuthorRes.note,
            title:bookAuthorRes.title,
          }
          this.authorManager.push(bookAuthorView)
        })
        this.messageService.add({severity:'success', summary:'Thông báo', detail:'Thành công!'});
      }
    )
  }
  onAddNewBookAuth() {
    const createNewAuthRequest: IBookAuthorRequest = {
      address:this.AuthorInfoForm.value.address,
      name_author: this.AuthorInfoForm.value.name_author,
      title:this.AuthorInfoForm.value.title,
      note: this.AuthorInfoForm.value.note,
    }
    this.AuthorApiService._createNewAuthor(createNewAuthRequest).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo', detail:'Thêm mới danh mục thành công'});
        console.log('Them moi danh muc thanh cong')
        this.getAllBookAuthor()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo', detail:'Thêm mới danh mục thất bại'});
        console.log('Them moi danh muc that bai')
      }
    )
  }
  onDeleteBookAuthor() {
    if(this.bookAuthorSelected) {
      this.AuthorApiService._deleteBookAuthor(this.bookAuthorSelected.id).subscribe(
        (res: IResponseModel<any>) => {
          this.messageService.add({severity:'success', summary:'Thông báo', detail:'Xóa danh mục thành công'});
          console.log('Xoa danh muc thanh cong')
          this.getAllBookAuthor()
        },
        err => {
          this.messageService.add({severity:'error', summary:'Thông báo', detail:'Xóa danh mục thành công'});
          console.log('Xoa danh muc that bai')
        }
      )
    }
  }

  editBookAuthor(i: IBookAuthorView) {
    this.bookAuthorSelected = i
    this.AuthorInfoForm.patchValue(
      {
        address: i.address,
        id: i.id,
        name_author: i.name_author,
        note: i.note,
        title: i.title
      }
    )
  }

  onEditBookAuth() {
    const editBookAuthorRequest: IEditBookAuthorRequest = {
      name_author: this.AuthorInfoForm.value.name_author,
      title: this.AuthorInfoForm.value.title,
      id: this.bookAuthorSelected.id,
      address: this.AuthorInfoForm.value.address,
      note : this.AuthorInfoForm.value.note
    }
    this.AuthorApiService._editBookAuthor(editBookAuthorRequest).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo', detail:'Chỉnh sửa danh mục thành công'});
        console.log('Sua danh muc thanh cong')
        this.getAllBookAuthor()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo', detail:'Chỉnh sửa danh mục thành công'});
        console.log('Sua danh muc that bai')
      }
    )
  }

  selectBookAuthor(i: IBookAuthorView) {
    console.log(i)
    this.bookAuthorSelected = i
  }
  onReset() {
    this.authorNameSearch = Constant.NULL_VALUE
    this.page = Constant.PAGE_INIT
    this.size = Constant.SIZE_INIT
    this.address = Constant.NULL_VALUE
    this.title = Constant.NULL_VALUE
    this.onSearchAuthor()
  }

  pageChange($event: any) {
    // @ts-ignore
    this.page = $event.first/$event.rows
    // @ts-ignore
    this.size = $event.rows
    // @ts-ignore
    // this.selectedSortField = $event.sortField
    // this.selectedSortOrder = $event.sortOrder == 1? 'ACS' : 'DESC'
    console.log($event)
    this.onSearchAuthor()
  }
}


