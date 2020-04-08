import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";
import Dashboard from "./Container/Dashboard/Dashboard";

function App() {
  const [allFilms, setAllFilms] = useState([]);
  const [timer, setTimer] = useState(null);

  const getFilms = (searchTerm) => {
    fetch(`http://www.omdbapi.com/?apikey=6b41f752&s=${searchTerm}`)
      .then((result) => result.json())
      .then((result) => {
        return setAllFilms(result.Search);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (value) => {
    clearTimeout(timer);
    setTimer(setTimeout(() => getFilms(value), 1000));
  };

  return (
    <div>
      <Navbar handleChange={handleChange} />
      {console.log(allFilms)}
      <Dashboard allFilms={allFilms} getStartPage={getFilms} />
    </div>
  );
}

export default App;
