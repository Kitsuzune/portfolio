import React from 'react';

const NumberFormatter = ({ number }) => {
  const formattedNumber = new Intl.NumberFormat('id-ID').format(number);
  return <span>{formattedNumber}</span>;
};

export default NumberFormatter;
