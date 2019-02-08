
import express from 'express'

const PORT = process.env.PORT || 3500
const app = express()

app.get('/', (req, res) => {
  res.send({ hello: 'there!' })
})
