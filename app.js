
const express = require('express')

const PORT = process.env.PORT || 3500
const app = express()

app.get('/', (req, res) => {
  res.send({ hello: 'there!' })
})

app.use('/static', express.static('files'))

app.listen(3000)
