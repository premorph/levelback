import { IReserve } from './../../interfaces/reserve.interface'
import { model, Schema, Model } from 'mongoose'
interface reserveModelExt extends Model<IReserve> {
    findReserveById(): void
}

const reserveSchema = new Schema<IReserve>(
    {
        author: { type: Schema.Types.ObjectId, require: true, ref: 'author' },
        table: { type: String, require: true },
        imagePay: { type: String, require: true },
        isValid: { type: Boolean },
        datePay: { type: Date, require: true },
        dateCheck: { type: Date, require: true },
        isCheck: { type: Boolean, default: false },
        checkauthor: { type: Schema.Types.ObjectId, ref: 'checkauth' },
    },
    { timestamps: true, versionKey: false }
)
reserveSchema.static('findReserveById', function (id) {
    const joinData = this.aggregate([
      {
        $match: {
          _id: id,
        },
      },
      {
        $lookup: {
          from: "storages", //TODO Tracks --> storages
          localField: "imagePay", //TODO Tracks.mediaId
          foreignField: "fileOwner", //TODO Straoges._id
          as: "Reference", //TODO Alias!
        },
      },
    ])
    return joinData
})

export const ReserveModel = model<IReserve,reserveModelExt>('reserve', reserveSchema)
