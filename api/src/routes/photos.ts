import { Router } from 'express'
import { photosRepository } from '../repositories'

const router = Router()

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    if (isNaN(id) || id < 1) {
        return res.status(404).send('Invalid ID parameter')
    }

    const photo = await photosRepository.getPhotoById(id)

    if (photo === null) {
        res.sendStatus(401)
    }

    res.json(photo)
})

router.get('/', async (req, res) => {
    const { collectionId, keyword } = req.query

    const collectionIdInt = parseInt(collectionId as string)

    if (!collectionId || !keyword) {
        return res.status(404).send('Invalid query parameters')
    }

    const photos = await photosRepository.getPhotos({
        collectionId: collectionIdInt,
        keyword: keyword as string
    })

    res.json(photos)
})

export { router }