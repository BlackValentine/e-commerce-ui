import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { createPaymentIntent } from 'config/axios/payment';

const stripePromise = loadStripe('pk_test_51MoLWNJLnzZDVkbTbVwRrARxJICxTephmBfQkV134iMBaA3hUbhvn2MDrEjG6ZmRToAdmvy6QYXuqwwjkeQert3s0060VH3yzL');


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`
      }
    });

    if (error) {
      setErrorMessage(error.message);
    }

    setIsProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button className='mt-6 bg-primary-light text-white w-full py-2 rounded hover:opacity-80' type="submit" disabled={isProcessing}>
          {isProcessing ? 'Processing ...' : 'Pay now'}
        </button>
        {/* Show error message to your customers */}
        {errorMessage && <div className='text-sm text-danger'>{errorMessage}</div>}
      </form>
      <button onClick={() => createPaymentIntent(1000)}>Click</button>
    </>
  );
};

interface IPaymentForm {
  total: number;
}

export default function PaymentForm({ total }: IPaymentForm) {
  const [clientSecret, setClientSecret] = useState<string>('');

  useEffect(() => {
    (async () => {
      const response = await createPaymentIntent(+total);
      setClientSecret(response?.data?.clientSecret);
    })();
  }, []);

  return (
    <>
      {clientSecret && <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm />
      </Elements>}
    </>
  );
}
