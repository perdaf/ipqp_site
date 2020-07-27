import React from "react";
import Cards from "../Cards";
import { Link } from "react-router-dom";

import "./accueil.css";

import formations from "../../data/formations.json";

function Accueil() {
  if (formations) {
    formations.map((info) => console.log(info));
  }

  return (
    <div className="pageAccueil">
      <div className="hero_image">
        <div className="hero_txt">
          <h1>Institut + que Possible</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            deserunt ad omnis facere nisi eos soluta in pariatur temporibus
            voluptas! Labore dolorem ab quas placeat ullam quam similique iure
            illum.
          </p>
          <Link to="/contact">
            <button className="big_btn">Nous Contacter</button>
          </Link>
        </div>
      </div>
      <div className="formationUne">
        <h1>Formations à la une !</h1>
        <div className="listCards">
          {formations.length !== 0 &&
            formations.map((info) => (
              <Cards
                key={info.TITRE}
                title={info.TITRE}
                text={info.OBJECTIFS_VISES[0]}
                txt_btn="Voir la Formation"
                link={info.TITRE}
                className="card"
              />
            ))}
          {formations.length <= 0 && <h2>Pas de Formations</h2>}
        </div>
        <Link to="/formations">
          <button className="big_btn mt2"> Voir toutes nos formations</button>
        </Link>
      </div>
      <div className="actualiteUne">
        <h1>Actualitées à la une !</h1>
        <div className="listCards">
          <Cards
            title="Actualité de xyz"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec euismod justo. Vestibulum urna nunc, suscipit at iaculis nec, lacinia id erat. Sed tristique ex at malesuada feugiat. Vestibulum"
            txt_btn="Voir l'actualité"
            className="card"
          />
          <Cards
            title="Actualité de xyz"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec euismod justo. Vestibulum urna nunc, suscipit at iaculis nec, lacinia id erat. Sed tristique ex at malesuada feugiat. Vestibulum"
            txt_btn="Voir l'actualité"
            className="card"
          />
        </div>
        <Link to="/actualites">
          <button className="big_btn mt2"> Voir toutes nos actualitées</button>
        </Link>
      </div>
    </div>
  );
}

export default Accueil;
