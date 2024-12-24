const express = require('express');
const app = express();

const books = [
  { id: 1, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }
];

// Root route to show "Hello, Welcome to Book Store"
app.get('/', (req, res) => {
  res.send('Hello, Welcome to Book Store');
});

// Route to get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Route to get a specific book by id
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const book = books.find(b => b.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
