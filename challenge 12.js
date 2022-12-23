function selectSleigh(distance, sleighs) {
    const filteredSleighs = sleighs.filter(s => s.consumption * distance <= 20);
    return filteredSleighs.length ?
      filteredSleighs[filteredSleighs.length - 1].name :
      null;
  }