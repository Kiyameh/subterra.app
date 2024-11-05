// Exploration types:
export interface Exploration {
  _id?: string
  __v?: number
  createdAt?: Date
  updatedAt?: Date
  createdBy?: string
  instance: {_id: string; name?: string}
  name: string
  generalData: {
    datatype: 'exploration'
    dates?: Date[]
    cave_time?: number
    participants?: string[]
    collaborators?: string[]
    groups?: {_id: string; name?: string}[]
    description?: string
    caves?: {_id: string; name?: string}[]
    incident?: string
    inventory?: string
    pending_work?: string
  }
  multimedia?: object
}

export default Exploration
