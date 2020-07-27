import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

function Cards(props) {
  return (
    <div className="cards">
      <div className="card_title">
        <h3>{props.title}</h3>
      </div>
      <div className="card_body">
        <p>{props.text}</p>
      </div>
      <div className="spacer"></div>
      <div className="card_pied">
        <Link to={props.link}>
          <button className="card_btn">{props.txt_btn}</button>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
