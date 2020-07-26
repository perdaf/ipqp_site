import React from "react";
import Cards from "../Cards";
import formations from "../../data/formations.json";

import "./formations.css";

function Formations() {
  return (
    <div className="formations">
      <h1>Nos Formations</h1>
      <div className="listCards">
        {formations &&
          formations.map((info) => (
            <Cards
              key={info.TITRE}
              title={info.TITRE}
              text={info.OBJECTIFS_VISES[0]}
              txt_btn="Voir la Formation"
              className="card"
            />
          ))}
      </div>
    </div>
  );
}

export default Formations;
