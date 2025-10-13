export function calculateOfferRating(rating: number, maxRating = 5): number {
  return (rating / maxRating) * 100;
}
