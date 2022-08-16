export interface IRoleManagerRequest {
  id?: number,
  code: string,
  name: string
}

export interface IEditRoleRequest {
  code: string,
  name: string,
  role_id: number
}
