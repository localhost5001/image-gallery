import { Photo } from 'models/photo'

export const getPhotos = (collectionId: string, keyword: string): Promise<Photo[]> => {
    return Promise.resolve([])
}

export const getPhotoById = (id: number): Promise<Photo> => {
    return Promise.resolve({
        id: id,
        collection_id: 1,
        photographer_id: 1,
        url: 'url',
        description: 'photo description',
        height: 100,
        width: 100
    })
}
