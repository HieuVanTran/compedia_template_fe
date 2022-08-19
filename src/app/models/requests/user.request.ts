export interface IUserRequest{
  id: number,
  full_name: string,
  create_date: string,
  expiration_date: string,
  address: string,
  phone: string,
  account_id: number,
  call_card_id: number,
}

export interface IEditUserRequest{
  id: number,
  full_name: string,
  create_date: string,
  expiration_date: string,
  address: string,
  phone: string,
  account_id: number,
  call_card_id: number,
}
