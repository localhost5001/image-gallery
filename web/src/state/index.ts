import { atom, selector, atomFamily } from 'recoil'

import { collectinosApi, photosApi, photographersApi } from 'api'
import type { Collection } from 'models/collection'

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
