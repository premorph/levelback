import { model, Schema } from "mongoose";

const storageSchema= new Schema<IStorage>({})

export const StorageModel = model<IStorage>('storage',storageSchema)