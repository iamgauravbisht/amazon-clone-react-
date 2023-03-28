import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./Context";
import { getBasketTotal } from "./Reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <p>
        Subtotal &#40; {basket.length} items &#41; :
        <strong> ${getBasketTotal(basket)}</strong>
      </p>
      <small className=".subtotal__gift">
        <input type="checkbox" name="" id="" />
        &nbsp; This order contain gift
      </small>
      <button
        onClick={() => {
          navigate("/payment");
        }}
      >
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
