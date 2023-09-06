import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import cartContext from "./../../context/cartContext";
import Button from "@mui/material/Button";
import Listcart from "../Listcart/listcart";

import "./footer.css";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const cart = React.useContext(cartContext);

  function cliqueparaaparecer() {
    const addproducts = document.getElementById("cartitems");
    addproducts.classList.toggle("cartitemson");
  }

  return (
    <>
      <div id="cartitems">
        <BottomNavigationAction
          id="iconcart-list"
          label="Carrinho"
          icon={<ShoppingCartOutlinedIcon />}
          onClick={cliqueparaaparecer}
        />
        <Listcart />
        <div className="actions">
          <Button
            className="btnreturnpurchase"
            variant="outlined"
            onClick={cliqueparaaparecer}
          >
            continuar Comprando
          </Button>
          <Button className="btncheckout" variant="contained">
            Finalizar Compra
          </Button>
        </div>
      </div>



      
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
            icon={
              <ShoppingCartOutlinedIcon
                className="iconsfooter"
                onClick={cliqueparaaparecer}
              />
            }
          />
          {cart.kart > 0 ? <div id="cartcount">{cart.kart}</div> : ""}
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
