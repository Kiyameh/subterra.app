import System from '@/types/system.types'
import mongoose from 'mongoose'

interface SystemDocument extends System, Document {}

export const systemSchema = new mongoose.Schema(
  {
    instance: {type: mongoose.Schema.Types.ObjectId, ref: 'Instance'},
    name: {type: String, required: true},
    generalData: {
      datatype: {type: String, enum: ['system'], required: true},
      catalog: {type: String, unique: true},
      initials: {type: [String]},
      alt_names: {type: [String]},
      caves: {type: [mongoose.Schema.Types.ObjectId], ref: 'Cave'},
      description: {type: String},
      regulations: {type: Boolean},
      regulation_description: {type: String},
      length: {type: Number},
      depth: {type: Number},
      massif: {type: String},
      main_image: {type: String},
    },
    scienceData: {
      geolog_age: {type: String},
      geolog_litology: {type: String},
      arqueolog: {type: String},
      paleontolog: {type: String},
      mineralog: {type: String},
      contamination: {type: String},
      biolog: {type: String},
      hidrolog_system: {type: String},
      hidrolog_subsystem: {type: String},
    },
    explorationData: {type: Object},
    technicalSheet: {type: Object},
    topography: {type: Object},
    multimedia: {type: Object},
  },
  {timestamps: true}
)

// Método para obtener referencia de este item:
systemSchema.methods.getReference = function () {
  return {
    id: this._id.toString(),
    name: this.name,
  }
}

systemSchema.set('toJSON', {
  transform: function (doc, ret) {
    // Serializar datos para evitar conflictos con client components de Next:
    return JSON.parse(JSON.stringify(ret))
  },
})

const SystemModel =
  mongoose.models.System ||
  mongoose.model<SystemDocument>('System', systemSchema)
export default SystemModel
