function dryNumber(dry, numbers) {
    return [...Array(numbers).keys()].map(i => (i + 1).toString()).filter(i => i.includes(dry)).map(i => parseInt(i));
  }