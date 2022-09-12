import { Component, OnInit } from '@angular/core';
import {Token} from "@angular/compiler";
import {TokenService} from "../../../../services/token.service";
import {IResponseModel} from "../../../../models/commons/response.model";
import {GetOneAccApiService} from "../../../../services/api/getOneAcc.service";
import {IGetOneAccView} from "../../../../models/views/getOneAcc.view";
import {IGetOnAccResponse} from "../../../../models/responses/getOnAcc.response";
import {FormBuilder, FormGroup} from "@angular/forms";
declare function toggleMenu(): any
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  getOneAccManager: IGetOneAccView[]=[]
  getOneAccInfoForm!: FormGroup



  constructor(
    private getOneApiService: GetOneAccApiService,
    private tokenService: TokenService,
    // private fb: FormBuilder
  ) {
    // this.getOneAccInfoForm = this.fb.group({
    //   account_id: [null],
    //   role_id: [null],
    //   username: [null],
    //   password: [null],
    //   phone: [null],
    //   email: [null],
    //   full_name: [null],
    //   creat_date: [null],
    //   update_date: [null],
    //   date_of_birth: [null],
    //   code_role: [null]
    // })
  }

  ngOnInit(): void {
    // this.getOneAcc()
  }
  toggleMenu() {
    toggleMenu()
  }
  logout() {
    this.tokenService.clearKey()
  }
  // getOneAcc(){
  //   this.getOneApiService._getOneAcc().subscribe(
  //     (res: IResponseModel<IGetOnAccResponse[]>) => {
  //       this.getOneAccManager = []
  //       res.data.forEach(getOneAccRes => {
  //         const getOneAccView: IGetOneAccView = {
  //           account_id: getOneAccRes.account_id,
  //           role_id: getOneAccRes.role_id,
  //           username: getOneAccRes.username,
  //           password: getOneAccRes.password,
  //           phone: getOneAccRes.phone,
  //           email: getOneAccRes.email,
  //           full_name: getOneAccRes.full_name,
  //           creat_date: getOneAccRes.creat_date,
  //           update_date: getOneAccRes.update_date,
  //           date_of_birth: getOneAccRes.date_of_birth,
  //           code_role: getOneAccRes.code_role
  //
  //         }
  //         this.getOneAccManager.push(getOneAccView)
  //       })
  //     }
  //   )
  // }
}

