// Payment.jsx
import React, { useEffect } from 'react';

const Payment = () => {
  useEffect(() => {
    window.location.href = 'https://buy.stripe.com/test_fZe009bmg43i5Ow8ww';
  }, []);

  return null;
};

export default Payment;
