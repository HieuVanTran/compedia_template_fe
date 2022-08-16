import { Component, OnInit } from '@angular/core';
import {IBookCategoryView} from "../../../../models/views/book-category.view";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ICollectMoneyView} from "../../../../models/views/collect-money.view";
import {CategoryApiService} from "../../../../services/api/category-api.service";
import {collectMoneyApiService} from "../../../../services/api/collect-money-api.service";
import {IResponseModel} from "../../../../models/commons/response.model";
import {IBookCategoryResponse} from "../../../../models/responses/book-category.response";
import {ICollectMoneyResponses} from "../../../../models/responses/collect-money.response";
import {IBookCategoryRequest, IEditBookCategoryRequest} from "../../../../models/requests/book-category.request";
import {ICollectMoneyRequests, IEditCollectMoneyRequests} from "../../../../models/requests/collect-money.requests";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-delinquent-manager-list',
  templateUrl: './delinquent-manager-list.component.html',
  styleUrls: ['./delinquent-manager-list.component.css']
})
export class DelinquentManagerListComponent implements OnInit {

  delinquentManager : ICollectMoneyView[] = []
  moneyInfoForm!: FormGroup
  collectMoneySelected!: ICollectMoneyView


  constructor(private collectMoneyApiService: collectMoneyApiService,
              private messageService: MessageService,
              private fb: FormBuilder) {
    this.moneyInfoForm= fb.group({
      full_name: [null],
      fined_amount: [null],
      proceeds: [null],
      staff_id: [null]
    })
  }

  ngOnInit(): void {
    this.getAllCollectMoney()
  }

  getAllCollectMoney() {
    this.collectMoneyApiService._getAllcollectmoney().subscribe(
      (res: IResponseModel<ICollectMoneyResponses[]>) => {
        this.delinquentManager = []
        res.data.forEach(collectmoneyRes => {
          const collectMoneyView: ICollectMoneyView = {
            id:collectmoneyRes.collectMoneyId,
            full_name:collectmoneyRes.fullName,
            fined_amount:collectmoneyRes.finedAmount,
            proceeds:collectmoneyRes.proceeds,
            staff_id:collectmoneyRes.staffId
          }
          this.delinquentManager.push(collectMoneyView)
        })
      }
    )
  }
  onAddNewCollectMoney() {
    const createNewCollectMoneyRequest: ICollectMoneyRequests = {
      full_name:this.moneyInfoForm.value.full_name,
      fined_amount:this.moneyInfoForm.value.fined_amount,
      proceeds:this.moneyInfoForm.value.proceeds,
      staff_id:this.moneyInfoForm.value.staff_id,
    }
    this.collectMoneyApiService._createNewCollectmoney(createNewCollectMoneyRequest).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo!', detail:'Thêm mới thành công! '});
        console.log('Them moi danh muc thanh cong')
        this.getAllCollectMoney()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo!', detail:'Thêm mơi thất bại! '});
        console.log('Them moi danh muc that bai')
      }
    )
  }
  onDeleteCollectMoney() {
    if(this.collectMoneySelected) {
      this.collectMoneyApiService._deletecollectmoney(this.collectMoneySelected.id).subscribe(
        (res: IResponseModel<any>) => {
          this.messageService.add({severity:'success', summary:'Thông báo', detail:'Xóa danh mục thành công'});
          console.log('Xoa danh muc thanh cong')
          this.getAllCollectMoney()
        },
        err => {
          this.messageService.add({severity:'error', summary:'Thông báo', detail:'Xóa danh mục thất bại'});
          console.log('Xoa danh muc that bai')
        }
      )
    }
  }

  editBookCategory(i: ICollectMoneyView) {
    this.collectMoneySelected = i
    this.moneyInfoForm.patchValue(
      {
        full_name:i.full_name,
        fined_amount: i.fined_amount,
        proceeds:i.proceeds,
        staff_id:i.staff_id
      }
    )
  }

  onEditCollectMoney() {
    const editCollectMoneyRequests: IEditCollectMoneyRequests = {
      full_name: this.moneyInfoForm.value.full_name,
      fined_amount: this.moneyInfoForm.value.fined_amount,
      id: this.collectMoneySelected.id,
      proceeds:this.moneyInfoForm.value.proceeds,
      staff_id:this.moneyInfoForm.value.staff_id,
    }
    this.collectMoneyApiService._editcollectmoney(editCollectMoneyRequests).subscribe(
      (res: IResponseModel<any>) => {
        this.messageService.add({severity:'success', summary:'Thông báo', detail:'Chỉnh sửa danh mục thành công'});
        console.log('Sua danh muc thanh cong')
        this.getAllCollectMoney()
      },
      err => {
        this.messageService.add({severity:'error', summary:'Thông báo', detail:'Chỉnh sửa danh mục thất bại'});
        console.log('Sua danh muc that bai')
      }
    )
  }

  selectCollectMoney(i: ICollectMoneyView) {
    this.collectMoneySelected = i
  }
}

interface delinquentManager  {
  id: number,
  full_Name: string,
  fined_amount: string,
  proceeds: string,
  staff_id: string
}
