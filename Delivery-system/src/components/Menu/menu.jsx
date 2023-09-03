import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "../Card/card";
import "./menu.css";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        id="sectionsmenu"
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="Promoções" className="teste" />
        <Tab label="Pizza" className="teste" />
        <Tab label="Hamburguer" className="teste" />
        <Tab label="Pão Arabe" className="teste" />
        <Tab label="Pao Bola" className="teste" />
        <Tab label="Bebida" className="teste" />
      </Tabs>
      <Box id="contentmenu">
        <CustomTabPanel value={value} index={0} class="tabContents">
          <Card
            imageUrl="https://img1.gratispng.com/20180202/qrq/kisspng-sicilian-pizza-italian-cuisine-pepperoni-tarte-fla-pepperoni-pizza-5a74bcc6c6e634.1018048315175999428147.jpg"
            flavor="Pizza Calabresa"
            ingredients="Calabresa, Queijo, Mussarela, Orégano"
            price={19.99}
          />
          <Card
            imageUrl="https://img2.gratispng.com/20180323/czq/kisspng-sicilian-pizza-pepperoni-roll-take-out-italian-cui-pizza-5ab4e6f6dc9872.2866753315218050469036.jpg"
            flavor="Pizza Pepperoni"
            ingredients="Pepperoni, Queijo, Mussarela, Orégano"
            price={24.99}
          />
          <Card
            imageUrl="https://img2.gratispng.com/20180221/huq/kisspng-california-style-pizza-sicilian-pizza-pissaladixe8-cheese-pizza-5a8d6da630b176.6109414315192180861995.jpg"
            flavor="Pizza 4 Queijos"
            ingredients="Coalho, Mussarrela, Brie, Gorgonzola, Mussarela, Orégano, Catupiry"
            price={19.99}
          />
          <Card
            imageUrl="https://receitatodahora.com.br/wp-content/uploads/2022/03/pizza-de-calabresa.jpg"
            flavor="Calabresa com Catupiry"
            ingredients="Calabresa, Queijo, Mussarela, Orégano, Catupiry"
            price={19.99}
          />
          <Card
            imageUrl="https://receitatodahora.com.br/wp-content/uploads/2022/03/pizza-de-calabresa.jpg"
            flavor="Calabresa com Catupiry"
            ingredients="Calabresa, Queijo, Mussarela, Orégano, Catupiry"
            price={19.99}
          />
          <Card
            imageUrl="https://receitatodahora.com.br/wp-content/uploads/2022/03/pizza-de-calabresa.jpg"
            flavor="Calabresa com Catupiry"
            ingredients="Calabresa, Queijo, Mussarela, Orégano, Catupiry"
            price={19.99}
          />
          <Card
            imageUrl="https://receitatodahora.com.br/wp-content/uploads/2022/03/pizza-de-calabresa.jpg"
            flavor="Calabresa com Catupiry"
            ingredients="Calabresa, Queijo, Mussarela, Orégano, Catupiry"
            price={19.99}
          />
          <Card
            imageUrl="https://receitatodahora.com.br/wp-content/uploads/2022/03/pizza-de-calabresa.jpg"
            flavor="Calabresa com Catupiry"
            ingredients="Calabresa, Queijo, Mussarela, Orégano, Catupiry"
            price={19.99}
          />
          <Card
            imageUrl="https://receitatodahora.com.br/wp-content/uploads/2022/03/pizza-de-calabresa.jpg"
            flavor="Calabresa com Catupiry"
            ingredients="Calabresa, Queijo, Mussarela, Orégano, Catupiry"
            price={19.99}
          />
          <Card
            imageUrl="https://receitatodahora.com.br/wp-content/uploads/2022/03/pizza-de-calabresa.jpg"
            flavor="Calabresa com Catupiry"
            ingredients="Calabresa, Queijo, Mussarela, Orégano, Catupiry"
            price={19.99}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} class="tabContents">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={2}
          class="tabContents"
        ></CustomTabPanel>
      </Box>
    </>
  );
}
