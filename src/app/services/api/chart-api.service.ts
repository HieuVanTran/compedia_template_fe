import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponseModel} from "../../models/commons/response.model";
import {IChartRespone} from "../../models/responses/chart.respone";

@Injectable({
  providedIn: 'root'
})

export class ChartApiService {
  api = environment.api_url

  constructor(private http: HttpClient) {
  }

  _getAllChartData(): Observable<IResponseModel<IChartRespone>> {
    const url = `${this.api}/dashboard`;
    return this.http.get<IResponseModel<IChartRespone>>(url)
  }
}
