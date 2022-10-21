import { model, Schema } from 'mongoose'

const eventSchema = new Schema(
  {
    name: { type: String, require: true },
    image: { type: String, require: true },
    dateEvent: { type: Date, require: true },
    tables: [
      {
        table_price: { type: Number, require: true },
        table_qty: { type: Number, require: true },
        table_category: { type: String, require: true },
        table_map: [
          {
            table_label: { type: String, require: true },
            layout: { type: String, require: true },
            chairs: { type: Number, require: true },
              isReserve: { type: Schema.Types.ObjectId },
          },
        ],
      },
    ],
    author: {
      types: Schema.Types.ObjectId,
    
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export const EventModel = model('event', eventSchema)
