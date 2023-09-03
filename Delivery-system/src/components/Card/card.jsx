// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import "./card.css";

export default function MediaControlCard(props) {
  MediaControlCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };
  return (
    <Card className="card" sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 100, display: "flex" }}
        src={props.imageUrl}
        alt={props.flavor}
      />
      <Box className="cardDescription">
        <CardContent>
          <Typography component="div" variant="h6">
            {props.flavor}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            {props.ingredients}
          </Typography>
          <Typography component="div" variant="h6">
            R$ {props.price}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
