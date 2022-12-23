function createCube(size) {
    let cube = ''
    const faceASquare = '_\\';
    const faceBSquare = '/\\';
    const faceASquareOpposite = '_/';
    const faceBSquareOpposite = '\\/';
  
    // Build the upper part
    for (let i = 0; i < size; i++) {
      cube += `${' '.repeat(size-i-1)}${faceBSquare.repeat(i+1)}${faceASquare.repeat(size)}\n`;
    }
  
    // Build the lower part (mirror)
    for (let i = 0; i < size; i++) {
      cube += `${' '.repeat(size-size+i)}${faceBSquareOpposite.repeat(size-i)}${faceASquareOpposite.repeat(size)}${i < size - 1 ? '\n' : ''}`;
    }
  
    return cube;
  }