const express = require('express')
const path=require('path')
const app = express()

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,'example-f','index.html'))
// })
//middleware
app.use(express.static('example-f')) //call static website

app.listen(3000, () => {
    console.log("server is running on port 3000")
})