<<<<<<< HEAD
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
=======
import { model, Schema } from "mongoose";

const storageSchema= new Schema<IStorage>({})

export const StorageModel = model<IStorage>('storage',storageSchema)
>>>>>>> 283953e7c03520b77191853e7617d74d26b2450c
