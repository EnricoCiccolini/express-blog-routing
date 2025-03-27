const express = require('express')
const posts = require('./posts')
const app = express()
const port = 3002



app.use(express.static('public'))



app.get('/', (req,res) => {
    res.json(posts)
})

app.listen(port,()=>{
    console.log('sono sulla porta ' + port)
} )