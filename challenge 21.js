function printTable(gifts) {
    let maxGiftLength = Math.max(...gifts.map(i => i.name.length));
    let maxQuantityLength = Math.max(...gifts.map(i => i.quantity.toString().length));
    const titleGift = 'Gift';
    const titleQuantity = 'Quantity';
    maxGiftLength = Math.max(titleGift.length, maxGiftLength);
    maxQuantityLength = Math.max(titleQuantity.length, maxQuantityLength);
    let table = `++${'+'.repeat(maxGiftLength)}+++${'+'.repeat(maxQuantityLength)}++
  | ${titleGift}${' '.repeat(maxGiftLength-4)} | ${titleQuantity}${' '.repeat(maxQuantityLength-8)} |
  | ${'-'.repeat(maxGiftLength)} | ${'-'.repeat(maxQuantityLength)} |
  ${gifts.map(i => `| ${i.name}${' '.repeat(maxGiftLength-i.name.length)} | ${i.quantity}${' '.repeat(maxQuantityLength-i.quantity.toString().length)} |`).join('\n')}
  **${'*'.repeat(maxGiftLength)}***${'*'.repeat(maxQuantityLength)}**`;
    return table;
  }