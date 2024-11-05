// User types:
export interface User {
  _id?: string
  __v?: number
  createdAt?: Date
  updatedAt?: Date
  name: string
  generalData: {
    fullname: string
    email: string
    password: string
    instance_roles?: Roles
    group_roles?: Roles
    groups?: {_id: string; name?: string}[]
    avatar?: string
    favourites?: {_id: string; name?: string}[]
    refresh_token?: string
    reset_pass_token?: string
    preferences?: Preferences
  }
}

export default User

export type Preferences = object
export type Roles = {
  viewer?: {_id: string; name?: string}[]
  editor?: {_id: string; name?: string}[]
  owner?: {_id: string; name?: string}[]
}
