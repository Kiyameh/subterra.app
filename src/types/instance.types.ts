// Instance types:
export interface Instance {
  _id?: string
  __v?: number
  createdAt?: Date
  updatedAt?: Date
  name: string
  generalData: {
    fullname: string
    datatype: 'instance'
    acronym?: string
    description?: string
    territory?: string
    admin?: string
    owner?: string
    public_visibility?: boolean
    public_edition?: boolean
    link?: string
    main_image?: string
    map_image?: string
  }
}

export default Instance
