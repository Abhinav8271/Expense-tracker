const express = require('express')
const app = express()
const connectDB = require('./db.js')
var cors = require('cors')

const port = 3000

connectDB();

app.use(cors())
app.use(express.json())
app.use('/api', require('./routes/expenses'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})