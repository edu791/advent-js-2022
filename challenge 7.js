function getGiftsToRefill(a1, a2, a3) {
    const itemsToReplenish = [];
    const allItems = new Set([...a1, ...a2, ...a3]);
    a1.forEach(item => {
      if (!a2.includes(item) && !a3.includes(item)) {
        itemsToReplenish.push(item);
      }
    });
    a2.forEach(item => {
      if (!a1.includes(item) && !a3.includes(item)) {
        itemsToReplenish.push(item);
      }
    });
    a3.forEach(item => {
      if (!a1.includes(item) && !a2.includes(item)) {
        itemsToReplenish.push(item);
      }
    });
    return Array.from(new Set(itemsToReplenish));
  }