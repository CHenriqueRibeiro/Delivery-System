import * as React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import "./footer.css";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <div className="footer">
        <BottomNavigation
          className="contentfooter"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            id="carticon "
            className="iconsfooter"
            label="Carrinho"
            icon={<ShoppingCartOutlinedIcon className="iconsfooter" />}
          />
          <div id="cartcount"></div>
          <BottomNavigationAction
            className="iconsfooter"
            label="Favoritos"
            icon={<FavoriteIcon className="iconsfooter" />}
          />
          <BottomNavigationAction
            className="iconsfooter"
            label="Perfil"
            icon={<AccountCircleOutlinedIcon className="iconsfooter" />}
          />
        </BottomNavigation>
      </div>
    </>
  );
}
/*<div id="cartitems">
          <BottomNavigationAction
            id="iconcart-list"
            label="Carrinho"
            icon={<ShoppingCartOutlinedIcon />}
          />
        </div>*/
