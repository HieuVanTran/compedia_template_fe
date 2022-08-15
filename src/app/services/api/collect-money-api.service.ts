import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponseModel} from "../../models/commons/response.model";
import {ICollectMoneyResponses} from "../../models/responses/collect-money.response";
import {ICollectMoneyRequests, IEditCollectMoneyRequests} from "../../models/requests/collect-money.requests";



@Injectable({
  providedIn: 'root'
})
export class collectMoneyApiService{
  api = environment.api_url

  constructor(
    private http: HttpClient
  ) {}

  _getAllcollectmoney(): Observable<IResponseModel<ICollectMoneyResponses[]>> {
    const url = `${this.api}/collect-money/collect-money`
    return this.http.get<IResponseModel<ICollectMoneyResponses[]>>(url)
  }

  _createNewCollectmoney(requestBody: ICollectMoneyRequests): Observable<IResponseModel<any>> {
    const url = `${this.api}/collect-money`
    return this.http.post<IResponseModel<any>>(url, requestBody)
  }

  _deletecollectmoney(collectId: number): Observable<IResponseModel<any>> {
    const url = `${this.api}/collect-money?id=${collectId}`
    return this.http.delete<IResponseModel<any>>(url)
  }

  _editcollectmoney(requestBody: IEditCollectMoneyRequests): Observable<IResponseModel<any>> {
    const url = `${this.api}/collect-money`
    return this.http.put<IResponseModel<any>>(url, requestBody)
  }
}
