import React from "react";
import styles from "./Dashboard.module.scss";
import Card from "../../Components/Card";
import { useEffect } from "react";

const Dashboard = (props) => {
  const { allFilms, getStartPage } = props;

  const getFilmsJsx = () => {
    return allFilms ? (
      <div className="container d-flex flex-row bd-highlight mb-3">
        {allFilms.map((film) => {
          return (
            <div>
              <Card img={film.Poster} title={film.Title} year={film.Year} />
            </div>
          );
        })}
      </div>
    ) : (
      <div className="container-fluid .d-inline-flex flex-row flex-wrap ">
        <h2 className="mt-3 text-danger font-weight-bold p-3">Your Film does not exist</h2>
        <p className="font-weight-bold p-3">Please enter a film that does</p>
      </div>
    );
  };

  useEffect(() => {
    getStartPage("ants")
  },[]);

  return <>
  {getFilmsJsx()}
  </>;
};

export default Dashboard;
