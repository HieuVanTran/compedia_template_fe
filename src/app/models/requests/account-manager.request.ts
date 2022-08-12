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

export interface IEditAccountManagerRequest {
  dob: string,
  email: string,
  full_name: string,
  id: number,
  password: string,
  phone: string,
  roleId: number,
  username: string

}
