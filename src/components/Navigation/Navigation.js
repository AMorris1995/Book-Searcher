import React from "react";
import classes from "./Navigation.module.scss";

const Navigation = (props) => {
  return (
    <div className={classes.Navigation}>
      <div className={classes.Container}>
        <div className={classes.Logo}>
          <h3>Book Store</h3>
        </div>

        <div className={classes.Navigation__Links}>
          <ul>
            <li>Authors</li>
            <li>Series</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
