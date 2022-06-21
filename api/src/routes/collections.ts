import { Router } from 'express'
import { collectionsRepository } from '../repositories'

const router = Router()

router.get('/', async (req, res) => {
    const collections = await collectionsRepository.getCollections()

    res.json(collections)
})

export { router }
