function distributeGifts(packOfGifts, reindeers) {
    const giftWeights = packOfGifts.map(g => g.length);
    console.log(giftWeights);
    const reindeerMaxweights = reindeers.map(r => r.length * 2);
    const totalGiftsWeight = giftWeights.reduce((sum, value) => sum + value, 0);
    const totalReindeerMaxWeight = reindeerMaxweights.reduce((sum, value) => sum + value, 0);
  
    return Math.floor(totalReindeerMaxWeight / totalGiftsWeight);
  }