import { Router } from 'express'
import { photosRepository } from '../repositories'

const router = Router()

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    if (isNaN(id) || id < 1) {
        return res.status(400).send('Invalid ID parameter')
    }

    const photo = await photosRepository.getPhotoById(id)

    if (photo === null) {
        res.sendStatus(404)
    }

    res.json(photo)
})

router.get('/', async (req, res) => {
    try {
        const { collectionId, keyword } = req.query

        const collectionIdInt = collectionId ? parseInt(collectionId as string) : undefined

        const photos = await photosRepository.getPhotos({
            collectionId: collectionIdInt,
            keyword: keyword as string
        })

        res.json(photos)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})

export { router }
