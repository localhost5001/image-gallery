import { query } from '../db'
import { Collection } from '../entities'

export const getCollections = async (): Promise<Collection[]> => {
    const dbResult = await query<Collection>(`
        SELECT id, title
        FROM Collection
    `)
    
    return dbResult.rows
}

export const getCollectionById = async (id: number): Promise<Collection | null> => {
    const dbResult = await query<Collection>(`
        SELECT id, title
        FROM Collection
        WHERE id = $1
    `, [id])

    return dbResult.rows[0] ?? null
} 
