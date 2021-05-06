const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./models')

const app = express()

let corsOptions = {origin: 'http://localhost:8081'}
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

db.sequelize.sync()

app.get('/', (req, res) => res.json({ message: "Hello from Node and Express"}))

require('./routes/tutorial.routes', app)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server listening at port ${PORT}.`)) 
