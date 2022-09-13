import {Component, OnInit} from '@angular/core';
import {IGetOneAccView} from "../../../../models/views/getOneAcc.view";
import {GetOneAccApiService} from "../../../../services/api/getOneAcc.service";
import {IStaffManagerView} from "../../../../models/views/staff-manager.view";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-profile-list',
  templateUrl: './user-profile-list.component.html',
  styleUrls: ['./user-profile-list.component.css']
})
export class UserProfileListComponent implements OnInit {

  getOneAccManager!: IGetOneAccView;
  getOneAccInfoForm!: FormGroup;
  account_id!: number
  staffManagerSelected!: IStaffManagerView;


  constructor(private getOneAccApiService: GetOneAccApiService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder)
  {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        console.log(params)
        this.account_id = parseInt(<string>params.get('id'))
        if(this.account_id){
          this.getAcc(this.account_id)
        }
      }
    )
    this.getOneAccInfoForm = this.fb.group({
        account_id: [null],
        role_id: [null],
        username: [null],
        password: [null],
        phone: [null],
        email: [null],
        full_name: [null],
        creat_date: [null],
        update_date: [null],
        date_of_birth: [null],
        code_role: [null]
    })
  }

  ngOnInit(): void {
    // this.getOneAcc()

  }
    // getOneAcc(){
    //   this.getOneAccApiService._getOneAcc().subscribe(
    //     (res: IResponseModel<IGetOnAccResponse[]>) => {
    //       this.getOneAccManager = [];
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
    //         console.log(getOneAccView)
    //       })
    //     }
    //   )
    // }
  getAcc(account_id: number) {
    console.log(account_id)
    this.getOneAccApiService._getOneAcc(account_id).subscribe(data =>
    {
      console.log(data)
      this.getOneAccManager = {
        account_id: data.data.account_id,
        role_id: data.data.role_id,
        username: data.data.username,
        password: data.data.password,
        phone: data.data.phone,
        email: data.data.email,
        full_name: data.data.full_name,
        creat_date: data.data.creat_date,
        update_date: data.data.update_date,
        date_of_birth:data.data.date_of_birth,
        code_role: data.data.code_role
      }
    })
  }
}


