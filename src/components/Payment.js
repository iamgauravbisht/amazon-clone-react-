import "./Payment.css";
import React, { useState } from "react";
import { useStateValue } from "./Context";
import CheckoutProduct from "./CheckoutProduct";
import {
  PaymentElement,
  // LinkAuthenticationElement,
  // CardElement,
  // CardNumberElement,
  // AddressElement,
  // useStripe,
  // useElements,
} from "@stripe/react-stripe-js";

export default function Payment() {
  // const stripe = useStripe();
  // const element = useElements();

  const [{ basket }] = useStateValue();
  const [address, setAddress] = useState("");
  const [b, setB] = useState(true);

  // const [error, setError] = useState(null);
  // const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {};
  // const handleChange = (e) => {};

  return (
    <div className="payment">
      <h3>Checkout ( {basket.length} item ) </h3>
      <div className="payment__container">
        <div className="payment__address">
          <label htmlFor="" name="address">
            Address:
          </label>
          {b ? (
            <input
              type="text"
              name="address"
              id=""
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          ) : (
            <span>{address}</span>
          )}
          <button onClick={() => setB((b) => !b)}>{b ? "save" : "edit"}</button>
        </div>
        <div className="payment__products">
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
        <div className="payment__section">
          <p>Pay :</p>
          <form onSubmit={handleSubmit}>
            {/* <CardElement onChange={handleChange} /> */}
            {/* <CardNumberElement /> */}
            {/* <AddressElement /> */}
            <PaymentElement />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
