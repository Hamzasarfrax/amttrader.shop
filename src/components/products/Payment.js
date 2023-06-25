import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement
      });

      if (error) {
        setError(error.message);
      } else {
        console.log('Payment Method: ', paymentMethod);
        setPaymentSuccess(true);
        // You can now send the paymentMethod.id to your server to charge the payment
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Credit Card Payment</h2>
      <div className="form-group">
        <label htmlFor="card-element">
      <input type="text" />
        </label>
        <CardElement id="card-element" />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {paymentSuccess && <p style={{ color: 'green' }}>Payment Successful</p>}
      <button type="submit">
        Pay
      </button>
    </form>
  );
};

const Payment = () => {
  const stripePromise = loadStripe('sk_test_51Mb1FRHVqtAfAgzXS7FCQmL4pKYNIJ0wloXGaoDgSr4TJagVaSTe9yPkK5PQm9qAu7S6xFVi4Dys0i61uNnFLqBr00bPHkNMrx');

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
