import React, { useState } from "react";
import classes from "./BookSearch.module.scss";
import BookSearchOutput from "./BookSearchOutput/BookSearchOutput";

import id1 from "./BookSearchOutput/id1.jpg";
import id2 from "./BookSearchOutput/id2.jpg";
import id3 from "./BookSearchOutput/id3.jpg";
import id4 from "./BookSearchOutput/id4.jpg";
import id5 from "./BookSearchOutput/id5.jpg";
import id6 from "./BookSearchOutput/id6.jpg";
import id7 from "./BookSearchOutput/id7.jpg";
import id8 from "./BookSearchOutput/id8.jpg";
import id9 from "./BookSearchOutput/id9.jpg";
import id10 from "./BookSearchOutput/id10.jpg";

const books = [
  { id: 1, name: "Anna Karenina", author: "Leo Tolstoy", img: id1 },
  { id: 2, name: "Madame Bovary", author: "Gustave Flaubert", img: id2 },
  { id: 3, name: "War and Peace", author: "Leo Tolstoy", img: id3 },
  { id: 4, name: "The Great Gatsby", author: "F. Scott Fitzgerald", img: id4 },
  { id: 5, name: "Lolita", author: "Vladimir Nabokov", img: id5 },
  { id: 6, name: "Middlemarch", author: "George Eliot", img: id6 },
  {
    id: 7,
    name: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    img: id7,
  },
  {
    id: 8,
    name: "The Stories of Anton Chekhov",
    author: "Anton Chekhov",
    img: id8,
  },
  { id: 9, name: "In Search of Lost Time", author: "Marcel Proust", img: id9 },
  { id: 10, name: "Hamlet", author: "William Shakespeare", img: id10 },
];

const BookSearch = (props) => {
  const [foundBooks, setFoundBooks] = useState(books);
  const [searchByID, setSearchByID] = useState(false);

  const searchBooksHandler = (e) => {
    const filterdBooks = books.filter(
      (p) =>
        p.name.toLowerCase().includes(e.target.value.trim().toLowerCase()) ||
        p.author.toLowerCase().includes(e.target.value.trim().toLowerCase())
    );
    setFoundBooks(filterdBooks);
  };

  const searchByIdHandler = (e) => {
    const filteredBooks = books.filter((p) => {
      return p.id === parseInt(e.target.value);
    });
    setFoundBooks(filteredBooks);
  };

  const setSearchingMethod = (e) => {
    setSearchByID((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.BookSearch}>
      <div className={classes.Container}>
        <form className={classes.Book__Search__Form} onSubmit={submitHandler}>
          <h3>Search for a book</h3>
          <div className={classes.FormGroup}>
            <input
              className={classes.Text__INPUT}
              onChange={searchByID ? searchBooksHandler : searchByIdHandler}
              type="text"
              placeholder={
                searchByID
                  ? "Enter the title or author of the book*"
                  : "Enter the ID of the Book*"
              }
            ></input>

            <div className={classes.Checkbox}>
              <button onClick={setSearchingMethod}>
                {searchByID ? "Search By Title / Author" : "Search By ID"}
              </button>
            </div>
          </div>
          <button type="submit">Search</button>
        </form>
        <BookSearchOutput books={foundBooks} />
      </div>
    </div>
  );
};

export default BookSearch;
