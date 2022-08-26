export interface ILoanpayRequest{
  note: string,
  call_card_id?: number,
  list_book: ListBook[],
  staff_id: number,
  end_date: string,
  account_id: number
}

export interface ListBook {
  call_card_details_id: number,
  book_id: string,
  amount: number,
}

export interface IEditLoanpayRequest{
  note: string,
  status?: number,
  call_card_id?: number,
  list_book: ListBook[],
  staff_id: number,
  end_date: string,
  card_number: string,
  account_id: number

}

