export interface IBookCategoryRequest {
  book_name: string,
  code: string,
  id?: number
}

export interface IEditBookCategoryRequest {
  book_name: string,
  code: string,
  id: number
}
