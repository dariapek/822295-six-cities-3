export function calculateOfferRating(rating: number, maxRating = 5): number {
  return (rating / maxRating) * 100;
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
