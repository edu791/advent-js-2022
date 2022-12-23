function decorateTree(base) {
    const rules = {
      'PP': 'P',
      'BB': 'B',
      'RR': 'R',
      'BP': 'R',
      'PB': 'R',
      'RP': 'B',
      'PR': 'B',
      'BR': 'P',
      'RB': 'P',
    };
    const tree = [base.split(' ')];
    while (tree[0].length > 1) {
      const lastRow = tree[0];
      const newRow = [];
      lastRow.forEach((letter, i) => {
        if (i > 0) {
          newRow.push(rules[`${lastRow[i-1]}${lastRow[i]}`]);
        }
      });
      tree.unshift(newRow);
    }
    return tree.map(i => i.join(' '));
  }