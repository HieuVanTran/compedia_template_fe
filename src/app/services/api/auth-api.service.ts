    import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {ILoginRequest} from "../../models/requests/login.request";
import {Observable} from "rxjs";
import {IResponseModel} from "../../models/commons/response.model";
import {ILoginResponse} from "../../models/responses/login.response";
import {HttpClient} from "@angular/common/http";
import {IChangePasswordRequest} from "../../models/requests/change-password.request";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService{
  api = environment.api_url

  constructor(private http: HttpClient) {
  }

  // DOTENV
  _login(requestBody: ILoginRequest): Observable<IResponseModel<ILoginResponse>> {
    const url = `${this.api}/auth/login`
    return this.http.post<IResponseModel<ILoginResponse>>(url, requestBody)
  }

  _changPassword(request: IChangePasswordRequest): Observable<IResponseModel<any>> {
    const url = `${this.api}/account/change-password`;
    return this.http.put<IResponseModel<any>>(url, request)
  }
}
