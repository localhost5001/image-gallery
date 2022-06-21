import { atom, selector } from 'recoil'

import { collectinosApi, photosApi } from 'api'

import type { Collection } from 'models/collection'
import type { PhotoQuery } from 'models/photoQuery'
import type { Photo } from 'models/photo'

export const collectionsState = selector<Collection[]>({
    key: 'collections',
    get: () => {
        return collectinosApi.getCollections()
    }
})

export const selectedCollectionState = atom<Collection | null>({
    key: 'selectedCollection',
    default: null
})

export const keywordState = atom<string>({
    key: 'keyword',
    default: ''
})

export const photoQueryState = atom<PhotoQuery | null>({
    key: 'photoQuery',
    default: null
})

export const photosState = selector<Photo[]>({
    key: 'photos',
    get: async ({get}) => {
        const query = get(photoQueryState)
        if (query === null) {
            return []
        }

        return await photosApi.getPhotos(query)
    }
})
