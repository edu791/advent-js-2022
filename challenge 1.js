function wrapping(gifts) {
  return gifts.map(g => `${'*'.repeat(g.length + 2)}\n*${g}*\n${'*'.repeat(g.length + 2)}`);
}
