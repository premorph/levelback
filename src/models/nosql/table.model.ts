import { model, Schema } from 'mongoose'

const tableSchema = new Schema({}, {})

export const TableModel = model('table', tableSchema)
