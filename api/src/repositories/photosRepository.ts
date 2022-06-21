import { query } from '../db'
import { Photo } from '../entities'

export interface GetPhotosQuery {
    collectionId: number
    keyword: string
}

export const getPhotos = async (queryParams: GetPhotosQuery): Promise<Photo[]> => {
    const dbResult = await query<Photo>(`
        SELECT id, photographer_id, collection_id, url, description, height, width
        FROM photo
        WHERE collection_id = ${queryParams.collectionId} AND description LIKE '%${queryParams.keyword}%'
    `)

    return dbResult.rows
}

export const getPhotoById = async (id: number): Promise<Photo | null> => {
    const dbResult = await query<Photo>(`
        SELECT id, photographer_id, collection_id, url, description, height, width
        FROM photo
        WHERE id = $1
    `, [id])

    return dbResult.rows[0] ?? null
}
