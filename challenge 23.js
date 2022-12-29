function executeCommands(commands) {
  const commandList = commands.map(i => {
    const [command, params] = i.split(' ');
    return [command, ...params.split(',')];
  });

  const results = {'V00': 0, 'V01': 0, 'V02': 0, 'V03': 0, 'V04': 0, 'V05': 0, 'V06': 0, 'V07': 0};

  function convertTo8Bit(value) {
    if (value > 255) {
      return value - 256;
    } else if (value < 0) {
      return 256 + value;
    }
    return value;
  }

  function mov(valueOrReg, targetReg) {
    if (isNaN(valueOrReg)) {
      results[targetReg] = results[valueOrReg];
    } else {
      results[targetReg] = convertTo8Bit(parseInt(valueOrReg));
    }
  }

  function add(reg1, reg2) {
    results[reg1] = convertTo8Bit(results[reg1] + results[reg2]);
  }

  function dec(reg) {
    results[reg] = convertTo8Bit(results[reg] - 1);
  }

  function inc(reg) {
    results[reg] = convertTo8Bit(results[reg] + 1);
  }

  function executeCommands(fromInst = 0, toInst = commandList.length) {    
    for (let i = fromInst; i < toInst; i++) {
      const cmd = commandList[i];
      switch(cmd[0]) {
        case 'MOV': mov(cmd[1], cmd[2]); break;
        case 'ADD': add(cmd[1], cmd[2]); break;
        case 'DEC': dec(cmd[1]); break;
        case 'INC': inc(cmd[1]); break;
        case 'JMP': 
          if (results['V00'] !== 0) {
            executeCommands(cmd[1], i+1);
          }
          break;
      }
    }
  }

  executeCommands();

  return Object.keys(results).map(i => results[i]);
}