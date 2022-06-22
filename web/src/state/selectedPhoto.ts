import { atom, selector } from 'recoil'
import { collectinosApi, photographersApi, photosApi } from 'api'

import type { Photo } from 'models/photo'
import type { Photographer } from 'models/photographer'
import type { Collection } from 'models/collection'

export const selectedPhotoIdState = atom<number | null>({
    key: 'selectedPhotoId',
    default: null
})

export const selectedPhotoState = selector<Photo | null>({
    key: 'selectedPhotoState',
    get: async ({get}) => {
        const photoId = get(selectedPhotoIdState)
        if (photoId === null) {
            return null
        }

        return await photosApi.getPhotoById(photoId)
    }
})

export const selectedPhotoPhotographerState = selector<Photographer | null>({
    key: 'selectedPhotoPhotographer',
    get: async ({get}) => {
        const selectedPhoto = get(selectedPhotoState)

        if (selectedPhoto === null) {
            return null
        }

        return await photographersApi.getPhotographerById(selectedPhoto.photographer_id)
    }
})

export const selectedPhotoCollectionState = selector<Collection | null>({
    key: 'selectedPhotoCollection',
    get: async ({ get }) => {
        const selectedPhoto = get(selectedPhotoState)

        if (selectedPhoto === null) {
            return null
        }

        return await collectinosApi.getCollectionById(selectedPhoto.collection_id)
    }
})
