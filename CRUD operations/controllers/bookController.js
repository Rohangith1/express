let books = [
  { id: 1, title: "Book 1", author: "author 1" },
  { id: 2, title: "Book 2", author: "author 2" },
];

//read
app.get("/", (req, res) => {
  res.json(books);
});

app.use(express.json());

//create
app.post("/books", (req, res) => {
  console.log(req.body);
  const newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);
  res.status(201).json(newBook);
});

//update /put
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedBooks = req.body;
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books[index] = { ...books[index], ...updatedBooks };
    res.json(books[index]);
  } else {
    res.status(404).json({ error: "book not found" });
  }
});

//delete
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    const deletedBook = books[index];
    books.slice(index, 1);
    res.json(deletedBook);
  } else {
    res.status(404).json({ error: "book not found" });
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
