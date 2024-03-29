import { Model, model, Schema } from 'mongoose'
import { IUser } from '../../interfaces'
import mongooseDelete from 'mongoose-delete'
interface UserModelExt extends Model<IUser> {
    FindAllData(): void
    FindData(): void
}
const userSchema = new Schema<IUser>(
    {
        name: { type: String, require: true },
        lastname: { type: String, require: true },
        email: { type: String, require: true },
        password: { type: String, require: true },
        role: { type: ['user', 'admin', 'restaurant'], default: 'user' },
        status: { type: ['active', 'inactive', 'reported'], default: 'active' },
        avatar: { type: Schema.Types.ObjectId },
    },
    { timestamps: true, versionKey: false }
)

userSchema.static('FindAllData', function () {
    const joinData = this.aggregate([
        {
            $lookup: {
                from: 'storages',
                localField: '_id',
                foreignField: 'fileOwner',
                as: 'avatar',
            },
        },
    ])
    return joinData
})
userSchema.static('FindData', function (_id) {
    const joinData = this.aggregate([
        {
            $match: _id,
        },
        {
            $lookup: {
                from: 'storages',
                localField: '_id',
                foreignField: 'fileOwner',
                as: 'avatar',
            },
        },
    ])
    return joinData
})
userSchema.plugin(mongooseDelete, { overrideMethods: 'all' })
export const UserModel = model<IUser, UserModelExt>('user', userSchema)
