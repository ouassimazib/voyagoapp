const express = require('express')

require('dotenv').config();


const app = express()
 
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }));

app.listen(3000 ,'0.0.0.0', () => {
    console.log("server lisenting on port 3000")
})

