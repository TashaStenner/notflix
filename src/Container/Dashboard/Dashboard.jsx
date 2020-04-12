import React from "react";
import styles from "./Dashboard.module.scss";
import Card from "../../Components/Card";
import { useEffect } from "react";

const Dashboard = (props) => {
  const { allFilms, getStartPage } = props;

  const getFilmsJsx = () => {
    return allFilms ? (
      <div className={styles.container}>
        {allFilms.map((film) => {
          return (
            <div className={styles.card}>
              <Card img={film.Poster} title={film.Title} year={film.Year} />
            </div>
          );
        })}
      </div>
    ) : (
      <div className={ styles.broken}>
        <h2 className="mt-3 text-danger font-weight-bold p-3">Your Film does not exist</h2>
        <p className="text-light font-weight-bold p-3">Please enter a film that does</p>
      </div>
    );
  };

  useEffect(() => {
    getStartPage("300")
  },[]);

  return <>
  {getFilmsJsx()}
  </>;
};

export default Dashboard;
