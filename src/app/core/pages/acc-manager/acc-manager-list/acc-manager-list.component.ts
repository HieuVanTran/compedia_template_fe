import { Component, OnInit } from '@angular/core';
import {AccountApiService} from "../../../../services/api/account-api.service";
import {IPageResponseModel, IResponseModel} from "../../../../models/commons/response.model";

import {IAccountManagerResponse} from "../../../../models/responses/account-manager.response";
import {IAccountManagerView} from "../../../../models/views/account-manager.view";
import {FormBuilder, FormGroup} from "@angular/forms";
import {IAccountManagerRequest, IEditAccountManagerRequest} from "../../../../models/requests/account-manager.request";
import {IRoleManagerView} from "../../../../models/views/role-manager.view";
import {MessageService} from "primeng/api";
import {RoleManagerApiService} from "../../../../services/api/role-manager-api.service";
import {IRoleManagerResponse} from "../../../../models/responses/role-manager.response";
import {Constant} from "../../../../util/constant";

@Component({
  selector: 'app-acc-manager-list',
  templateUrl: './acc-manager-list.component.html',
  styleUrls: ['./acc-manager-list.component.css']
})
export class AccManagerListComponent implements OnInit {


  accManager: IAccountManagerView[] = [];
  accountInfoForm!: FormGroup;
  accountSelected!: IAccountManagerView;
  listRoleManager: IRoleManagerView[] = [];
  usernameSearch!: string;
  fullNameSearch!: string;
  emailSearch!: string;
  roleIdSearch: number | null = null;
  page: number = Constant.PAGE_INIT
  size: number = Constant.SIZE_INIT


  constructor(private accountApiService: AccountApiService,
              private fb: FormBuilder,
              private messageService: MessageService,
              private roleManagerApiService: RoleManagerApiService) {
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
    this.getAllAccountManager();
    this.getAllRoleManager();
  }

  getAllAccountManager() {
    this.accountApiService._getAllAccountManager().subscribe(
      (res: IResponseModel<IAccountManagerResponse[]>) => {
        this.accManager = [];
        res.data.forEach(accountManagerRes => {
          const accountManagerView: IAccountManagerView = {
            id: accountManagerRes.account_id,
            username: accountManagerRes.username,
            password: accountManagerRes.password,
            full_name: accountManagerRes.full_name,
            date_of_birth: accountManagerRes.date_of_birth,
            email: accountManagerRes.email,
            phone: accountManagerRes.phone,
            role_id: accountManagerRes.code_role
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
      dob: this.accountInfoForm.value.date_of_birth,
      email: this.accountInfoForm.value.email,
      phone: '0' + this.accountInfoForm.value.phone,
      role_id: this.accountInfoForm.value.role_id
    };
    this.accountApiService._createNewAccount(createNewAccountRequest).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity: 'success', summary: 'Thông báo!', detail: 'Tạo tài khoản thành công! '});
        console.log('Tao tai khoan thanh cong');
        this.getAllAccountManager()
      },
      err => {
        console.log(err)
        this.messageService.add({severity: 'error', summary: 'Thông báo!', detail: err.error});
        console.log('Tao tai khoan that bai')
      }
    )
  }

  onDeleteAccount() {
    if (this.accountSelected) {
      this.accountApiService._deleteAccount(this.accountSelected.id).subscribe(
        (res: IResponseModel<any>) => {
          this.messageService.add({severity: 'success', summary: 'Thông báo!', detail: 'Xóa thành công! '});
          console.log('Xoa tai khoan thanh cong');
          this.getAllAccountManager()
        },
        err => {
          this.messageService.add({severity: 'error', summary: 'Thông báo!', detail: 'Xóa thất bại! '});
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
        full_name: i.full_name,
        password: i.password,
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
      role_id: this.accountInfoForm.value.role_id,
      id: this.accountSelected.id
    };
    this.accountApiService._editAccount(editAccountManagerRequest).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity: 'success', summary: 'Thông báo!', detail: 'Chỉnh sửa thành công! '});
        console.log('Thay doi thong tin thanh cong');
        this.getAllAccountManager()
      },
      err => {
        this.messageService.add({severity: 'error', summary: 'Thông báo!', detail: 'Chỉnh sửa thất bại! '});
        console.log('Thay doi thong tin that bai')
      }
    )
  }

  selectAccount(i: IAccountManagerView) {
    this.accountSelected = i;
    console.log(this.accountSelected)
  }


  getAllRoleManager() {
    this.roleManagerApiService._getAllRoleManager().subscribe(
      (res: IResponseModel<IRoleManagerResponse[]>) => {
        this.listRoleManager = [];
        res.data.forEach(roleManagerRes => {
          const roleManagerView: IRoleManagerView = {
            id: roleManagerRes.roleId,
            code: roleManagerRes.codeRole,
            name: roleManagerRes.name
          };
          this.listRoleManager.push(roleManagerView)
        })
      }
    )
  }


  onSearch() {
    const searchRequest = {
      username: this.usernameSearch,
      fullName: this.fullNameSearch,
      email: this.emailSearch,
      roleId: this.roleIdSearch,
      page: this.page,
      size: this.size
    }
    console.log(searchRequest)
    this.accountApiService._searchAccount(searchRequest).subscribe(
      (res: IResponseModel<IPageResponseModel<IAccountManagerResponse>>) => {
        console.log(res)
        this.accManager = [];
        res.data.results.forEach(accountManagerRes => {
          const accountManagerView: IAccountManagerView = {
            id: accountManagerRes.account_id,
            username: accountManagerRes.username,
            password: accountManagerRes.password,
            full_name: accountManagerRes.full_name,
            date_of_birth: accountManagerRes.date_of_birth,
            email: accountManagerRes.email,
            phone: accountManagerRes.phone,
            role_id: accountManagerRes.code_role
          };
          this.accManager.push(accountManagerView)
        })
        console.log(this.accManager)
      }
    )
  }

  selectRole() {
    console.log(this.roleIdSearch)
  }
}
