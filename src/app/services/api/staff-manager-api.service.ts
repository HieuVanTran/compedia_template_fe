import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponseModel} from "../../models/commons/response.model";
import {IStaffManagerResponse} from "../../models/responses/staff-manager.response";
import {IEditStaffRequest, IStaffManagerRequest} from "../../models/requests/staff-manager.request";


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

  _createNewStaff(requestBody: IStaffManagerRequest): Observable<IResponseModel<any>> {
    const url = `${this.api}/staff`;
    return this.http.post<IResponseModel<any>>(url, requestBody)
  }

  _deleteStaff(staffId: number): Observable<IResponseModel<any>> {
    const url = `${this.api}/staff?id=${staffId}`;
    return this.http.delete<IResponseModel<any>>(url)
  }

  _editStaff(requestBody: IEditStaffRequest): Observable<IResponseModel<any>> {
    const url = `${this.api}/staff`;
    return this.http.put<IResponseModel<any>>(url, requestBody)
  }
}
