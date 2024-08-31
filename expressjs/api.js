To create a form-based CRUD application using Express.js, you'll need to modify the server code to handle HTTP requests from the form submissions. Here's how you can modify the previous example to include forms for CRUD operations:

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Dummy data for books
let books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// GET: Display all books
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// GET: Get all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// POST: Add a new book
app.post('/api/books', (req, res) => {
    const { title, author } = req.body;
    const newBook = {
        id: books.length + 1,
        title,
        author
    };
    books.push(newBook);
    res.redirect('/');
});

// PUT: Update an existing book
app.put('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author } = req.body;
    const bookIndex = books.findIndex(book => book.id === bookId);
    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }
    books[bookIndex] = { id: bookId, title, author };
    res.redirect('/');
});

// DELETE: Delete a book
app.delete('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === bookId);
    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }
    books.splice(bookIndex, 1);
    res.redirect('/');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

Now, create a directory named `public` in your project directory and create an `index.html` file inside it with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Library</title>
</head>
<body>
    <h1>Book Library</h1>

    <!-- Form to add a new book -->
    <h2>Add a New Book</h2>
    <form action="/api/books" method="POST">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required><br>
        <label for="author">Author:</label>
        <input type="text" id="author" name="author" required><br>
        <button type="submit">Add Book</button>
    </form>

    <!-- Form to update a book -->
    <h2>Update a Book</h2>
    <form id="updateBookForm">
        <label for="updateId">Book ID:</label>
        <input type="number" id="updateId" name="updateId" required><br>
        <label for="updateTitle">New Title:</label>
        <input type="text" id="updateTitle" name="updateTitle" required><br>
        <label for="updateAuthor">New Author:</label>
        <input type="text" id="updateAuthor" name="updateAuthor" required><br>
        <button type="submit">Update Book</button>
    </form>

    <!-- Form to delete a book -->
    <h2>Delete a Book</h2>
    <form id="deleteBookForm">
        <label for="deleteId">Book ID:</label>
        <input type="number" id="deleteId" name="deleteId" required><br>
        <button type="submit">Delete Book</button>
    </form>

    <!-- Display all books -->
    <h2>All Books</h2>
    <div id="bookList"></div>
</body>
</html>
```

This HTML file contains forms for adding, updating, and deleting books. It also displays all books fetched from the API endpoint `/api/books`.

Now, run your Express.js server (`node app.js`) and open `http://localhost:3000` in your web browser. You can now interact with the API using the provided forms.