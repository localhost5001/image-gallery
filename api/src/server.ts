import express from 'express'
import cors from 'cors'
import { collectionsRouter, photographersRouter, photosRouter } from './routes'

const app = express();

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello world!")
})

app.use('/photos', photosRouter)
app.use('/photographers', photographersRouter)
app.use('/collections', collectionsRouter)

app.listen(8080, () => {
  console.log("API server ready at http://localhost:8080")
})
