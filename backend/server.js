const express = require('express')
const app = express()
const connectDB = require('./db.js')
var cors = require('cors')

const port = 3000
connectDB();

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
