import React from "react";
import Cards from "../Cards";
import "./accueil.css";

function Accueil() {
  const formations = [
    {
      title: "DEVENIR UN TUTEUR EFFICACE",
      text:
        "Analyser les modes d’acquisition des connaissances. Construire une action de tutorat dans l’entreprise",
      txt_btn: "Voir la formation",
    },
    {
      title: "ENTREPRENDRE : DE L'  IDÉE AU PROJET",
      text:
        "  Analyser la cohérence homme/projet. Comprendre et analyser le contexte de la création de son activité. Transformer son idée en projet réaliste et réalisable",
      txt_btn: "Voir la formation",
    },
  ];

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
          <button className="big_btn">Nous Contacter</button>
        </div>
      </div>
      <div className="formationUne">
        <h1>Formations à la une !</h1>
        <div className="listCards">
          {formations &&
            formations.map((info) => (
              <Cards
                title={info.title}
                text={info.text}
                txt_btn={info.txt_btn}
                className="card"
              />
            ))}
        </div>
        <button className="big_btn mt2"> Voir toutes nos formations</button>
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
        <button className="big_btn mt2"> Voir toutes nos actualitées</button>
      </div>
    </div>
  );
}

export default Accueil;
