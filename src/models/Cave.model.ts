import mongoose from 'mongoose'
import Cave from '@/types/cave.types'
import {caveShapes} from '@/types/options/cave.options'
import {coordProyections, utmZones} from '@/types/options/coordinate.options'

export interface CaveDocument extends Cave, Document {}

export const caveSchema = new mongoose.Schema(
  {
    instance: {type: mongoose.Schema.Types.ObjectId, ref: 'Instance'},
    name: {type: String, required: true, unique: true},
    generalData: {
      datatype: {type: String, enum: ['cave'], required: true},
      catalog: {type: String, unique: true},
      initials: {type: [String]},
      alt_names: {type: [String]},
      cave_shapes: {type: [String], enum: caveShapes},
      system: {type: mongoose.Schema.Types.ObjectId, ref: 'System'},
      description: {type: String},
      regulations: {type: Boolean},
      regulation_description: {type: String},
      length: {type: Number},
      depth: {type: Number},
      main_image: {type: String},
    },
    locationData: {
      coordinates: {
        x_coord: {type: Number, required: true},
        y_coord: {type: Number, required: true},
        z_coord: {type: Number},
        coord_proyec: {
          type: String,
          enum: coordProyections,
          default: 'WGS84',
          required: true,
        },
        coord_format: {type: String, enum: ['UTM'], required: true},
        utm_zone: {type: Number, enum: utmZones, required: true},
        hemisphere: {type: String, enum: ['N', 'S'], required: true},
      },
      municipality: {type: String},
      locality: {type: String},
      toponymy: {type: [String]},
      massif: {type: String},
      location_description: {type: String},
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
    explorationData: {
      explorations: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Exploration',
      },
    },
    technicalSheet: {type: Object},
    topography: {type: Object},
    multimedia: {type: Object},
  },
  {timestamps: true}
)
// Método para obtener referencia de este item:
caveSchema.methods.getReference = function () {
  return {
    _id: this._id.toString(),
    name: this.name,
  }
}

caveSchema.set('toJSON', {
  transform: function (doc, ret) {
    // Serializar datos para evitar conflictos con client components de Next:
    return JSON.parse(JSON.stringify(ret))
  },
})

const CaveModel =
  mongoose.models.Cave || mongoose.model<CaveDocument>('Cave', caveSchema)

export default CaveModel
