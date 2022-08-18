import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponseModel} from "../../models/commons/response.model";
import {IBookManagerResponse} from "../../models/responses/book-manager.response";
import {IBookManagerRequest, IEditBookManagerRequest} from "../../models/requests/book-manager.request";




@Injectable({
  providedIn: 'root'
})
export class BookApiService{
  api = environment.api_url

  constructor(
    private http: HttpClient
  ) {}

  _getAllBook(): Observable<IResponseModel<IBookManagerResponse[]>> {
    const url = `${this.api}/book/book`;
    return this.http.get<IResponseModel<IBookManagerResponse[]>>(url)
  }

  _createNewBook(requestBody: FormData): Observable<IResponseModel<any>> {
    const url = `${this.api}/book`

    return this.http.post<IResponseModel<any>>(url, requestBody)
  }

  _deleteBook(bookId: number): Observable<IResponseModel<any>> {
    const url = `${this.api}/book?id=${bookId}`;
    return this.http.delete<IResponseModel<any>>(url)
  }

  _editBook(requestBody: IEditBookManagerRequest): Observable<IResponseModel<any>> {
    const url = `${this.api}/book`;
    return this.http.put<IResponseModel<any>>(url, requestBody)
  }

}
