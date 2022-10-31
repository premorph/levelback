export interface ITable {
    table_price: number
    table_qty: string
    table_category: boolean
    table_map: ItableMap[]
}

interface ItableMap {
    table_label: string
    layout: string
    chairs: number
    isReserve: boolean
}
