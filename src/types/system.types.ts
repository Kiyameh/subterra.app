export interface System {
  _id?: string
  __v?: number
  createdAt?: Date
  updatedAt?: Date
  createdBy?: string
  instance: {_id: string; name?: string}
  name: string
  generalData: {
    datatype: 'system'
    catalog?: string
    initials?: string[]
    alt_names?: string[]
    caves?: {_id: string; name?: string}[]
    description?: string
    regulations?: boolean
    regulation_description?: string
    length?: number
    depth?: number
    massif?: string
    main_image?: string
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
  explorationData?: object
  technicalSheet?: object
  topography?: object
  multimedia?: object
}

export default System
