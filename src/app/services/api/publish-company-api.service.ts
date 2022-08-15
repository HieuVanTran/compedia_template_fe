import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponseModel} from "../../models/commons/response.model";
import {IPublishCompanyResponse} from "../../models/responses/publish-company.response";
import {IEditPublishCompanyRequest, IPublishCompanyRequest} from "../../models/requests/publish-company.request";
import {IEditAccountManagerRequest} from "../../models/requests/account-manager.request";

@Injectable({
  providedIn: 'root'
})

export class PublishCompanyApiService {
  api = environment.api_url;

  constructor(
    private http: HttpClient
  ) {}

  _getAllPublishCompany(): Observable<IResponseModel<IPublishCompanyResponse[]>> {
    const url =`${this.api}/publish-company/publish-company`;
    return this.http.get<IResponseModel<IPublishCompanyResponse[]>>(url)
  }

  _createNewPublishCompany(requestBody: IPublishCompanyRequest): Observable<IResponseModel<any>> {
    const url =`${this.api}/publish-company`;
    return this.http.post<IResponseModel<any>>(url, requestBody)
  }

  _deletePublishCompany(publishCompanyId: number): Observable<IResponseModel<any>> {
    const url = `${this.api}/publish-company?id=${publishCompanyId}`;
    return this.http.delete<IResponseModel<any>>(url)
  }

  _editPublishCompany(requestBody: IEditPublishCompanyRequest): Observable<IResponseModel<any>> {
    const url =`${this.api}/publish-company`;
    return this.http.put<IResponseModel<any>>(url, requestBody)
  }
}
