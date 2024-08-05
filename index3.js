const express = require('express')
const app = express()
const products=require('./data')

app.get('/', (req, res) => {
    // res.json(products);
    res.send('<h1>Home Page</h1><a href="/api/products">Product</a>')
})

app.get("/api/products/:productID", (req, res) => {
    // const newItem = products.map((item) => {
    //     const { id, name, photo } = item
    //     return { id, name, photo };
    // })
    // // res.json(products)
    // res.json(newItem);
    const { productID } = req.params;
    console.log(req.params)
    const singleProduct = products.find((item) => item.id === Number(productID))
    if (!singleProduct) {
        res.status(404).send("product not found.... ");
    }
    
        res.json(singleProduct);

});

app.listen(3000, () => {
    console.log("started........")
})