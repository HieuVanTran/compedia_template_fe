export interface ICollectMoneyRequests {
  collectMoneyId?: number,
  cardId: number,
  fullName: string,
  finedAmount: number,
  proceeds: number,
  staffId: number
}
export interface IEditCollectMoneyRequests {
  collectMoneyId: number,
  cardId: number,
  fullName: string,
  finedAmount: number,
  proceeds: number,
  staffId: number
}
