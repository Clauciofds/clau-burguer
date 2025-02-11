export function formatPrice(price: number): string {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'BRL'
  }
  return Intl.NumberFormat('pt-BR', options).format(price / 100);
}

export function convertToReais(cents: number): string {
  return (cents / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}