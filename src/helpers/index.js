const formatMoney = (money) => {
  const formatter = new Intl.NumberFormat('es-US', {
    style: 'currency',
    currency: 'USD'
  });
  return formatter.format(money)
}

const calculateTotalPayment = (quantityCredit, paymentNumber) => {
  let totalPayment;

  if( quantityCredit < 5000 ) {
    totalPayment = quantityCredit * 1.5;
  } else if( quantityCredit < 10000 ) {
    totalPayment = quantityCredit * 1.4;
  } else if( quantityCredit < 15000 ) {
    totalPayment = quantityCredit * 1.3;
  } else {
    totalPayment = quantityCredit * 1.2;
  }

  if( paymentNumber === 6 ) {
    totalPayment *= 1.1
  } else if ( paymentNumber === 12 ) {
    totalPayment *= 1.2
  } else {
    totalPayment *= 1.3
  }

  return totalPayment;
}

const calculateMonthlyPayment = (totalPayment, paymentNumber) => {
  return totalPayment / paymentNumber;
}

export { 
  formatMoney,
  calculateTotalPayment,
  calculateMonthlyPayment
};