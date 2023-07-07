const express = require('express')
const app = express()
const port = 3006
const dbConnect = require('./db')
const cors = require('cors')
dbConnect();
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/', require('./routes/registerRoutes'))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})