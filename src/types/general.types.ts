import {Province_ES} from './options/province.options'
import {CoordProyection, UtmZone} from '@/types/options/coordinate.options'
import {Country} from '@/types/options/country.options'
import Cave from './cave.types'
import Group from './group.types'
import System from './system.types'
import Exploration from './exploration.types'

//* DATOS GENERALES
export interface UtmCoordinate {
  x_coord: number
  y_coord: number
  z_coord?: number
  coord_proyec: CoordProyection
  coord_format: 'UTM'
  utm_zone: UtmZone
  hemisphere: 'N' | 'S'
}

export interface Address {
  street: string
  number: string
  floor?: string
  door?: string
  postal_code: number
  city: string
  province: Province_ES
  country: Country
}

export interface Phone {
  prefix: number
  phone_number: number
}

export type DatabaseDocument = Cave | System | Group | Exploration
export type DataTypes = 'cave' | 'system' | 'group' | 'exploration'
export interface DataReference {
  name: string
  id: string
}
