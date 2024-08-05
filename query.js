const express = require("express");
const app = express();
const products = require("./data");

app.get("/", (req, res) => {
  // res.json(products);
  res.send('<h1>Home Page</h1><a href="/api/products">Product</a>');
});

app.get('/api/v1/query', (req, res) => {
    let sortedProduct = [...products];
    const { search, limit } = req.query;
    if (search) {
        sortedProduct = sortedProduct.filter((item) => {
        return item.name.toLowerCase().startsWith(search)
        })
        
    }
    if (limit) {
      sortedProduct = sortedProduct.slice(0, Number(limit));
    }
// console.log(req.query)
    res.json(sortedProduct)
})

app.listen(3000, () => {
  console.log("started........");
});
