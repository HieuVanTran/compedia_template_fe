import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthApiService} from "../../../../services/api/auth-api.service";
import {Constant} from "../../../../util/constant";

@Component({
  selector: 'app-chang-password',
  templateUrl: './chang-password.component.html',
  styleUrls: ['./chang-password.component.css']
})
export class ChangPasswordComponent implements OnInit {
  passwordRegex = Constant.REGEX_PASSWORD_FOR_VALIDATOR
  changPasswordFroms:FormGroup
  constructor(private fb:FormBuilder,
              private authApiService: AuthApiService
              ) {
    this.changPasswordFroms = this.fb.group({
      old_password: new FormControl(null, [Validators.required]),
      new_password: new FormControl(null,[Validators.required , Validators.pattern(this.passwordRegex)]),
      re_password: new FormControl(null,[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.changPasswordFroms.invalid){
      console.log('form invalid')
       return
    }
  }
}
