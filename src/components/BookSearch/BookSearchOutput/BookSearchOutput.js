import React from "react";
import classes from "./BookSearchOutput.module.scss";
const BookSearchOutput = (props) => {
  let content = <p>No Books Found, Please enter another Title / Author</p>;

  if (props.books.length > 0) {
    content =
      props.books.length > 0 &&
      props.books.map((book) => {
        return (
          <div key={book.id} className={classes.Book}>
            <div className={classes.Image}>
              <img src={book.img} alt="book"></img>
            </div>
            <div className={classes.Overlay}>
              <h5>id: {book.id}</h5>
              <h5>{book.name}</h5>
              <h5>{book.author}</h5>
            </div>
          </div>
        );
      });
  }

  return (
    <div className={classes.BookSearchOutput}>
      <div className={classes.Books}>{content}</div>
    </div>
  );
};

export default BookSearchOutput;
