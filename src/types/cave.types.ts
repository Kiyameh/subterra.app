import {UtmCoordinate} from './general.types'
import {CaveShape} from './options/cave.options'

// Cave types:
export interface Cave {
  _id?: string
  __v?: number
  createdAt?: Date
  updatedAt?: Date
  createdBy?: string
  instance: {_id: string; name?: string}
  name: string
  generalData: {
    datatype: 'cave'
    catalog?: string
    initials?: string[]
    alt_names?: string[]
    cave_shapes?: CaveShape[]
    system?: {_id: string; name?: string}
    description?: string
    regulations?: boolean
    regulation_description?: string
    length?: number
    depth?: number
    main_image?: string
  }
  locationData?: {
    coordinates?: UtmCoordinate
    municipality?: string
    locality?: string
    toponymy?: Array<string>
    massif?: string
    location_description?: string
  }
  scienceData?: {
    geolog_age?: string
    geolog_litology?: string
    arqueolog?: string
    paleontolog?: string
    mineralog?: string
    contamination?: string
    biolog?: string
    hidrolog_system?: string
    hidrolog_subsystem?: string
  }
  explorationData?: {
    explorations?: {_id: string; name?: string}[]
  }
  technicalSheet?: object
  topography?: object
  multimedia?: object
}

export default Cave
