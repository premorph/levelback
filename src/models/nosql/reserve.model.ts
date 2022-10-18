import { IReserve } from './../../interfaces/reserve.interface';
import { model, Schema } from 'mongoose'

const reserveSchema = new Schema<IReserve>(
  {
    author: { type: Schema.Types.ObjectId, require: true , ref:"author"},
    table: { type: String, require: true },
    imagePay: { type: String, require: true },
    isValid: { type: Boolean },
    datePay: { type: Date, require: true },
    dateCheck: { type: Date, require: true },
    isCheck: { type: Boolean, default: false },
    checkauthor: { type: Schema.Types.ObjectId, ref:'checkauth' },
  },
  { timestamps: true, versionKey: true }
)

export const ReserveModel = model<IReserve>('reserve', reserveSchema)
