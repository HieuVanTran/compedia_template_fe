import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {IResponseModel} from "../../../../models/commons/response.model";
import {IBookAuthorResponse} from "../../../../models/responses/book-author.response";
import {IBookAuthorView} from "../../../../models/views/book-author.view";
import {AuthorApiService} from "../../../../services/api/author-api.service";
import {IBookAuthorRequest, IEditBookAuthorRequest} from "../../../../models/requests/book-author.request";

@Component({
  selector: 'app-author-manager-list',
  templateUrl: './author-manager-list.component.html',
  styleUrls: ['./author-manager-list.component.css']
})
export class AuthorManagerListComponent implements OnInit {
  authorManager : IBookAuthorView[] = []
  AuthorInfoForm!: FormGroup
  bookAuthorSelected!: IBookAuthorView;



  constructor(private AuthorApiService: AuthorApiService,
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
            id: bookAuthorRes.idAuthor,
            address: bookAuthorRes.address,
            name_author: bookAuthorRes.nameAuthor,
            note:bookAuthorRes.note,
            title:bookAuthorRes.title,
          }
          this.authorManager.push(bookAuthorView)
        })
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
        console.log('Them moi danh muc thanh cong')
        this.getAllBookAuthor()
      },
      err => {
        console.log('Them moi danh muc that bai')
      }
    )
  }
  onDeleteBookAuthor() {
    if(this.bookAuthorSelected) {
      this.AuthorApiService._deleteBookAuthor(this.bookAuthorSelected.id).subscribe(
        (res: IResponseModel<any>) => {
          console.log('Xoa danh muc thanh cong')
          this.getAllBookAuthor()
        },
        err => {
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
        console.log('Sua danh muc thanh cong')
        this.getAllBookAuthor()
      },
      err => {
        console.log('Sua danh muc that bai')
      }
    )
  }

  selectBookAuthor(i: IBookAuthorView) {
    console.log(i)
    this.bookAuthorSelected = i
  }
}

interface authorManager {
  address: string,
  id: number,
  name: string,
  note: string,
  title: string
}
