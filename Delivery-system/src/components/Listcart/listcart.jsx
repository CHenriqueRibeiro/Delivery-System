// eslint-disable-next-line no-unused-vars
import * as React from "react";
import CardCart from "../CardCart/cardCart";
import "./listcart.css";

export default function Listcart() {
  const listItemsCart = [
    {
      id: 1,
      imageUrl:
        "https://img1.gratispng.com/20180202/qrq/kisspng-sicilian-pizza-italian-cuisine-pepperoni-tarte-fla-pepperoni-pizza-5a74bcc6c6e634.1018048315175999428147.jpg",
      flavor: "Pizza Mista",
      ingredients: "Calabresa, Queijo, Mussarela, Orégano",
      price: 19.99,
    },
    {
      id: 2,
      imageUrl:
        "https://img1.gratispng.com/20180202/qrq/kisspng-sicilian-pizza-italian-cuisine-pepperoni-tarte-fla-pepperoni-pizza-5a74bcc6c6e634.1018048315175999428147.jpg",
      flavor: "Pizza Calabresa",
      ingredients: "Calabresa, Queijo, Mussarela, Orégano",
      price: 19.99,
    },
    {
      id: 3,
      imageUrl:
        "https://img1.gratispng.com/20180202/qrq/kisspng-sicilian-pizza-italian-cuisine-pepperoni-tarte-fla-pepperoni-pizza-5a74bcc6c6e634.1018048315175999428147.jpg",
      flavor: "Pizza Mussarela",
      ingredients: "Calabresa, Queijo, Mussarela, Orégano",
      price: 19.99,
    },
    {
      id: 4,
      imageUrl:
        "https://img1.gratispng.com/20180202/qrq/kisspng-sicilian-pizza-italian-cuisine-pepperoni-tarte-fla-pepperoni-pizza-5a74bcc6c6e634.1018048315175999428147.jpg",
      flavor: "Pizza Mussarela",
      ingredients: "Calabresa, Queijo, Mussarela, Orégano",
      price: 19.99,
    },
  ];

  return (
    <>
      <div id="cartShoppingList">
        <div className="listCardCart">
          <div className="teste">
            {listItemsCart.map((item, index) => (
              <CardCart
                key={index}
                imageUrl={item.imageUrl}
                flavor={item.flavor}
                price={item.price}
                ingredients={item.ingredients}
              />
            ))}
          </div>
        </div>

        <div className="cartSum"  >
          <span className="sumPriceCart">Total : R$ 50,00</span>
        </div>
      </div>
      
    </>
  );
}
