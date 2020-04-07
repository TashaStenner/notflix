import React from "react";

import styles from "./App.module.scss";

function App() {
  const getFilms = (searchTerm) => {
    fetch(`http://www.omdbapi.com/?apikey=6b41f752&s=${searchTerm}`)
      .then((result) => result.json())
      .then((result) => {
        const films = result.Search;
        let index = 0;
        for (index <= 10; index + 1;) {
          console.log(films[index].Title);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input placeholder={"film"} onInput={(e) => getFilms(e.target.value)} />
    </div>
  );
}

export default App;
