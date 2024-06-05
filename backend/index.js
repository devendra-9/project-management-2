const express = require('express');
const app = express();
const cors = require('cors')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
// const userlink = require('./routes/uroutes')
// app.use('/user',userlink)
app.use(cors())
app.use(bodyparser.json())
app.use(cookieparser())
const port = 4000
app.listen(port,()=>{
    console.log('Running on port 4000')
})