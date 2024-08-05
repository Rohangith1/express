# What is Express? 

***Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js***

## initialisation:
``` npm init ```
## installation of express:
``` npm install express --save ```
## installation of nodemon
``` npm i nodemon ```

***nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.***

###  Run express server on: ``` localhost:3000 ```
![run express server](<Screenshot 2024-08-06 000505.png>)

###  send json: ``` localhost:3000/json example ```
![sending json](<Screenshot 2024-08-06 001426.png>)

### path is a inbuild module
***we can call directories***

![alt text](<Screenshot 2024-08-06 005246.png>)

## params

***The req.params property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /student/:id, then the “id” property is available as req.params.id. This object defaults to {}.***

```http://localhost:3000/api/products/3```

![params](<Screenshot 2024-08-06 021704.png>)

## query

***The req.query property allows you to access the query parameters from the URL of an incoming HTTP request. Query parameters are key-value pairs included in the URL after the “?” symbol, and they are separated by “&” symbols.***

``` http://localhost:3000/api/v1/query?search=r&limit=2 ```

![alt query](<Screenshot 2024-08-06 021254.png>)

# Basic crud operation

***modules*** 

```
const express = require('express')
const app = express();

//app.use(express.json());
```
***let books is a arr obj*** 

```
let books = [
    {id:1,title:'Book 1',author: 'author 1'},
    {id:2,title:'Book 2',author: 'author 2'},
]

```
***read*** 

```
app.get('/', (req, res) => {
    res.json(books)
})

app.use(express.json())

```
***create*** 

```
app.post('/books', (req, res) => {
    console.log(req.body)
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(newBook)

})

```
***update/put*** 

```
app.put('/books/:id',(req, res)=> {
    const id = parseInt(req.params.id)
    const updatedBooks = req.body
    const index = books.findIndex(book => book.id === id);

    if (index !== -1) {
        books[index] = { ...books[index], ...updatedBooks }
        res.json(books[index])
    }
    else {
        res.status(404).json({error: "book not found"})
    }

})

```
***delete*** 

```
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
      const deletedBook = books[index];
      books.slice(index, 1);
      res.json(deletedBook);
    } else {
      res.status(404).json({ error: "book not found" });
    }
})

```
***port*** 

```
app.listen(3000, () => {
    console.log('server is running on port 3000')
})
```