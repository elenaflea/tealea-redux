import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51ITknjGQwUf6BZvIclynL8gieeslESFf00gY6LtDP5n5xl5lV9xoEgQBMBNPQzgaAz4H0BoeGNOVnTE5U9jsUjxH00qdbMlGZm";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;