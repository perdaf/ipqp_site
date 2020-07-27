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
        <div className="contentgroupe">
          <h1>OBJECTIFS</h1>
          <ul>
            {formation[0].OBJECTIFS_VISES.map((obj, key) => (
              <li key={key}>{obj}</li>
            ))}
          </ul>
        </div>
        <div className="contentgroupe">
          <h1>PROGRAMME</h1>
          <ol>
            {formation[0].PROGRAMME.map((prog, key) => (
              <li key={key} className="partprog">
                <strong>{prog.DESCRIPTION}</strong>
                <ul>
                  {prog.CONTENT.map((ctx, key) => (
                    <li key={key}>{ctx}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
        <div className="contentgroupe">
          <h1>METHODES PEDAGOGIQUES</h1>
          <ul>
            <li>{formation[0].MOYENS_PEDAGOGIQUES}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FormationDetails;
