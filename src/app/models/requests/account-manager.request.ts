export interface IAccountManagerRequest {
  code_role: string,
  dob: string,
  email: string,
  full_name: string,
  id?: number,
  password: string,
  phone: string,
  username: string
}

export interface IEditAccountManagerRequest {
  code_role: string,
  dob: string,
  email: string,
  full_name: string,
  id: number,
  password: string,
  phone: string,
  username: string
}
