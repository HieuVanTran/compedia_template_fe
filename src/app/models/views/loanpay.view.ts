export  interface ILoanpayView{
  call_card_id: number,
  username: string,
  staff_id: number,
  name_staff: string,
  status: number,
  call_card_details_id: number,
  note: string,
  start_date: string,
  end_date: string,
  account_id: number,
  list_book?: listbook[],

}
export interface listbook {
  call_card_details_id: number,
  book_id: number,
  book_name: string,
  amount: number
}