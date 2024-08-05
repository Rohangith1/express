let books = [
  { id: 1, title: "Book 1", author: "author 1" },
  { id: 2, title: "Book 2", author: "author 2" },
];

//read
const getBooks=(req, res) => {
  res.json(books);
}

//create
const createBooks= (req, res) => {
  console.log(req.body);
  const newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);
  res.status(201).json(newBook);
}

//update /put
const updateBooks= (req, res) => {
  const id = parseInt(req.params.id);
  const updatedBooks = req.body;
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books[index] = { ...books[index], ...updatedBooks };
    res.json(books[index]);
  } else {
    res.status(404).json({ error: "book not found" });
  }
}

//delete
const deleteBooks=  (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    const deletedBook = books[index];
    books.slice(index, 1);
    res.json(deletedBook);
  } else {
    res.status(404).json({ error: "book not found" });
  }
}

module.exports = {
    getBooks,createBooks,updateBooks,deleteBooks
}


