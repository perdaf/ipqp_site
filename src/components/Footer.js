import React from "react";
import "./footer.css";
import Apc from "../img/partenaires/APC formation.webp";
import Asmat from "../img/partenaires/asmat.webp";
import Bpspe from "../img/partenaires/BPSPE.webp";
import Eu from "../img/partenaires/EU.webp";
import Iperia from "../img/partenaires/iperia.webp";
import Touttoi from "../img/partenaires/touttoi.webp";
import Unifor from "../img/partenaires/uniformation.webp";

import Apave from "../img/certifs/apave.webp";
import Dd from "../img/certifs/Dd.webp";
import labelIperia from "../img/certifs/label+Iperia.webp";
import Pe from "../img/certifs/poleemploi.webp";

import facebook from "../img/reseaux/facebook.webp";
import tweeter from "../img/reseaux/tweeter.webp";
import youtub from "../img/reseaux/youtub.webp";

function Footer() {
  return (
    <footer className="mainFooter">
      <div className="partenaires col1">
        <h3>Nos partenaires</h3>
        <div className="partLogo">
          <img src={Bpspe} alt="logo" />
          <img src={Asmat} alt="logo" />
          <img src={Iperia} alt="logo" />
          <img src={Unifor} alt="logo" />
          <img src={Eu} alt="logo" />
          <img src={Touttoi} alt="logo" />
          <img src={Apc} alt="logo" />
        </div>
      </div>
      <div className="certif col2">
        <h3>Nos Certifications</h3>
        <div className="certifLogo">
          <img src={Apave} alt="logo certif" />
          <img src={Dd} alt="logo certif" />
          <img src={labelIperia} alt="logo certif" />
          <img src={Pe} alt="logo certif" />
        </div>
      </div>
      <div className="follow col2">
        <h3>#Suivez-nous</h3>
        <div className="followLogo">
          <img src={facebook} alt="logo facebook" />
          <img src={tweeter} alt="logo tweeter" />
          <img src={youtub} alt="logo youtube" />
        </div>
      </div>
      <div className="map col1">
        <h3>Nous Trouver</h3>
      </div>
    </footer>
  );
}

export default Footer;
