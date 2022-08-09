import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {ILoginResponse} from "../../../models/responses/login.response";
import {ILoginRequest} from "../../../models/requests/login.request";
import {AuthApiService} from "../../../services/api/auth-api.service";
import {IResponseModel} from "../../../models/commons/response.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private fb: FormBuilder,
              private authApiService: AuthApiService) {
    this.loginForm = fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login() {
    if(this.loginForm.invalid) {
      return
    }
    const loginRequest: ILoginRequest = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.authApiService._login(loginRequest).subscribe(
      (res: IResponseModel<ILoginResponse>) => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }
}
