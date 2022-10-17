import { model, Schema, Types } from 'mongoose'

const eventSchema = new Schema(
  {
    name: { type: String, require: true },
    image: { type: String, require: true },
    dateEvent: { type: Date, require: true },
    tables: [
      {
        seat_price: { type: Number, require: true },
        seat_qty: { type: Number, require: true },
        seat_category: { type: String, require: true },
        seat_map: [
          {
            seat_label: { type: String, require: true },
            layout: { type: String, require: true },
            chairs: { type: Number, require: true },
            // isReserve: {type:Boolean, require:true}
          },
        ],
      },
    ],
    author: {
      types: Types.ObjectId,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export const EventModel = model('event', eventSchema)
