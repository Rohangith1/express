const express = require('express')
const app = express();
const path=require('path')

app.get('/', (request, response) => {
    response.send('<h1>Hello Express</h1>')
})
app.get('/contact', (request, response) => {
    response.send('<h1>Contact page</h1>')
})
app.get('/files', (request, response) => {
    response.sendFile(path.join(__dirname,'index.html'))
})

app.get('/jsonexample', (req, res) => {
    res.json([
        {
            fName: "Rohan",
            lName:"phuke"
        },
        {
            fName: "yoru",
            lName:"jett"
        }
    ])
})

app.listen(3000, () => {
    console.log("Server is running")
})