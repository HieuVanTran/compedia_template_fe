import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { IResponseModel } from 'src/app/models/commons/response.model';
import {IEditUserRequest, IUserRequest } from 'src/app/models/requests/user.request';
import { IUserResponse } from 'src/app/models/responses/user.reponse';
import { IUserView } from 'src/app/models/views/user.view';
import { UserApiService } from 'src/app/services/api/user-api.service';

@Component({
  selector: 'app-user-manager-list',
  templateUrl: './user-manager-list.component.html',
  styleUrls: ['./user-manager-list.component.css']
})
export class UserManagerListComponent implements OnInit {

  userManager : IUserView[] = []
  userInfoForm!: FormGroup
  userSelected!: IUserView

  constructor(private userApiService: UserApiService,
              private messageService: MessageService,
              private fb: FormBuilder) {
    this.userInfoForm = fb.group({
      user_id: [null],
      username:[null],
      full_name: [null],
      create_date: [null],
      expiration_date: [null],
      address: [null],
      phone: [null],
      card_number: [null],
      account_id: [null],
      call_card_id: [null]
    })
  }

  ngOnInit(): void {
    this.getAllUser()
  }

  getAllUser() {
    this.userApiService._getAllUser().subscribe(
      (res: IResponseModel<IUserResponse[]>) => {
        this.userManager = []
        res.data.forEach(userRes => {
          const userView: IUserView = {
            user_id: userRes.user_id,
            username: userRes.username,
            full_name: userRes.full_name,
            create_date: userRes.create_date,
            expiration_date: userRes.expiration_date,
            address: userRes.address,
            phone: userRes.phone,
            card_number: userRes.card_number,
            account_id: userRes.account_id,
            call_card_id: userRes.call_card_id
          }
          this.userManager.push(userView)
        })
        console.log(this.userManager)
      }
    )
  }

  onAddNewUser() {
    const createNewUser: IUserRequest = {
      id: this.userInfoForm.value.userId,
      full_name: this.userInfoForm.value.fullName,
      create_date: this.userInfoForm.value.create_date,
      expiration_date: this.userInfoForm.value.expirationDate,
      address: this.userInfoForm.value.address,
      phone:  this.userInfoForm.value.phone,
      account_id: this.userInfoForm.value.accountId,
      call_card_id: this.userInfoForm.value.callCardId,

      // category_name: this.bookInfoForm.value.category_name,
    }
    this.userApiService._createNewUser(createNewUser).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo', detail:'Thêm mới danh mục thành công'});
        console.log('Them moi danh muc thanh cong')
        this.getAllUser()
      },
      err => {
        console.log(err);
        this.messageService.add({severity:'error', summary:'Thông báo', detail:'Thêm mới danh mục thất bại'});
        console.log('Them moi danh muc that bai')
      }
    )
  }

//  delete
  onDeleteUser() {
    if(this.userSelected) {
      this.userApiService._deleteUser(this.userSelected.user_id).subscribe(
        (res: IResponseModel<any>) => {
          this.messageService.add({severity:'success', summary:'Thông báo', detail:'Xóa danh mục thành công'});
          console.log('Xoa danh muc thanh cong')
          this.getAllUser()
        },
        err => {
          this.messageService.add({severity:'error', summary:'Thông báo', detail:'Xóa danh mục thất bại'});
          console.log('Xoa danh muc that bai')
        }
      )
    }
  }

  //edit
  editUser(i: IUserView) {
    this.userSelected = i
    this.userInfoForm.patchValue(
      {
        // userId: i.userId,
        // fullName: i.fullName,
        // create_date: i.create_date,
        // expirationDate: i.expirationDate,
        // address: i.address,
        // phone: i.phone,
        // accountId: i.accountId,
        // callCardId: i.callCardId
        // category_name: i.category_name,
      }
    )
  }

  onEditUser() {
    const editUserRequest: IEditUserRequest = {
      // category_name: this.bookInfoForm.value.category_name,
      // id: this.bookCategorySelected.id
      id: this.userInfoForm.value.userId,
      full_name: this.userInfoForm.value.fullName,
      create_date: this.userInfoForm.value.create_date,
      expiration_date: this.userInfoForm.value.expirationDate,
      address: this.userInfoForm.value.address,
      phone:  this.userInfoForm.value.phone,
      account_id: this.userInfoForm.value.accountId,
      call_card_id: this.userInfoForm.value.callCardId,
    }
    this.userApiService._editUser(editUserRequest).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo', detail:'Chỉnh sửa danh mục thành công'});
        console.log('Sua danh muc thanh cong')
        this.getAllUser()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo', detail:'Chỉnh sửa danh mục thất bại'});
        console.log('Sua danh muc that bai')
      }
    )
  }

  selectUser(i: IUserView) {
    this.userSelected = i
  }

}



