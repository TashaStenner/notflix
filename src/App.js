import React, { useState } from "react";

import styles from "./App.module.scss";

function App() {
const [allFilms, setAllFilms]= useState([])

  const getFilms = (searchTerm) => {
    fetch(`http://www.omdbapi.com/?apikey=6b41f752&s=${searchTerm}`)
      .then((result) => result.json())
      .then((result) => {
       setAllFilms(cleanFilmData(result.Search))
       console.log(allFilms)
      })
      .catch((err) => console.log(err));
  };

  const cleanFilmData = films => {
    return films.map(film => {
      return { ...film, Title: film.Title, Img: film.Poster, Id: film.imbdID };
    });
  };

  return (
    <div>
      <input placeholder={"film"} onInput={(e) => getFilms(e.target.value)} />
    </div>
  );
}

export default App;
