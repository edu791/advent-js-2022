function countTime(leds) {
    let time = 0;
  
    while (leds.findIndex(led => led === 0) > -1) {
      const leds_old = [...leds];
      time = time + 7;
  
      leds.forEach((led, index) => {
        const leftLed = index > 0 ? leds_old[index - 1] : leds_old[leds.length - 1];
        if (led === 0 && leftLed === 1) {
          leds[index] = 1;
        }
      });
    }
  
    return time;
  }