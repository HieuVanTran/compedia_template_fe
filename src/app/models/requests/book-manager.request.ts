export interface IBookManagerRequest {
  amount: string,
  book_name: string,
  category_name: string,
  id?: number,
  image: string,
  name_author: string,
  page_number: string,
  price: string,
  publish_name: string,
  publishing_year: string,
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

