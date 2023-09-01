// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './card.css'

export default function MediaControlCard() {
  return (
    <Card  sx={{ display: "flex" }}>
      <Box id="cards">
        <CardContent >
          <Typography component="div" variant="h6">
            Pizza de Calabresa com Catupiry
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            Calabresa, Queijo, Mussarela, Oregano e Catupiry
          </Typography>
          <Typography component="div" variant="h6">
            R$ 19,90
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 100, display: "flex" }}
        image="https://img.freepik.com/vetores-premium/modelo-de-logo-de-taco-logotipo-de-emblema-de-comida-de-taco_664675-608.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
