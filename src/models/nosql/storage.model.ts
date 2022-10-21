
import { Model, Schema, model } from 'mongoose'
import { IStorage } from '../../interfaces/storage.interface'
import mongooseDelete from 'mongoose-delete';

const storageSchema = new Schema<IStorage>(
    {
        filename: { type: String, require: true },
        fileOwner: { type: Schema.Types.ObjectId, ref: 'fileOwner' },
        typeF: { type: String },
    },
    {
        timestamps: true,
        versionKey: true,
    }
)

storageSchema.plugin(mongooseDelete, { overrideMethods: "all" });
export const StorageModel = model<IStorage>(
    'storage',
    storageSchema
)
