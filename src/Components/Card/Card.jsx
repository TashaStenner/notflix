import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";
import Collapsible from "react-collapsible";

const Card = (props) => {
  const { img, title, year } = props;
  const [age, setAge] = useState();
  const [director, setDirector] = useState();
  const [genre, setGenre] = useState();
  const [plot, setPlot] = useState();

  useEffect(() => {
    getFilmDetails(title);
  });

  const getFilmDetails = (searchTerm) => {
    fetch(`http://www.omdbapi.com/?apikey=6b41f752&t=${searchTerm}`)
      .then((result) => result.json())
      .then((result) => {
        return (
          setAge(result.Rated),
          setDirector(result.Director),
          setGenre(result.Genre),
          setPlot(result.Plot)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card" style={{ width: "18rem", height: "100%" }}>
      <img
        src={img}
        className="card-img-top"
        alt={title}
        style={{ height: "90%" }}
      />
      <div className="card-body bg-danger" style={{ height: "10%" }}>
        <p className="card-text text-light">{title}</p>
        <p className="card-text text-light">{year}</p>
        <Collapsible trigger="Learn More Here " className={styles.dropDown}>
          <p className="text-light">Genre: </p>
          <p>{genre}</p>
          <p className="text-light">Director: </p>
          <p>{director}</p>
          <p className="text-light">Age Rating: </p>
          <p>{age}</p>
          <p className="text-light">Plot: </p>
          <p>{plot}</p>
        </Collapsible>
      </div>
    </div>
  );
};

export default Card;
