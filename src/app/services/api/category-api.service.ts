import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponseModel} from "../../models/commons/response.model";
import {IBookCategoryResponse} from "../../models/responses/book-category.response";
import {IBookCategoryRequest, IEditBookCategoryRequest} from "../../models/requests/book-category.request";

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService{
  api = environment.api_url

  constructor(
    private http: HttpClient
  ) {}

  _getAllCategory(): Observable<IResponseModel<IBookCategoryResponse[]>> {
    const url = `${this.api}/book-category/book-category`
    return this.http.get<IResponseModel<IBookCategoryResponse[]>>(url)
  }

  _createNewCategory(requestBody: IBookCategoryRequest): Observable<IResponseModel<any>> {
    const url = `${this.api}/book-category`
    return this.http.post<IResponseModel<any>>(url, requestBody)
  }

    _deleteBookCategory(bookId: number): Observable<IResponseModel<any>> {
    const url = `${this.api}/book-category?id=${bookId}`
    return this.http.delete<IResponseModel<any>>(url)
  }

  _editBookCategory(requestBody: IEditBookCategoryRequest): Observable<IResponseModel<any>> {
    const url = `${this.api}/book-category`
    return this.http.put<IResponseModel<any>>(url, requestBody)
  }
}
