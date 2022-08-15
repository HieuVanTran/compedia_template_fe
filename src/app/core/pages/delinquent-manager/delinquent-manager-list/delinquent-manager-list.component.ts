import { Component, OnInit } from '@angular/core';
import {IBookCategoryView} from "../../../../models/views/book-category.view";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ICollectMoneyView} from "../../../../models/views/collect-money.view";
import {CategoryApiService} from "../../../../services/api/category-api.service";
import {collectMoneyApiService} from "../../../../services/api/collect-money-api.service";
import {IResponseModel} from "../../../../models/commons/response.model";
import {IBookCategoryResponse} from "../../../../models/responses/book-category.response";
import {ICollectMoneyResponses} from "../../../../models/responses/collect-money.response";
import {IBookCategoryRequest} from "../../../../models/requests/book-category.request";
import {ICollectMoneyRequests} from "../../../../models/requests/collect-money.requests";

@Component({
  selector: 'app-delinquent-manager-list',
  templateUrl: './delinquent-manager-list.component.html',
  styleUrls: ['./delinquent-manager-list.component.css']
})
export class DelinquentManagerListComponent implements OnInit {

  delinquentManager : ICollectMoneyView[] = []
  moneyInfoForm!: FormGroup
  collectmoneySelected!: ICollectMoneyView




  constructor(private collectMoneyApiService: collectMoneyApiService,
              private fb: FormBuilder) {
    this.moneyInfoForm= fb.group({
      collectMoneyId:[null],
      cardId: [null],
      fullName: [null],
      finedAmount: [null],
      proceeds: [null],
      staffId: [null]
    })
  }

  ngOnInit(): void {
    this.getAllcollectmoney()
  }

  getAllcollectmoney() {
    this.collectMoneyApiService._getAllcollectmoney().subscribe(
      (res: IResponseModel<ICollectMoneyResponses[]>) => {
        this.delinquentManager = []
        res.data.forEach(collectmoneyRes => {
          const collectMoneyView: ICollectMoneyView = {
            collectMoneyId:collectmoneyRes.collectMoneyId,
           cardId:collectmoneyRes.cardId,
            fullName:collectmoneyRes.fullName,
            finedAmount:collectmoneyRes.finedAmount,
            proceeds:collectmoneyRes.proceeds,
            staffId:collectmoneyRes.staffId
          }
          this.delinquentManager.push(collectMoneyView)
        })
      }
    )
  }
  onAddNewcollectmoney() {
    const createNewcollectmoneyRequest: ICollectMoneyRequests = {
    cardId:this.moneyInfoForm.value.cardId,
      fullName:this.moneyInfoForm.value.fullname,
      finedAmount:this.moneyInfoForm.value.finedAmount,
      proceeds:this.moneyInfoForm.value.proceeds,
      staffId:this.moneyInfoForm.value.staffId,
    }
    this.collectMoneyApiService._createNewCollectmoney(createNewcollectmoneyRequest).subscribe(
      (res: IResponseModel<any>) => {
        console.log('Them moi danh muc thanh cong')
        this.getAllcollectmoney()
      },
      err => {
        console.log('Them moi danh muc that bai')
      }
    )
  }

}

interface delinquentManager  {
  collectMoneyId: number,
  cardId: string,
  fullName: string,
  finedAmount: string,
  proceeds: string,
  staffId: string
}
