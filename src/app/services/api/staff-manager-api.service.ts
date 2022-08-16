import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponseModel} from "../../models/commons/response.model";
import {IStaffManagerResponse} from "../../models/responses/staff-manager.response";


@Injectable({
  providedIn: 'root'
})

export class StaffManagerApiService {
  api = environment.api_url;

  constructor(private http: HttpClient) {
  }

  _getAllStaffManager(): Observable<IResponseModel<IStaffManagerResponse[]>> {
    const url = `${this.api}/staff/staff`;
    return this.http.get<IResponseModel<IStaffManagerResponse[]>>(url)
  }
}
