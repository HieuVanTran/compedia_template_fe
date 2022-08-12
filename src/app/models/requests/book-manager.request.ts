export interface IBookManagerRequest {
  bookId?: number,
  bookName: string,
  idAuthor: number,
  publishingYear: string,
  pageNumber: number,
  image: string,
  price: number,
  idTypeBook: number,
  idCompany: number,
  amount: number,
}
export interface IEditBookManagerRequest {
  bookId: number,
  bookName: string,
  idAuthor: number,
  publishingYear: string,
  pageNumber: number,
  image: string,
  price: number,
  idTypeBook: number,
  idCompany: number,
  amount: number,
}

