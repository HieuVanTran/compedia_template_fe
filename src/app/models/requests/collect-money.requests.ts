export interface ICollectMoneyRequests {
  collectMoneyId?: number,
  cardId: string,
  fullName: string,
  finedAmount: string,
  proceeds: string,
  staffId: string
}
export interface IEditCollectMoneyRequests {
  collectMoneyId: number,
  cardId: string,
  fullName: string,
  finedAmount: string,
  proceeds: string,
  staffId: string
}
