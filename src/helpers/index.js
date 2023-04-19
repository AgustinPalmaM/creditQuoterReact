const formatMoney = (money) => {
  const formatter = new Intl.NumberFormat('es-US', {
    style: 'currency',
    currency: 'USD'
  });
  return formatter.format(money)
}

export { 
  formatMoney 
};