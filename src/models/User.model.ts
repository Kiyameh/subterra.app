import mongoose from 'mongoose'
import User from '@/types/user.types'

export interface UserDocument extends User, Document {}

export const userSchema = new mongoose.Schema(
  {
    name: {type: String, required: true, unique: true},
    generalData: {
      fullname: {type: String},
      email: {type: String, required: true, unique: true},
      password: {type: String, required: true},
      instance_roles: {
        viewer: {type: [mongoose.Schema.Types.ObjectId], ref: 'Instance'},
        editor: {type: [mongoose.Schema.Types.ObjectId], ref: 'Instance'},
        owner: {type: [mongoose.Schema.Types.ObjectId], ref: 'Instance'},
      },
      group_roles: {
        viewer: {type: [mongoose.Schema.Types.ObjectId], ref: 'Group'},
        editor: {type: [mongoose.Schema.Types.ObjectId], ref: 'Group'},
        owner: {type: [mongoose.Schema.Types.ObjectId], ref: 'Group'},
      },
      groups: {type: [mongoose.Schema.Types.ObjectId], ref: 'Group'},
      avatar: {type: String},
      favourites: {type: [mongoose.Schema.Types.ObjectId], ref: 'Cave'},
      refresh_token: {type: String},
      reset_pass_token: {type: String},
      preferences: {type: Object},
    },
  },
  {timestamps: true}
)

// Método para obtener referencia de este item:
userSchema.methods.getReference = function () {
  return {
    id: this._id.toString(),
    name: this.name,
  }
}
userSchema.set('toJSON', {
  transform: function (doc, ret) {
    // Serializar datos para evitar conflictos con client components de Next:
    return JSON.parse(JSON.stringify(ret))
  },
})

const UserModel =
  mongoose.models.User || mongoose.model<UserDocument>('User', userSchema)

export default UserModel
