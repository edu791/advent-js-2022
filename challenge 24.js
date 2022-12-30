function canExit(maze) {
  let startPoint;
  maze.forEach((item, i) => {
    const startIndex = item.indexOf('S');
    if (startIndex > -1) {
      startPoint = [i, startIndex];
    }
  });
  
  const visited = {};

  function hasExit(point) {
    const up = [point[0]-1, point[1]];
    const down = [point[0]+1, point[1]];
    const left = [point[0], point[1]-1];
    const right = [point[0], point[1]+1];
    return [up, down, left, right].some(i => {
      if (maze[i[0]] && maze[i[0]][i[1]] && !visited[`${i[0]}${i[1]}`]) {
        visited[`${i[0]}${i[1]}`] = true;
        if (maze[i[0]][i[1]] === 'E') {
          return true;
        }
        if (maze[i[0]][i[1]] === 'W') {
          return false;
        }
        if (maze[i[0]][i[1]] === ' ') {
          return hasExit(i);
        }
      } else {
        return false
      }
    });
  }

  return hasExit(startPoint);
}