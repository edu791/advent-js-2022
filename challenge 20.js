function howManyReindeers(reindeerTypes, gifts) {
  const reindeerTypesSorted = reindeerTypes.sort((a, b) => a.weightCapacity - b.weightCapacity);

  function assignReindeersToGift(gift) {
    let remainingWeight = gift.weight;
    const assignedReindeers = [];

    while (remainingWeight > 0) {
      for (let reindeer of reindeerTypesSorted) {
        if ((remainingWeight - reindeer.weightCapacity) >= 0) {
          remainingWeight = remainingWeight - reindeer.weightCapacity;
          const existing = assignedReindeers.find(i => i.type === reindeer.type);
          if (existing) {
            existing.num = existing.num + 1;
          } else {
            assignedReindeers.push({type: reindeer.type, num: 1});
          }
        }
      }
    }
    return assignedReindeers.reverse();
  }

  const giftsWithReindeers = gifts.map(i => {
    return {country: i.country, reindeers: assignReindeersToGift(i)};
  });
  return giftsWithReindeers;
}