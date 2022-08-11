export interface IAccountManagerRequest {
  id?: number,
  username: string,
  password: string,
  full_name: string,
  date_of_birth: string,
  phone: string,
  email: string,
  status?: string,
  role_id: string
}
