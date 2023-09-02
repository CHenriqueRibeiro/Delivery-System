import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Logo from "@mui/material/Avatar";
import Input from "../Input/input";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./header.css";

export default function SimpleContainer() {
  const imagem =
    "https://img.freepik.com/vetores-premium/modelo-de-logo-de-taco-logotipo-de-emblema-de-comida-de-taco_664675-608.jpg";
  return (
    <React.Fragment>
      <CssBaseline />
      <Box id="containerheader" /*direction={{ xs: "column", sm: "row" }}*/>
        <div id="teste">
          <Logo id="imglogo" alt="Remy Sharp" src={imagem} />
          <div className="row">
            <h2>Taco Lanches</h2>
            <p>{<WhatsAppIcon className="iconscontact" />}85 998767654</p>
          </div>
        </div>
        
      </Box>
      <Input />
    </React.Fragment>
  );
}
