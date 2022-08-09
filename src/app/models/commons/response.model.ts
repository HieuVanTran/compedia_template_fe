export interface IResponseModel<T> {
  code: number,
  data: T
  message: string
}
