import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
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
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
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
    <Tabs id="as"
    value={value}
    onChange={handleChange}
    variant="scrollable"
    scrollButtons
    allowScrollButtonsMobile
    aria-label="scrollable force tabs example"
  >
    <Tab label="Promoções" className="teste"/>
    <Tab label="Pizza" className="teste"/>
    <Tab label="Hamburguer" className="teste"/>
    <Tab label="Pão Arabe" className="teste"/>
    <Tab label="Pao Bola" className="teste"/>
    <Tab label="Bebida" className="teste"/>
   
  </Tabs>
    <Box id="ok">
     
     
    
      <CustomTabPanel value={value} index={0}>
      <div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div>oi</div>
        <div>ola</div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three<div>oi</div>
        <div>ola</div>
      </CustomTabPanel>
    </Box>
    </>
  );
}

