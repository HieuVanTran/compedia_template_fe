import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {ILoginResponse} from "../../../models/responses/login.response";
import {ILoginRequest} from "../../../models/requests/login.request";
import {AuthApiService} from "../../../services/api/auth-api.service";
import {IResponseModel} from "../../../models/commons/response.model";
import {TokenService} from "../../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private fb: FormBuilder,
              private authApiService: AuthApiService,
              private router: Router,
              private TokenService: TokenService) {
    this.loginForm = fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login() {
    if(this.loginForm.invalid) {
      console.log('form invalid')
      return
    }
    const loginRequest: ILoginRequest = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.authApiService._login(loginRequest).subscribe(
      (res: IResponseModel<ILoginResponse>) => {
        this.router.navigate(['/pages/book-manager'], {queryParams:{ac: 2}})
        this.TokenService.setKey(JSON.stringify(res.data.token))
      },
      err => {
        console.log(err)
      },
    )
  }
}
