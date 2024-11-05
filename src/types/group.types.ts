import {Address, Phone} from './general.types'
import {GroupCategory} from './options/group.options'

export default interface Group {
  _id?: string
  __v?: number
  createdAt?: Date
  updatedAt?: Date
  createdBy?: string
  name: string
  generalData: {
    datatype: 'group'
    acronym?: string
    group_categories?: GroupCategory[]
    alt_names?: string[]
    address?: Address
    phone?: Phone
    email?: string
    webpage?: string
    description?: string
    main_image?: string
  }
  membersData?: {
    members?: {_id: string; name?: string}[]
  }

  explorationData?: {
    explorations?: {_id: string; name?: string}[]
  }
  publicationData?: object
}
