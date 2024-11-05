import Group from '@/types/group.types'
import mongoose from 'mongoose'
import {groupCategories} from '@/types/options/group.options'
import {provinces_ES} from '@/types/options/province.options'
import {countries} from '@/types/options/country.options'

export interface GroupDocument extends Group, Document {}

const groupSchema = new mongoose.Schema(
  {
    name: {type: String, required: true, unique: true},
    generalData: {
      datatype: {
        type: String,
        enum: ['group'],
        default: 'group',
        required: true,
      },
      acronym: {type: String},
      group_categories: {type: [String], enum: groupCategories},
      alt_names: {type: [String]},
      address: {
        street: {type: String},
        number: {type: String},
        floor: {type: String},
        door: {type: String},
        postal_code: {type: Number},
        city: {type: String},
        province: {type: String, enum: provinces_ES},
        country: {type: String, enum: countries},
      },
      phone: {
        prefix: {type: Number},
        phone_number: {type: Number},
      },
      email: {type: String},
      webpage: {type: String},
      description: {type: String},
      main_image: {type: String},
    },
    membersData: {
      members: {type: [mongoose.Schema.Types.ObjectId], ref: 'User'},
    },
    explorations: {
      explorations: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Exploration',
      },
    },
    publications: {},
  },
  {timestamps: true}
)

// Método para obtener referencia de este item:
groupSchema.methods.getReference = function () {
  return {
    id: this._id.toString(),
    name: this.name,
  }
}
groupSchema.set('toJSON', {
  transform: function (doc, ret) {
    // Serializar datos para evitar conflictos con client components de Next:
    return JSON.parse(JSON.stringify(ret))
  },
})

const GroupModel =
  mongoose.models.Group || mongoose.model<Group>('Group', groupSchema)
export default GroupModel
