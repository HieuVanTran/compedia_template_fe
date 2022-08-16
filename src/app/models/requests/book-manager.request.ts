export interface IBookManagerRequest {
  book_id?: number,
  book_name: string,
  name_author: string,
  publishing_year: string,
  page_number: string,
  image: string,
  price: string,
  category_name: string,
  publish_name: string,
  amount: string,
}
export interface IEditBookManagerRequest {
  book_id: number,
  book_name: string,
  name_author: string,
  publishing_year: string,
  page_number: string,
  image: string,
  price: string,
  category_name: string,
  publish_name: string,
  amount: string,
}

