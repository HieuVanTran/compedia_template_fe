import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {ILoginResponse} from "../../../models/responses/login.response";
import {ILoginRequest} from "../../../models/requests/login.request";
import {AuthApiService} from "../../../services/api/auth-api.service";
import {IResponseModel} from "../../../models/commons/response.model";
import {TokenService} from "../../../services/token.service";
import {Router} from "@angular/router";
import {AccountService} from "../../../services/intercept/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showEye : boolean =false
  loginForm: FormGroup

  constructor(private fb: FormBuilder,
              private authApiService: AuthApiService,
              private router: Router,
              private TokenService: TokenService,
              private accountService: AccountService) {
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
        this.router.navigate(['/pages/chart'])
        this.TokenService.setKey(JSON.stringify(res.data.token))
        this.accountService.getAccountFromApi()
      },
      err => {
        console.log(err)
      },
    )
  }
}
