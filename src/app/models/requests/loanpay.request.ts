export interface ILoanpayRequest{
  account_id: number,
  amount: number,
  book_id: number,
  call_card_id: number,
  end_date: string,
  note: string,
  staff_id: number
}
export interface IEditLoanpayRequest{
  account_id: number,
  amount: number,
  book_id: number,
  call_card_id: number,
  end_date: string,
  note: string,
  staff_id: number,
  status: number
}
export interface IGetAllLoanpayRequest {
  bookName: string
  categoryName: string,
  page:  number,
  size: number,
  sort_field: string,
  sort_order: string,
  status: number
}

