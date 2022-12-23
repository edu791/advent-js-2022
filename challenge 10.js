function checkJump(heights) {
    let status = 'starting_point';
  
    for (let i = 1; i < heights.length; i++) {
      if (heights[i] > heights[i-1]) {
        if (status === 'starting_point') status = 'going_up';
        if (status === 'going_down') return false;
      } else if (heights[i] !== heights[i-1]) {
        if (status === 'starting_point') return false;
        if (status === 'going_up') status = 'going_down';
      }
    }
    return status === 'going_down';
  }