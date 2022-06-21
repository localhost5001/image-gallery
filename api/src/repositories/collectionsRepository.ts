import { query } from '../db'
import { Collection } from '../entities'

export const getCollections = async (): Promise<Collection[]> => {
    const dbResult = await query<Collection>(`
        SELECT id, title
        FROM Collection
    `)
    
    return dbResult.rows
}
