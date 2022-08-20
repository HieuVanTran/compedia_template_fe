import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { IResponseModel } from 'src/app/models/commons/response.model';
import {IEditLoanpayRequest, ILoanpayRequest, ListBook } from 'src/app/models/requests/loanpay.request';
import { IBookManagerResponse } from 'src/app/models/responses/book-manager.response';
import { ILoanpayResponse } from 'src/app/models/responses/loanpay.response';
import { IBookManagerView } from 'src/app/models/views/book-manager.view';
import { ILoanpayView } from 'src/app/models/views/loanpay.view';
import { LoanpayApiService } from 'src/app/services/api/loanpay-api.service';
import {BookApiService} from "../../../../services/api/book-api.service";
@Component({
  selector: 'app-loan-pay-manager-list',
  templateUrl: './loan-pay-manager-list.component.html',
  styleUrls: ['./loan-pay-manager-list.component.css']
})
export class LoanPayManagerListComponent implements OnInit {
  loanPayManager : ILoanpayView[] = []
  loanpayInfoForm!: FormGroup
  loanpaySelected!: ILoanpayView
  listBookName: IBookManagerView[]=[]

  constructor(private loanpayApiService: LoanpayApiService,
              private messageService: MessageService,
              private BookApiService: BookApiService,
              private fb: FormBuilder,
              ) {
    this.loanpayInfoForm = fb.group({
      amount: [null],
      note: [null],
      status: [null],
      call_card_details_id: [null],
      book_name: [null],
      card_number: [null],
      staff_id: [null],
      start_date: [null],
      end_date: [null],
      call_card_id: [null]

    })
  }


  ngOnInit(): void {
    this.getAllLoanpay();
    this.getAllBook()
  }

  getAllLoanpay() {
    this.loanpayApiService._getAllLoanpay().subscribe(
      (res: IResponseModel<ILoanpayResponse[]>) => {
        this.loanPayManager = []
        res.data.forEach(loanpayRes => {
          const loanpayView: ILoanpayView = {
            amount: loanpayRes.amount,
            note: loanpayRes.note,
            status: loanpayRes.status,
            call_card_id: loanpayRes.call_card_id,
            call_card_details_id: loanpayRes.call_card_detail_id,
            book_name: loanpayRes.book_name,
            card_number: loanpayRes.card_number,
            staff_id: loanpayRes.staff_id,
            start_date: loanpayRes.start_date,
            end_date: loanpayRes.end_date

          }
          this.loanPayManager.push(loanpayView)
        })
      }
    )
  }

//  add
  onAddNewLoanpay() {
    let list:ListBook[] = [
      {
        call_card_details_id: this.loanpayInfoForm.value.call_card_details_id,
        book_name: this.loanpayInfoForm.value.book_name,
        amount: this.loanpayInfoForm.value.amount,
      }
    ]

    const createNewLoanpayRequest: ILoanpayRequest = {
      call_card_id: this.loanpayInfoForm.value.call_card_id,
      start_date: this.loanpayInfoForm.value.start_date,
      end_date: this.loanpayInfoForm.value.end_date,
      note: this.loanpayInfoForm.value.note,
      staff_id: this.loanpayInfoForm.value.staff_id,
      list_book: list,
      card_number: this.loanpayInfoForm.value.card_number
    }

    this.loanpayApiService._createNewLoanpay(createNewLoanpayRequest).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo', detail:'Thêm mới danh mục thành công'});
        console.log('Them moi danh muc thanh cong')
        this.getAllLoanpay()
      },
      err => {
        console.log(err);
        this.messageService.add({severity:'error', summary:'Thông báo', detail:'Thêm mới danh mục thất bại'});
        console.log('Them moi danh muc that bai')
      }
    )
  }

  onDeleteLoanpay() {
    if(this.loanpaySelected) {
      this.loanpayApiService._deleteLoanpay(this.loanpaySelected.call_card_id).subscribe(
        (res: IResponseModel<any>) => {
          console.log('Xoa danh muc thanh cong')
          this.messageService.add({severity:'success', summary:'Thông báo', detail:'Xóa danh mục thành công'});
          this.getAllLoanpay()
        },
        err => {
          this.messageService.add({severity:'error', summary:'Thông báo', detail:'Xoa danh muc that bai'});
          console.log('Xoa danh muc that bai')
        }
      )
    }
  }

  //edit
  editLoanpay(i: ILoanpayView) {
    this.loanpaySelected = i
    this.loanpayInfoForm.patchValue(
      {
        amount: i.amount,
        note: i.note,
        status: i.status,
        call_card_id: i.call_card_id,
        call_card_details_id: i.call_card_details_id,
        book_name: i.book_name,
        card_number: i.card_number,
        staff_id: i.staff_id,
        start_date: i.start_date,
        end_date: i.end_date
        // category_name: i.category_name,
      }
    )
  }

  onEditLoanpay() {
    let list:ListBook[] = [
      {
        call_card_details_id: this.loanpayInfoForm.value.call_card_details_id,
        book_name: this.loanpayInfoForm.value.book_name,
        amount: this.loanpayInfoForm.value.amount,
      }
    ]

    const editLoanpayRequest: IEditLoanpayRequest = {
      call_card_id: this.loanpayInfoForm.value.call_card_id,
      start_date: this.loanpayInfoForm.value.start_date,
      end_date: this.loanpayInfoForm.value.end_date,
      note: this.loanpayInfoForm.value.note,
      staff_id: this.loanpayInfoForm.value.staff_id,
      list_book: list,
      card_number: this.loanpayInfoForm.value.card_number
    }

    this.loanpayApiService._editLoanpay(editLoanpayRequest).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo', detail:'Chỉnh sửa danh mục thành công'});
        console.log('Sua danh muc thanh cong')
        this.getAllLoanpay()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo', detail:'Chỉnh sửa danh mục thất bại'});
        console.log('Sua danh muc that bai')
      }
    )
  }
  selectLoanpay(i: ILoanpayView) {
    this.loanpaySelected = i
  }

  //get book_name
  getAllBook() {
    this.BookApiService._getAllBook().subscribe(
      (res: IResponseModel<IBookManagerResponse[]>) => {
        console.log(res)
        this.listBookName = []
        res.data.forEach(bookManagerRes => {
          const bookManagerView: IBookManagerView = {
            book_id: bookManagerRes.bookId,
            book_name:bookManagerRes.bookName,
            name_author:bookManagerRes.idAuthor,
            publishing_year:bookManagerRes.publishingYear,
            page_number:bookManagerRes.pageNumber,
            image:bookManagerRes.image,
            price:bookManagerRes.price,
            category_name:bookManagerRes.idTypeBook,
            publish_name:bookManagerRes.companyId,
            amount:bookManagerRes.amount,
            status:bookManagerRes.status,
          }
          this.listBookName.push(bookManagerView)
        })
      }
    )
  }

}

// interface loanPayManager {
//   amount: number,
//   note: string,
//   status: number,
//   call_card_id: number,
//   call_card_details_id: number,
//   book_name: string,
//   card_number: string,
//   staff_id: number,
//   start_date: string,
//   end_date: string
// }


function editLoanpayRequest(editLoanpayRequest: any) {
    throw new Error('Function not implemented.');
}

