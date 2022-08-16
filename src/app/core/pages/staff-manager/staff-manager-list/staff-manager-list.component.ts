import { Component, OnInit } from '@angular/core';
import {IStaffManagerView} from "../../../../models/views/staff-manager.view";
import {StaffManagerApiService} from "../../../../services/api/staff-manager-api.service";
import {IResponseModel} from "../../../../models/commons/response.model";
import {IStaffManagerResponse} from "../../../../models/responses/staff-manager.response";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MessageService} from "primeng/api";
import {IEditStaffRequest, IStaffManagerRequest} from "../../../../models/requests/staff-manager.request";

@Component({
  selector: 'app-staff-manager-list',
  templateUrl: './staff-manager-list.component.html',
  styleUrls: ['./staff-manager-list.component.css']
})
export class StaffManagerListComponent implements OnInit {

  staffManager: IStaffManagerView[] = [];
  staffManagerInfoForm!: FormGroup;
  staffManagerSelected!: IStaffManagerView;

  constructor(private staffManagerApiService: StaffManagerApiService,
              private fb: FormBuilder,
              private messageService: MessageService) {
    this.staffManagerInfoForm = fb.group({
      name: [null],
      phoneNum: [null],
      address: [null],
      dateOfBirth: [null]
    })
  }

  ngOnInit(): void {
    this.getAllStaffManager()
  }

  getAllStaffManager() {
    this.staffManagerApiService._getAllStaffManager().subscribe(
      (res: IResponseModel<IStaffManagerResponse[]>)  => {
        this.staffManager = [];
        res.data.forEach( staffManagerRes => {
          const staffManagerView: IStaffManagerView = {
            id: staffManagerRes.staffId,
            name: staffManagerRes.nameStaff,
            phoneNum: staffManagerRes.phoneNumber,
            address: staffManagerRes.address,
            dateOfBirth: staffManagerRes.dateOfBirth
          };
          this.staffManager.push(staffManagerView)
        })
      }
    )
  }

  onAddNewStaff() {
    const createNewStaffRequest: IStaffManagerRequest = {
      name_staff: this.staffManagerInfoForm.value.name,
      phone_number: this.staffManagerInfoForm.value.phoneNum,
      address: this.staffManagerInfoForm.value.address,
      date_of_birth: this.staffManagerInfoForm.value.dateOfBirth
    };
    this.staffManagerApiService._createNewStaff(createNewStaffRequest).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo!', detail:'Thêm thành công! '});
        console.log('Thanh cong');
        this.getAllStaffManager()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo!', detail:'Thêm thất bại! '});
        console.log('That bai');
      }
    )
  }

  onDeleteStaff() {
    if(this.staffManagerSelected) {
      this.staffManagerApiService._deleteStaff(this.staffManagerSelected.id).subscribe(
        (res: IResponseModel<any>) => {
          this.messageService.add({severity:'success', summary:'Thông báo', detail:'Xóa thành công'});
          console.log('Xoa thanh cong');
          this.getAllStaffManager()
        },
        err => {
          this.messageService.add({severity:'error', summary:'Thông báo', detail:'Xóa thất bại'});
          console.log('Xoa that bai');
        }
      )
    }
  }

  onEditStaff() {
    const editStaffRequest: IEditStaffRequest = {
      id: this.staffManagerSelected.id,
      address: this.staffManagerInfoForm.value.address,
      date_of_birth: this.staffManagerInfoForm.value.dateOfBirth,
      name_staff: this.staffManagerInfoForm.value.name,
      phone_number: this.staffManagerInfoForm.value.phoneNum
    };
    this.staffManagerApiService._editStaff(editStaffRequest).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo!', detail:'Cập nhật thành công!'});
        console.log('Success');
        this.getAllStaffManager()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo!', detail:'Cập nhật thất bại!'});
        console.log('Failed');
      }
    )
  }


  editStaff(i: IStaffManagerView) {
    this.staffManagerSelected = i;
    this.staffManagerInfoForm.patchValue(
      {
        name: i.name,
        phoneNum: i.phoneNum,
        address: i.address,
        dateOfBirth: i.dateOfBirth
      }
    )
  }

  selectStaff(i: IStaffManagerView) {
    this.staffManagerSelected = i
  }
}

