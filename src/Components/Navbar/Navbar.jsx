import React from "react";


const Navbar = (props) => {
  const { handleChange } = props;
  return (
    <nav className="navbar navbar-light bg-dark">
      <a className="navbar-brand text-danger font-weight-bold">Notflix</a>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onInput={e => handleChange(e.target.value)}
        />
      </form>
    </nav>
  );
};

export default Navbar;
