/* eslint-disable no-unused-vars */
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./logo.css";

export default function ImageLogo() {
  const imagem = "https://img.freepik.com/vetores-premium/modelo-de-logo-de-taco-logotipo-de-emblema-de-comida-de-taco_664675-608.jpg"
  return (
    <div className="containerlogo">
      <Avatar className="imglogo" alt="Remy Sharp" src={imagem}/>
      <div className="descriptioncompany">
      <h3 className="textlogo">Lanchonete do Luiz</h3>
      <span className="contact">{<WhatsAppIcon className="iconscontact" />}(85)999999999</span>
      <span className="contact">{<LocationOnIcon className="iconslocallogo" />} Av.Guto Ferreira, 95</span>
      </div>
    </div>
  );
}
