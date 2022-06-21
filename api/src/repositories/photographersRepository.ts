import { query } from '../db'
import { Photographer } from '../entities'

export const getPhotographerById = async (id: number): Promise<Photographer | null> => {
    const dbResult = await query<Photographer>(`
        SELECT *
        FROM photographer
        WHERE id = $1
    `, [id])

    return dbResult.rows[0] ?? null
}
