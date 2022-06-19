import { Photo } from 'models/photo'
import { PhotoPreview } from 'models/photoPreview'

export const getPhotos = (collectionId: string, keyword: string): Promise<PhotoPreview[]> => {
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
