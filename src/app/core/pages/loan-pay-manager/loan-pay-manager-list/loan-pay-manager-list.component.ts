import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { IResponseModel } from 'src/app/models/commons/response.model';
import {IEditLoanpayRequest, ILoanpayRequest, ListBook } from 'src/app/models/requests/loanpay.request';
import { IBookManagerResponse } from 'src/app/models/responses/book-manager.response';
import { IDetailesResponses } from 'src/app/models/responses/detailes.responses';
import { ILoanpayResponse } from 'src/app/models/responses/loanpay.response';
import { IAccountManagerView } from 'src/app/models/views/account-manager.view';
import { IBookManagerView } from 'src/app/models/views/book-manager.view';
import { IDetailesView } from 'src/app/models/views/detailes.view';
import { ILoanpayView } from 'src/app/models/views/loanpay.view';
import { LoanpayApiService } from 'src/app/services/api/loanpay-api.service';
import {DetailesApiService} from "../../../../services/api/detailes-api.service";
import {AccountApiService} from "../../../../services/api/account-api.service";
import {StaffManagerApiService} from "../../../../services/api/staff-manager-api.service";
import { IAccountManagerResponse } from 'src/app/models/responses/account-manager.response';
import { IStaffManagerView } from 'src/app/models/views/staff-manager.view';
import { IStaffManagerResponse } from 'src/app/models/responses/staff-manager.response';

@Component({
  selector: 'app-loan-pay-manager-list',
  templateUrl: './loan-pay-manager-list.component.html',
  styleUrls: ['./loan-pay-manager-list.component.css']
})
export class LoanPayManagerListComponent implements OnInit {
  loanPayManager : ILoanpayView[] = []
  loanpayInfoForm!: FormGroup
  loanpaySelected!: ILoanpayView
  listDetailes: IDetailesView[]=[]
  listAccount: IAccountManagerView []=[]
  listStaff: IStaffManagerView []=[]


  constructor(private loanpayApiService: LoanpayApiService,
              private messageService: MessageService,
              private DetailesApiService: DetailesApiService,
              private AccountApiService : AccountApiService,
              private StaffManagerApiService: StaffManagerApiService,
              private fb: FormBuilder,
              ) {
    this.loanpayInfoForm = fb.group({
      amount: [null],
      note: [null],
      status: [null],
      call_card_details_id: [null],
      book_id: [null],
      card_number: [null],
      staff_id: [null],
      start_date: [null],
      end_date: [null],
      call_card_id: [null],
      account: [null]

    })
  }


  ngOnInit(): void {
    this.getAllLoanpay();
    this.getAllDetailes();
    this.getAllAccountManager();
    this.getAllStaffManager()
  }

  getAllLoanpay() {
    this.loanpayApiService._getAllLoanpay().subscribe(
      (res: IResponseModel<ILoanpayResponse[]>) => {
        this.loanPayManager = []
        res.data.forEach(loanpayRes => {
          const loanpayView: ILoanpayView = {
            call_card_id: loanpayRes.call_card_id,
            username: loanpayRes.username,
            staff_id: loanpayRes.staff_id,
            name_staff: loanpayRes.name_staff,
            status: loanpayRes.status,
            call_card_details_id: loanpayRes.call_card_details_id,
            note: loanpayRes.note,
            start_date: loanpayRes.start_date,
            end_date: loanpayRes.end_date,
            account_id: loanpayRes.account_id

          }
          this.loanPayManager.push(loanpayView)
        })
      }
    )
  }

 // add
  onAddNewLoanpay() {
    let list:ListBook[] = [
      {
        call_card_details_id: this.loanpayInfoForm.value.call_card_details_id,
        book_id: this.loanpayInfoForm.value.book_id,
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
      status:this.loanpayInfoForm.value.status,
      account_id: this.loanpayInfoForm.value.account_id

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
        call_card_id: i.call_card_id,
        username: i.username,
        staff_id: i.staff_id,
        name_staff: i.name_staff,
        status: i.status,
        call_card_details_id: i.call_card_details_id,
        note: i.note,
        start_date: i.start_date,
        end_date: i.end_date,
        account_id: i.account_id
        // category_name: i.category_name,
      }
    )
  }

  onEditLoanpay() {
    let list:ListBook[] = [
      {
        call_card_details_id: this.loanpayInfoForm.value.call_card_details_id,
        book_id: this.loanpayInfoForm.value.book_id,
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
      card_number: this.loanpayInfoForm.value.card_number,
      account_id: this.loanpayInfoForm.value.account_id
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

  //get detailes : book_name,amount
  getAllDetailes() {
    this.DetailesApiService._getAllDetailes().subscribe(
      (res: IResponseModel<IDetailesResponses[]>) => {
        console.log(res)
        this.listDetailes = []
        res.data.forEach(detailesRes => {
          const detailesView: IDetailesView = {
            call_card_details_id: detailesRes.call_card_details_id,
            book_id: detailesRes.book_id,
            book_name: detailesRes.book_name,
            amount: detailesRes.amount
            // status:bookManagerRes.status,
          }
          this.listDetailes.push(detailesView)
        })
      }
    )
  }

//  getAll account
  getAllAccountManager() {
    this.AccountApiService._getAllAccountManager().subscribe(
      (res: IResponseModel<IAccountManagerResponse[]>) => {
        this.listAccount = [];
        res.data.forEach(accountManagerRes => {
          const accountManagerView: IAccountManagerView = {
            id: accountManagerRes.account_id,
            username: accountManagerRes.username,
            full_name: accountManagerRes.full_name,
            date_of_birth: accountManagerRes.date_of_birth,
            email: accountManagerRes.email,
            phone: accountManagerRes.phone,
            role_id: accountManagerRes.code_role
          };
          this.listAccount.push(accountManagerView)
        })
      }
    )
  }

//  getAll staff
  getAllStaffManager() {
    this.StaffManagerApiService._getAllStaffManager().subscribe(
      (res: IResponseModel<IStaffManagerResponse[]>)  => {
        this.listStaff = [];
        res.data.forEach( staffManagerRes => {
          const staffManagerView: IStaffManagerView = {
            id: staffManagerRes.staff_id,
            name: staffManagerRes.name_staff,
            phoneNum: staffManagerRes.phone_number,
            address: staffManagerRes.address,
            dateOfBirth: staffManagerRes.date_of_birth
          };
          this.listStaff.push(staffManagerView)
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

