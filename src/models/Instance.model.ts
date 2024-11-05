import mongoose from 'mongoose'
import Instance from '@/types/instance.types'

export interface InstanceDocument extends Instance, Document {}

export const instanceSchema = new mongoose.Schema(
  {
    name: {type: String, required: true, unique: true},
    generalData: {
      fullname: {type: String, required: true},
      datatype: {type: String, enum: ['instance'], required: true},
      acronym: {type: String},
      description: {type: String},
      territory: {type: String},
      admin: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
      owner: {type: mongoose.Schema.Types.ObjectId, ref: 'Group'},
      public_visibility: {type: Boolean},
      public_edition: {type: Boolean},
      link: {type: String},
      main_image: {type: String},
      map_image: {type: String},
    },
    multimedia: {type: Object},
  },
  {timestamps: true}
)

// Método para obtener referencia de este item:
instanceSchema.methods.getReference = function () {
  return {
    id: this._id.toString(),
    name: this.name,
  }
}
instanceSchema.set('toJSON', {
  transform: function (doc, ret) {
    // Serializar datos para evitar conflictos con client components de Next:
    return JSON.parse(JSON.stringify(ret))
  },
})

const InstanceModel =
  mongoose.models.Instance ||
  mongoose.model<InstanceDocument>('Instance', instanceSchema)

export default InstanceModel
