export interface dbConfig {
    readonly db_uri: string
    initialize(): void
}
