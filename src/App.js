import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Payment from "./components/Payment.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateValue } from "./components/Context";
import { auth } from "./components/firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  const promise = loadStripe(
    "pk_test_51Mq10iSF25SRakbSwR5cq72JJOqWm5p7JtYePa7NOe4WPe7r9t1sMk2Np47n12C3d1PIxBiZodgRCk3ICNtKr37b00OJjnUa23"
  );

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [user, basket, dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
