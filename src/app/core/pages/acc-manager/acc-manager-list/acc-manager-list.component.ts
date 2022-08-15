import { Component, OnInit } from '@angular/core';
import {AccountApiService} from "../../../../services/api/account-api.service";
import {IResponseModel} from "../../../../models/commons/response.model";

import {IAccountManagerResponse} from "../../../../models/responses/account-manager.response";
import {IAccountManagerView} from "../../../../models/views/account-manager.view";
import {FormBuilder, FormGroup} from "@angular/forms";
import {IAccountManagerRequest, IEditAccountManagerRequest} from "../../../../models/requests/account-manager.request";

@Component({
  selector: 'app-acc-manager-list',
  templateUrl: './acc-manager-list.component.html',
  styleUrls: ['./acc-manager-list.component.css']
})
export class AccManagerListComponent implements OnInit {


  accManager: IAccountManagerView[] = [];
  accountInfoForm!: FormGroup;
  accountSelected!: IAccountManagerView;

  constructor(private accountApiService: AccountApiService,
              private fb:FormBuilder) {
    this.accountInfoForm = fb.group({
      username: [null],
      password: [null],
      full_name: [null],
      date_of_birth: [null],
      email: [null],
      phone: [null],
      role_id: [null]
    })
  }

  ngOnInit(): void {
    this.getAllAccountManager()
  }

  getAllAccountManager() {
    this.accountApiService._getAllAccountManager().subscribe(
      (res: IResponseModel<IAccountManagerResponse[]>) => {
        this.accManager = [];
        res.data.forEach(accountManagerRes => {
          const accountManagerView: IAccountManagerView = {
            id: accountManagerRes.accountId,
            username: accountManagerRes.username,
            password: accountManagerRes.password,
            full_name: accountManagerRes.fullName,
            date_of_birth: accountManagerRes.dob,
            email: accountManagerRes.email,
            phone: accountManagerRes.phone,
            status: accountManagerRes.status,
            role_id: accountManagerRes.roleId
          };
          this.accManager.push(accountManagerView)
        })
      }
    )
  }

  onAddNewAccount() {
    const createNewAccountRequest: IAccountManagerRequest = {
      username: this.accountInfoForm.value.username,
      password: this.accountInfoForm.value.password,
      full_name: this.accountInfoForm.value.full_name,
      date_of_birth: this.accountInfoForm.value.date_of_birth,
      email: this.accountInfoForm.value.email,
      phone: this.accountInfoForm.value.phone,
      role_id: this.accountInfoForm.value.role_id
    };
    this.accountApiService._createNewAccount(createNewAccountRequest).subscribe(
      (res: IResponseModel<any>) => {
        console.log('Tao tai khoan thanh cong');
        this.getAllAccountManager()
      },
      err => {
        console.log('Tao tai khoan that bai')
      }
    )
  }

  onDeleteAccount() {
    if(this.accountSelected) {
      this.accountApiService._deleteAccount(this.accountSelected.id).subscribe(
        (res: IResponseModel<any>) => {
          console.log('Xoa tai khoan thanh cong');
          this.getAllAccountManager()
        },
        err => {
          console.log('Xoa tai khoan that bai')
        }
      )
    }
  }

  editAccount(i: IAccountManagerView) {
      this.accountSelected = i;
      this.accountInfoForm.patchValue(
        {
          username: i.username,
          password: i.password,
          full_name: i.full_name,
          date_of_birth: i.date_of_birth,
          email: i.email,
          phone: i.phone,
          role_id: i.role_id
        }
      )
    }

  onEditAccount() {
    const editAccountManagerRequest: IEditAccountManagerRequest = {
      username: this.accountInfoForm.value.username,
      password: this.accountInfoForm.value.password,
      full_name: this.accountInfoForm.value.full_name,
      dob: this.accountInfoForm.value.date_of_birth,
      email: this.accountInfoForm.value.email,
      phone: this.accountInfoForm.value.phone,
      roleId: this.accountInfoForm.value.role_id,
      id: this.accountSelected.id
    }
    this.accountApiService._editAccount(editAccountManagerRequest).subscribe(
      (res: IResponseModel<any>) => {
        console.log('Thay doi thong tin thanh cong');
        this.getAllAccountManager()
      },
      err => {
        console.log('Thay doi thong tin that bai')
      }
    )
  }

  selectAccount(i: IAccountManagerView) {
    this.accountSelected = i;
    console.log(this.accountSelected)
  }
}
interface accManager {
  id: number,
  username: string,
  password: string,
  full_name: string,
  date_of_birth: string,
  email: string,
  phone: string,
  status: string,
  role_id: string
}
