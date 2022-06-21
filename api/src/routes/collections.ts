import { Router } from 'express'
import { collectionsRepository } from '../repositories'

const router = Router()

router.get('/', async (req, res) => {
    const collections = await collectionsRepository.getCollections()

    res.json(collections)
})

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    if (isNaN(id) || id < 1) {
        res.status(400).send('Invalid ID parameter')
        return
    }

    const collection = await collectionsRepository.getCollectionById(id)

    if (collection === null) {
        res.sendStatus(404)
        return
    } 

    res.json(collection)
})

export { router }
