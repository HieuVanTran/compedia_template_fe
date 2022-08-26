export interface IBookManagerRequest {
  amount: string,
  bookName: string,
  idTypeBook: string,
  id?: number,
  image: string,
  nameAuthor: string,
  page_number: string,
  price: string,
  companyId: string,
  publishingYear: string,
  status?:string
}
export interface IEditBookManagerRequest {
  amount: string,
  bookName: string,
  idTypeBook: string,
  id: number,
  image: string,
  nameAuthor: string,
  page_number: string,
  price: string,
  companyId: string,
  publishingYear: string,
  status?:string
}

