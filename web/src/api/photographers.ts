import type { Photographer } from 'models/photographer'

const API_URL = process.env.REACT_APP_API_URL

export const getPhotographerById = async (id: number): Promise<Photographer> => {
    const res = await fetch(`${API_URL}/photographers/${id}`)
    return await res.json()
}
