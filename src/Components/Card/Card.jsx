import React from "react";


const Card = (props) => {
  const {img, title, year} = props;
  return (
    <div className="card" style={{ width: '18rem'}}>
    <img src={img} className="card-img-top" alt=""/>
    <div className="card-body">
      <p className="card-text">{title}</p>
      <p className="card-text">{year}</p>
    </div>
  </div>
  );
};

export default Card;
