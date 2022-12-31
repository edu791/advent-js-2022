function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const cities = giftsCities.filter(i => i < maxGifts).sort((a, b) => b - a).slice(0, maxCities);
  let giftSum = 0;

  for(let i = 0; i < cities.length; i++) {
    giftSum = giftSum + cities[i];
    if (giftSum > maxGifts) return maxGifts;
  }
  return giftSum;
}