export interface IBookManagerRequest {
  bookId?: number,
  bookName: string,
  idAuthor: string,
  publishingYear: string,
  pageNumber: string,
  image: string,
  price: string,
  idTypeBook: string,
  idCompany: string,
  amount: string,
}
export interface IEditBookManagerRequest {
  bookId: number,
  bookName: string,
  idAuthor: string,
  publishingYear: string,
  pageNumber: string,
  image: string,
  price: string,
  idTypeBook: string,
  idCompany: string,
  amount: string,
}

