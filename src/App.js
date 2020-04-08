import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";

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

  // const cleanFilmData = (films) => {
  //   return films.map((film) => {
  //     return { ...film, title: film.Title, img: film.Poster };
  //   });
  // };

  const handleChange = (value) => {
    clearTimeout(timer);
    setTimer(setTimeout(() => getFilms(value), 1000));
  };

  return (
    <div>
      <Navbar handleChange={handleChange} />
      {console.log(allFilms)}
      <section className=".d-flex">
        {allFilms.map((film) => {
          return (
            <div>
              <Card img={film.Poster} title={film.Title} year={film.Year} />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
