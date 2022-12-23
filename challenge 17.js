function carryGifts(gifts, maxWeight) {
    const bags = [];
    gifts.forEach((gift) => {
      let lastBag = bags[bags.length - 1];
      if (lastBag && (lastBag.replace(/ /g, '').length + gift.length) <= maxWeight) {
        bags[bags.length - 1] = lastBag.length ? lastBag + ' ' + gift : gift;
      } else {
        if (gift.length <= maxWeight) {
          bags.push(gift);
        }
      }
    });
    return bags;
  }