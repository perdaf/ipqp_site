import React from "react";
import { useParams } from "react-router-dom";
import "./formationDetails.css";
import formations from "../../data/formations.json";

function FormationDetails() {
  let { id } = useParams();

  let formation = formations.filter((a) => a.TITRE === id);
  console.log(formation[0]);

  return (
    <div className="formationDetails">
      <h1 className="title">{formation[0].TITRE}</h1>
      <div className="sidebar">
        <div className="sidegroupe">
          <h3>PUBLICS</h3>
          <p>
            {formation[0].PUBLICS_CIBLES !== ""
              ? formation[0].PUBLICS_CIBLES
              : "Non Déterminé"}
          </p>
        </div>
        <div className="sidegroupe">
          <h3>GROUPE</h3>
          <p>
            {formation[0].NOMBRE_DE_PARTICIPANTS !== ""
              ? formation[0].NOMBRE_DE_PARTICIPANTS
              : "Non Déterminé"}
          </p>
        </div>
        <div className="sidegroupe">
          <h3>DUREE</h3>
          <p>
            {formation[0].DURÉE !== "" ? formation[0].DURÉE : "Non Déterminé"}
          </p>
        </div>
        <div className="sidegroupe">
          <h3>ANIMATION</h3>
          <p>
            {formation[0].FORMATEURS_REFERENTS !== ""
              ? formation[0].FORMATEURS_REFERENTS
              : "Non Déterminé"}
          </p>
        </div>
        <div className="sidegroupe">
          <h3>DATE</h3>
          <p>
            {formation[0].DATE !== "" ? formation[0].DATE : "Non Déterminé"}
          </p>
        </div>
      </div>

      <div className="content">
        <h1>OBJECTIFS</h1>
        <h1>PROGRAMME</h1>
        <h1>METHODES PEDAGOGIQUES</h1>
      </div>
    </div>
  );
}

export default FormationDetails;
