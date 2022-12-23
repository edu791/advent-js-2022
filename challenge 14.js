function getOptimalPath(path) {
    function shortest(nodeIndex, rowIndex) {
        const nodeValue = path[rowIndex][nodeIndex];
        if (rowIndex === path.length - 1) return nodeValue; // last row (bottom)

        const nextRowIndex = rowIndex + 1;
        return nodeValue + 
            Math.min(
                shortest(nodeIndex, nextRowIndex),
                shortest(nodeIndex+1, nextRowIndex)
            );
        
    }
    return shortest(0, 0);
}