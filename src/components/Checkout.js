import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./Context";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h2>Shoping Cart:</h2>
        <small>Shoping Cart:</small>

        <div className="checkout__col">
          {basket.map((el) => (
            <CheckoutProduct
              id={el.id}
              title={el.title}
              price={el.price}
              rating={el.rating}
              image={el.image}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
