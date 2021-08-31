import React from "react";

import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishablekey =
      'pk_test_51J6L21SGw0uFIBYMeTqhlbmhEQIRvnciivyST1fcd1QKuR3GrjyC4pEvEFTFCBB1ACUEztz9mzcap7Jeh5Te7iAi009mER2vXn';
  const onToken = (token) => {
  //  console.log(token);
  //  alert("payment successfull");
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStrip,
        token
      }
    }). then(response => {
      console.log("payment successfull");
    }).catch(error => {
      console.log('payment error: ', error);
      alert('There was an issue with your payment. Please sure you use the provided credit card ');
    })
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="crown clothing ltd."
      billingAddress
      shippingAddress
      impage="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
