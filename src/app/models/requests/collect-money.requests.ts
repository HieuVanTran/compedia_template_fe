export interface ICollectMoneyRequests {
  fined_amount: string,
  full_name: string,
  id?: number,
  proceeds: string,
  staff_id: string,
  user_id: string
}
export interface IEditCollectMoneyRequests {
  fined_amount: string,
  full_name: string,
  id: number,
  proceeds: string,
  staff_id: string,
  user_id: string
}
