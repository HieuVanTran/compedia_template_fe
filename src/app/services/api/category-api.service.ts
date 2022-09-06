import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPageResponseModel, IResponseModel} from "../../models/commons/response.model";
import {IBookCategoryResponse} from "../../models/responses/book-category.response";
import {IBookCategoryRequest, IEditBookCategoryRequest} from "../../models/requests/book-category.request";
import {IGetCategoryBookRequest} from "../../models/requests/get-category-book.request";
import {generate} from "rxjs";
import {generateParams} from "../../util/public-function";
import {IBookAuthorResponse} from "../../models/responses/book-author.response";

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
  _searchBookCategory(request: any): Observable<IResponseModel<IPageResponseModel<IBookCategoryResponse>>> {
    const url = `${this.api}/book-category/search?page=${request.page}&size=${request.size}
    ${request.categoryName? '&categoryName='+request.categoryName : ''}`
    return this.http.get<IResponseModel<IPageResponseModel<IBookCategoryResponse>>>(url)
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

  _getBySearch(request: IGetCategoryBookRequest): Observable<IResponseModel<IPageResponseModel<IBookCategoryResponse>>> {
    const url = `${this.api}/book-category/search`;
    return this.http.get<IResponseModel<IPageResponseModel<IBookCategoryResponse>>>(url, {params: generateParams(request)})
  }
}
