const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const goatRoutes = require('./routers/goats');
const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.use('/goats', goatRoutes)

app.get('/', (req, res) => res.send('Hello there!'))
app.post('/', (req, res) => res.status(405).send('Not allowed!'))

module.exports = app




