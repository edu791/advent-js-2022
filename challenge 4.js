function fitsInOneBox(boxes) {
    let everythingFits = true;
    const orderedBoxes = boxes.sort((a, b) => a.l - b.l);
    orderedBoxes.forEach((box, i) => {
      if (i !== orderedBoxes.length - 1) {
        const comparedBox = orderedBoxes[i + 1];
        if (!(box.l < comparedBox.l && box.w < comparedBox.w && box.h < comparedBox.h)) {
          everythingFits = false;
        }
      }
    });
  
    return everythingFits;
  }