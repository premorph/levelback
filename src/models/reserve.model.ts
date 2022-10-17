import { model, Schema, Types } from 'mongoose'

const reserveSchema = new Schema(
  {
    author: { type: Types.ObjectId, require: true },
    seat: { type: String, require: true },
    imagePay: { type: String, require: true },
    isValid: { type: Boolean },
    datepay: { type: Date.now(), require: true },
    dateCheck: { type: Date, require: true },
    isCheck: { type: Boolean, default: false },
    checkauthor: { type: Types.ObjectId },
  },
  { timestamps: true, versionKey: true }
)

export const ReserveModel = model('reserve', reserveSchema)
