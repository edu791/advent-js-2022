function getCompleted(part, total) {
    function gcd(a, b) {
      return b === 0 ? a : gcd(b, a % b)
    }
  
    const partTime = part.split(':').map(i => parseInt(i));
  const totalTime = total.split(':').map(i => parseInt(i));
  
    const elapsedSeconds = (partTime[0] * 60 * 60) + (partTime[1] * 60) + partTime[2];
    const totalSeconds = (totalTime[0] * 60 * 60) + (totalTime[1] * 60) + totalTime[2];
    
    const div = gcd(elapsedSeconds, totalSeconds);
    return `${elapsedSeconds/div}/${totalSeconds/div}`;
  
  }