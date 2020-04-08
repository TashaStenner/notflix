import React from "react";


const Card = (props) => {
  const {img, title, year} = props;
  return (
    <div className="card" style={{ width: '18rem', height: '100%'}}>
    <img src={img} className="card-img-top" alt="" />
    <div className="card-body bg-danger">
      <p className="card-text text-light">{title}</p>
      <p className="card-text text-light">{year}</p>
    </div>
  </div>
  );
};

export default Card;
