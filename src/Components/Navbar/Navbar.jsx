import React, { useState } from "react";

const Navbar = (props) => {
  const { handleChange } = props;
  const [searchContents, changeSearchContents] = useState("film");

  return (
    <nav className="navbar navbar-light bg-dark">
      <h2 className="h2 overflow-hidden text-danger font-weight-bold">Notflix</h2>
      <form
        className="form-inline"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => changeSearchContents(e.target.value)}
        />
        <button
          class="btn btn-outline-danger my-2 my-sm-0"
          varient="success"
          onClick={() => handleChange(searchContents)}
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
