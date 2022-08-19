import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponseModel} from "../../models/commons/response.model";
import {IBookCategoryResponse} from "../../models/responses/book-category.response";
import {IBookCategoryRequest, IEditBookCategoryRequest} from "../../models/requests/book-category.request";
import { IUserResponse } from "src/app/models/responses/user.reponse";
import {IEditUserRequest, IUserRequest } from "src/app/models/requests/user.request";


@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  api = environment.api_url

  constructor(
    private http: HttpClient
  ) {
  }

  _getAllUser(): Observable<IResponseModel<IUserResponse[]>> {
    const url = `${this.api}/user/user`
    return this.http.get<IResponseModel<IUserResponse[]>>(url)
  }
  _createNewUser(requestBody: IUserRequest): Observable<IResponseModel<any>> {
    const url = `${this.api}/user`
    return this.http.post<IResponseModel<any>>(url, requestBody)
  }
  _deleteUser(userId: number): Observable<IResponseModel<any>> {
    const url = `${this.api}/user?id=${userId}`
    return this.http.delete<IResponseModel<any>>(url)
  }
  _editUser(requestBody: IEditUserRequest): Observable<IResponseModel<any>> {
    const url = `${this.api}/user`
    return this.http.put<IResponseModel<any>>(url, requestBody)
  }
}
