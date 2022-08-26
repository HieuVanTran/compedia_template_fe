import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponseModel} from "../../models/commons/response.model";
import { IDetailesResponses } from "src/app/models/responses/detailes.responses";



@Injectable({
  providedIn: 'root'
})
export class DetailesApiService {
  api = environment.api_url

  constructor(
    private http: HttpClient
  ) {
  }

  _getAllDetailes(): Observable<IResponseModel<IDetailesResponses[]>> {
    const url = `${this.api}/call-card-details`
    return this.http.get<IResponseModel<IDetailesResponses[]>>(url)
  }
}
