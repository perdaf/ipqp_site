import React from "react";
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
        <button className="card_btn">{props.txt_btn}</button>
      </div>
    </div>
  );
}

export default Cards;
