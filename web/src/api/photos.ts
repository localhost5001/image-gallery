import type { Photo } from 'models/photo'
import type { PhotoQuery } from 'models/photoQuery'

const API_URL = process.env.REACT_APP_API_URL

export const getPhotos = async (query: PhotoQuery): Promise<Photo[]> => {
    const res = await fetch(`${API_URL}/photos?collectionId=${query.collectionId}&keyword=${query.keyword}`)
    return await res.json()
}

export const getPhotoById = async (id: number): Promise<Photo> => {
    const res = await fetch(`${API_URL}/photos/${id}`)
    return await res.json()
}
