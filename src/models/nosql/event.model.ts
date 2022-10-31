import { model, Schema } from 'mongoose'
import { IEvent } from '../../interfaces'
const eventSchema = new Schema<IEvent>(
    {
        name: { type: String, require: true },
        mediaID: { type: Schema.Types.ObjectId, require: true },
        dateEvent: { type: Date, require: true },
        author: {
            types: Schema.Types.ObjectId,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

export const EventModel = model<IEvent>('event', eventSchema)
