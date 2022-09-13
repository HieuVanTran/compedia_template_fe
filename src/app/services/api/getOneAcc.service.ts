import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPageResponseModel, IResponseModel} from "../../models/commons/response.model";
import { ILoanpayResponse } from "src/app/models/responses/loanpay.response";
import {IEditLoanpayRequest, ILoanpayRequest } from "src/app/models/requests/loanpay.request";
import {IBookManagerResponse} from "../../models/responses/book-manager.response";
import {IGetOnAccResponse} from "../../models/responses/getOnAcc.response";

@Injectable({
  providedIn: 'root'
})
export class GetOneAccApiService {
  api = environment.api_url

  constructor(
    private http: HttpClient
  ) {
  }

  _getOneAcc(request: any): Observable<IResponseModel<IGetOnAccResponse>> {
    const url = `${this.api}/account/get-one?account_id=${request}`;
    return this.http.get<IResponseModel<IGetOnAccResponse>>(url)
  }
}
