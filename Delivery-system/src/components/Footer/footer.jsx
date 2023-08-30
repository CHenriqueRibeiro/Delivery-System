import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./footer.css";
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="footer">
      <BottomNavigation
        className="contentfooter"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          className="iconsfooter"
          label="Carrinho"
          icon={<ShoppingCartOutlinedIcon className="iconsfooter" />}
        />
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
    </Box>
  );
}
