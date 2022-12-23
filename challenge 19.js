function sortToys(toys, positions) {
    const sortedPositions = [...positions].sort((a, b) => a - b);
    return sortedPositions.map(pos => toys[positions.indexOf(pos)]);
  }