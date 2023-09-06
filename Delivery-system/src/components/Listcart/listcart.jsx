// eslint-disable-next-line no-unused-vars
import * as React from "react";
import CardCart from "../CardCart/cardCart";
import "./listcart.css";

export default function Listcart() {
  return (
    <>
      <div id="cartShoppingList">
        <div className="listCardCart">
          <div className="teste">
            <CardCart
              imageUrl="https://img1.gratispng.com/20180202/qrq/kisspng-sicilian-pizza-italian-cuisine-pepperoni-tarte-fla-pepperoni-pizza-5a74bcc6c6e634.1018048315175999428147.jpg"
              flavor="Pizza Calabresa"
              ingredients="Calabresa, Queijo, Mussarela, Orégano"
              price={19.99}
            /> <CardCart
            imageUrl="https://img1.gratispng.com/20180202/qrq/kisspng-sicilian-pizza-italian-cuisine-pepperoni-tarte-fla-pepperoni-pizza-5a74bcc6c6e634.1018048315175999428147.jpg"
            flavor="Pizza Calabresa"
            ingredients="Calabresa, Queijo, Mussarela, Orégano"
            price={19.99}
          /> <CardCart
          imageUrl="https://img1.gratispng.com/20180202/qrq/kisspng-sicilian-pizza-italian-cuisine-pepperoni-tarte-fla-pepperoni-pizza-5a74bcc6c6e634.1018048315175999428147.jpg"
          flavor="Pizza Calabresa"
          ingredients="Calabresa, Queijo, Mussarela, Orégano"
          price={19.99}
        />
            
          </div>
        </div>
        <div className="cartSum"> Total : R$ 50,00</div>
      </div>
    </>
  );
}
