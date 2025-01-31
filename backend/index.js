const connectToMongo = require('./db');
require('dotenv').config({path: __dirname + '/.env'})
const express = require('express');
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000 || process.env.PORT; //port 3000 for react app


app.use(cors())
app.use(express.json());// to use req.body, it is a middleware
//Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => { 
  console.log(`medantrik backend app listening on port http://localhost:${port}`)
})