import { Component, OnInit } from '@angular/core';
import {CategoryApiService} from "../../../../services/api/category-api.service";
import {IResponseModel} from "../../../../models/commons/response.model";
import {IBookCategoryResponse} from "../../../../models/responses/book-category.response";
import {IBookCategoryView} from "../../../../models/views/book-category.view";
import {FormBuilder, FormGroup} from "@angular/forms";
import {IBookCategoryRequest, IEditBookCategoryRequest} from "../../../../models/requests/book-category.request";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-category-manager-list',
  templateUrl: './category-manager-list.component.html',
  styleUrls: ['./category-manager-list.component.css']
})
export class CategoryManagerListComponent implements OnInit {
  categoryManager : IBookCategoryView[] = []
  bookInfoForm!: FormGroup
  bookCategorySelected!: IBookCategoryView

  constructor(private categoryApiService: CategoryApiService,
              private messageService: MessageService,
              private fb: FormBuilder) {
    this.bookInfoForm = fb.group({
      code: [null],
      name: [null]
    })
  }

  ngOnInit(): void {
    this.getAllBookCategory()
  }

    getAllBookCategory() {
      this.categoryApiService._getAllCategory().subscribe(
        (res: IResponseModel<IBookCategoryResponse[]>) => {
          this.categoryManager = []
          res.data.forEach(bookCategoryRes => {
            const bookCategoryView: IBookCategoryView = {
              id: bookCategoryRes.idtypeBook,
              code: bookCategoryRes.code,
              name: bookCategoryRes.bookName
            }
            this.categoryManager.push(bookCategoryView)
          })
        }
      )
    }

  onAddNewBookCategory() {
    const createNewBookRequest: IBookCategoryRequest = {
      book_name: this.bookInfoForm.value.name,
      code: this.bookInfoForm.value.code,
    }
    this.categoryApiService._createNewCategory(createNewBookRequest).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo', detail:'Thêm mới danh mục thành công'});
        console.log('Them moi danh muc thanh cong')
        this.getAllBookCategory()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo', detail:'Thêm mới danh mục thất bại'});
        console.log('Them moi danh muc that bai')
      }
    )
  }

  onDeleteBookCategory() {
    if(this.bookCategorySelected) {
      this.categoryApiService._deleteBookCategory(this.bookCategorySelected.id).subscribe(
        (res: IResponseModel<any>) => {
          this.messageService.add({severity:'success', summary:'Thông báo', detail:'Xóa danh mục thành công'});
          console.log('Xoa danh muc thanh cong')
          this.getAllBookCategory()
        },
        err => {
          this.messageService.add({severity:'error', summary:'Thông báo', detail:'Xóa danh mục thất bại'});
          console.log('Xoa danh muc that bai')
        }
      )
    }
  }

  editBookCategory(i: IBookCategoryView) {
    this.bookCategorySelected = i
    this.bookInfoForm.patchValue(
      {
        code: i.code,
        name: i.name,
      }
    )
  }

  onEditBookCategory() {
    const editBookCategoryRequest: IEditBookCategoryRequest = {
      book_name: this.bookInfoForm.value.name,
      code: this.bookInfoForm.value.code,
      id: this.bookCategorySelected.id
    }
    this.categoryApiService._editBookCategory(editBookCategoryRequest).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo', detail:'Chỉnh sửa danh mục thành công'});
        console.log('Sua danh muc thanh cong')
        this.getAllBookCategory()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo', detail:'Chỉnh sửa danh mục thất bại'});
        console.log('Sua danh muc that bai')
      }
    )
  }

  selectBookCategory(i: IBookCategoryView) {
    this.bookCategorySelected = i
  }
}

interface categoryManager {
  id: number,
  code: string,
  name: string
}
