const express = require('express')
const app = express()
const port = 3002
const postsRouter = require('./routers/posts')


app.use(express.static('public'))

app.use('/posts',postsRouter)



app.listen(port,()=>{
    console.log('sono sulla porta ' + port)
} )