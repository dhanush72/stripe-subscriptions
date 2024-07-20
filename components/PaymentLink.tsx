'use client';

import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';

type Props = {
  href: string;
  paymentLink?: string;
  text: string;
};

const PaymentLink = ({ href, paymentLink, text }: Props) => {
  return (
    <Link
      href={href}
      className={buttonVariants()}
      onClick={() => {
        if (paymentLink) {
          localStorage.setItem('stripePaymentLink', paymentLink);
        }
      }}
    >
      {text}
    </Link>
  );
};

export default PaymentLink;
