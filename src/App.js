import { Fragment } from "react";
import "./App.css";
import BookSearch from "./components/BookSearch/BookSearch";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Fragment>
      <Navigation />
      <BookSearch />
    </Fragment>
  );
}

export default App;
