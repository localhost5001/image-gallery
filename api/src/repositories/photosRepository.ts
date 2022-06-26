import { query } from '../db'
import { Photo } from '../entities'

export interface GetPhotosQuery {
    collectionId: number
    keyword: string
}

export const getPhotos = async (queryParams: GetPhotosQuery): Promise<Photo[]> => {
    const keyword = queryParams.keyword ? `%${queryParams.keyword}` : undefined

    const dbResult = await query<Photo>(`
        SELECT id, photographer_id, collection_id, url, description, height, width
        FROM photo
        WHERE ($1::int IS NULL OR collection_id = $1) AND ($2::text IS NULL OR description ILIKE $2::text)
    `, [queryParams.collectionId, keyword])

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
