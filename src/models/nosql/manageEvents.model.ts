import { model, Schema } from 'mongoose'
import { IManageEvent } from '../../interfaces/manageEvent.interface'

const ManageEventsSchema = new Schema<IManageEvent>(
    {
        EventID: { type: Schema.Types.ObjectId },
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
                        isReserve: {
                            type: Schema.Types.ObjectId,
                            ref: 'reserve',
                        },
                    },
                ],
            },
        ],
    },
    { timestamps: true, versionKey: false }
)

export const ManageEventModel = model('', ManageEventsSchema)
