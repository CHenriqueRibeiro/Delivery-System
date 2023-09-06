// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import "./cardCart.css";

export default function MediaControlCard(props) {
  MediaControlCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };

  return (
    <Card className="cardCart">
      <Box className="cardDescriptionCart">
        <CardMedia component="img" src={props.imageUrl} alt={props.flavor} />
        <CardContent className="ConteudodocardCart">
          <Typography variant="h6">{props.flavor}</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {props.ingredients}
          </Typography>
          <Typography variant="h6">R$ {props.price}</Typography>
          <TextField id="standard-basic" label="Observações" variant="standard" />
        </CardContent>
      </Box>
    </Card>
  );
}
