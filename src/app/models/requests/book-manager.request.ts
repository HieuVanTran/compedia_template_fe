export interface IBookManagerRequest {
  amount: string,
  book_name: string,
  idTypeBook: string,
  id?: number,
  image: string,
  idAuthor: string,
  page_number: string,
  price: string,
  companyId: string,
  publishing_year: string,
  status:string
}
export interface IEditBookManagerRequest {
  amount: string,
  book_name: string,
  idTypeBook: string,
  id: number,
  image: string,
  idAuthor: string,
  page_number: string,
  price: string,
  companyId: string,
  publishing_year: string,
  status:string
}

