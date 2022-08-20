export interface ILoanpayRequest{
  note: string,
  status?: number,
  call_card_id?: number,
  list_book: ListBook[],
  staff_id: number,
  start_date: string,
  end_date: string,
  card_number: string
}

export interface ListBook {
  call_card_details_id: number,
  book_name: string,
  amount: number,
}

export interface IEditLoanpayRequest{
  note: string,
  status?: number,
  call_card_id?: number,
  list_book: ListBook[],
  staff_id: number,
  start_date: string,
  end_date: string,
  card_number: string
}

