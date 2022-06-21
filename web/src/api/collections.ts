import type { Collection } from 'models/collection'

const API_URL = process.env.REACT_APP_API_URL

export const getCollections = async (): Promise<Collection[]> => {
    const res = await fetch(`${API_URL}/collections`)
    return await res.json()
}

export const getCollectionById = async (id: number): Promise<Collection> => {
    const res = await fetch(`${API_URL}/collections/${id}`)
    return await res.json()
}
