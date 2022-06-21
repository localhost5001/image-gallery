import express from 'express'
import { getPostgresClient } from "./postgres";
import express from "express";
import { collectionsRouter, photographersRouter, photosRouter } from './routes'

const app = express();


app.get("/", (req, res) => {
  res.send("Hello world!")
})

app.use('/photos', photosRouter)
app.use('/photographers', photographersRouter)
app.use('/collections', collectionsRouter)

app.listen(8080, () => {
  console.log("API server ready at http://localhost:8080")
})
