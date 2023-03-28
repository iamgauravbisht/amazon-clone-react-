import React from "react";
import { useStateValue } from "./Context";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [, dispatch] = useStateValue();

  const removefrombasket = () => {
    //dispatch action to remove from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout__product">
      <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <p>
          <small>$</small>
          <strong> {price} </strong>
        </p>
        <p className="product__rating">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </p>
        <button onClick={removefrombasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
