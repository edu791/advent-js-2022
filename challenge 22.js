function checkStepNumbers(systemNames, stepNumbers) {
    const dict = {};
    for (let i = 0; i < systemNames.length; i++) {
      const found = dict[systemNames[i]];
      if (found) {
        if ((stepNumbers[i] - found[found.length - 1]) < 0) {
          return false;
        }
        found.push(stepNumbers[i]);
      } else {
        dict[systemNames[i]] = [stepNumbers[i]];
      }
    }
    return true      
  }