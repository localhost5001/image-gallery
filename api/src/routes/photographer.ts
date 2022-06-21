import { Router } from 'express'
import { photographerRepository } from '../repositories'

const router = Router()

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    if (isNaN(id) || id < 1) {
        res.status(400).send('Invalid ID parameter')
        return
    }
    
    const photographer = await photographerRepository.getPhotographerById(id)

    if (photographer === null) {
        res.sendStatus(404)
        return
    }

    res.json(photographer)
})

export { router }
