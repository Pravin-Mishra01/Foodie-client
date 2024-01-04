import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK);

const Payment = () => {
  const [cart] = useCart();
  // console.log(cart);

  // calculate the prices
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const totalPrice = cartTotal;

  return (
    <div className="max-w-screen-2x1 container mx-auto xl:px-24 px-4 py-28">
      {" "}
      <Elements stripe={stripePromise}>
        <CheckoutForm price={totalPrice} cart={cart} />
      </Elements>
    </div>
  );
};

export default Payment;
