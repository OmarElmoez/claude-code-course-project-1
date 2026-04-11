export function formatCurrency(amount, decimals = 2) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
}

export function formatCategory(category) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}
