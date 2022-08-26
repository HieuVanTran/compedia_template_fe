import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ICollectMoneyView} from "../../../../models/views/collect-money.view";
import {CollectMoneyApiService} from "../../../../services/api/collect-money-api.service";
import {IResponseModel} from "../../../../models/commons/response.model";
import {ICollectMoneyResponses} from "../../../../models/responses/collect-money.response";
import {ICollectMoneyRequests, IEditCollectMoneyRequests} from "../../../../models/requests/collect-money.requests";
import {MessageService} from "primeng/api";
import {IStaffManagerView} from "../../../../models/views/staff-manager.view";
import {StaffManagerApiService} from "../../../../services/api/staff-manager-api.service";
import {IStaffManagerResponse} from "../../../../models/responses/staff-manager.response";

@Component({
  selector: 'app-delinquent-manager-list',
  templateUrl: './delinquent-manager-list.component.html',
  styleUrls: ['./delinquent-manager-list.component.css']
})
export class DelinquentManagerListComponent implements OnInit {

  delinquentManager : ICollectMoneyView[] = [];
  moneyInfoForm!: FormGroup;
  collectMoneySelected!: ICollectMoneyView;
  listStaffManager: IStaffManagerView[] = [];

  constructor(private collectMoneyApiService: CollectMoneyApiService,
              private fb:FormBuilder,
              private messageService: MessageService,
              private staffManagerApiService: StaffManagerApiService) {
    this.moneyInfoForm = fb.group({
      fullName: [null],
      finedAmount: [null],
      proceeds: [null],
      staffId: [null],
      userId: [null]
    })
  }
  ngOnInit(): void {
    this.getAllCollectMoney();
    this.getAllStaffManager()
  }

  getAllCollectMoney() {
    this.collectMoneyApiService._getAllCollectMoney().subscribe(
      (res: IResponseModel<ICollectMoneyResponses[]>) => {
        this.delinquentManager = [];
        res.data.forEach( collectMoneyRes => {
          const collectMoneyView: ICollectMoneyView = {
            id: collectMoneyRes.collect_money_id,
            fullName: collectMoneyRes.full_name,
            finedAmount: collectMoneyRes.fined_amount,
            proceeds: collectMoneyRes.proceeds,
            staffId: collectMoneyRes.staff_name,
            userId: collectMoneyRes.user_name
          };
          this.delinquentManager.push(collectMoneyView)
        })
      }
    )
  }

  onAddNewCollectMoney() {
    const createNewCollectMoneyRequest: ICollectMoneyRequests = {
      full_name: this.moneyInfoForm.value.fullName,
      fined_amount: this.moneyInfoForm.value.finedAmount,
      proceeds: this.moneyInfoForm.value.proceeds,
      staff_id: this.moneyInfoForm.value.staffId,
      user_id: this.moneyInfoForm.value.userId
    };
    this.collectMoneyApiService._createNewCollectMoney(createNewCollectMoneyRequest).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo!', detail:'Tạo mới thành công! '});
        console.log('Success');
        this.getAllCollectMoney()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo!', detail:'Tạo thất bại! '});
        console.log('Failed');

      }
    )
  }

  onDeleteAccount() {
    if(this.collectMoneySelected) {
      this.collectMoneyApiService._deleteCollectMoney(this.collectMoneySelected.id).subscribe(
        (res: IResponseModel<any>) => {
          this.messageService.add({severity:'success', summary:'Thông báo!', detail:'Xóa thành công! '});
          console.log('Xoa tai khoan thanh cong');
          this.getAllCollectMoney()
        },
        err => {
          this.messageService.add({severity:'error', summary:'Thông báo!', detail:'Xóa thất bại! '});
          console.log('Xoa tai khoan that bai')
        }
      )
    }
  }

  onEditCollectMoney() {
    const editCollectMoneyRequests: IEditCollectMoneyRequests = {
      fined_amount: this.moneyInfoForm.value.finedAmount,
      full_name: this.moneyInfoForm.value.fullName,
      proceeds: this.moneyInfoForm.value.proceeds,
      staff_id: this.moneyInfoForm.value.staffId,
      user_id: this.moneyInfoForm.value.userId,
      id: this.collectMoneySelected.id
    };
    this.collectMoneyApiService._editCollectMoney(editCollectMoneyRequests).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo!', detail:'Chỉnh sửa thành công! '});
        console.log('Thay doi thong tin thanh cong');
        this.getAllCollectMoney()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo!', detail:'Chỉnh sửa thất bại! '});
        console.log('Thay doi thong tin thanh cong');
      }
    )
  }

  editCollectMoney(i: ICollectMoneyView) {
    this.collectMoneySelected = i;
    this.moneyInfoForm.patchValue(
      {
        userId: i.userId,
        finedAmount: i.finedAmount,
        fullName: i.fullName,
        proceeds: i.proceeds,
        staffId: i.staffId
    })
  }

  selectCollectMoney(i: ICollectMoneyView) {
    this.collectMoneySelected = i
  }

  getAllStaffManager() {
    this.staffManagerApiService._getAllStaffManager().subscribe(
      (res: IResponseModel<IStaffManagerResponse[]>)  => {
        this.listStaffManager = [];
        res.data.forEach( staffManagerRes => {
          const staffManagerView: IStaffManagerView = {
            id: staffManagerRes.staff_id,
            name: staffManagerRes.name_staff,
            phoneNum: staffManagerRes.phone_number,
            address: staffManagerRes.address,
            dateOfBirth: staffManagerRes.date_of_birth
          };
          this.listStaffManager.push(staffManagerView)
        })
      }
    )
  }
}
