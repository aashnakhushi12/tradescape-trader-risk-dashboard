// Format a number as US currency
export const formatCurrency = (amount) => {
  return `$${amount.toLocaleString()}`;
};

// Format percentage
export const formatPercentage = (value) => {
  return `${value}%`;
};
