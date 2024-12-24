# Books API

This is a simple Books API built using Node.js and Express.

## Endpoints
- `GET /books`: Returns a list of all books.
- `GET /books/:id`: Returns details of a book by ID.

## Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the server using `npm start`.

## Example Response
- **GET /books/1**:
  ```json
  {
    "id": 1,
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  }
