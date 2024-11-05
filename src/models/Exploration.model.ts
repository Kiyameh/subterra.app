import mongoose from 'mongoose'
import Exploration from '@/types/exploration.types'

export interface ExplorationDocument extends Exploration, Document {}

export const explorationSchema = new mongoose.Schema(
  {
    instance: {type: mongoose.Schema.Types.ObjectId, ref: 'Instance'},
    name: {type: String, required: true, unique: true},
    generalData: {
      datatype: {type: String, enum: ['exploration'], required: true},
      dates: {type: [Date]},
      cave_time: {type: Number},
      participants: {type: [String]},
      collaborators: {type: [String]},
      groups: {type: [String]},
      description: {type: String},
      caves: {type: [mongoose.Schema.Types.ObjectId], ref: 'Cave'},
      incident: {type: String},
      inventory: {type: String},
      pending_work: {type: String},
    },
    multimedia: {type: Object},
  },
  {timestamps: true}
)
// Método para obtener referencia de este item:
explorationSchema.methods.getReference = function () {
  return {
    id: this._id.toString(),
    name: this.name,
  }
}

explorationSchema.set('toJSON', {
  transform: function (doc, ret) {
    // Serializar datos para evitar conflictos con client components de Next:
    return JSON.parse(JSON.stringify(ret))
  },
})

const ExplorationModel =
  mongoose.models.Exploration ||
  mongoose.model<ExplorationDocument>('Exploration', explorationSchema)

export default ExplorationModel
