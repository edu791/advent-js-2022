function checkPart(part) {
    function isPalindrome(text) {
      const cleanText = text.trim().toLowerCase().replace(/\s/g, '');
      const textLength = cleanText.length;
      for (let i = 0; i <= textLength / 2; i++) {
        if (cleanText[i] !== cleanText[textLength - 1 - i]) {
          return false;
        }
      }
      return true;
    }
  
    for (let i = 0; i < part.length; i++) {
      const withoutLetter = part.substring(0, i) + part.substring(i + 1);
      if (isPalindrome(withoutLetter)) {
        return true;
      }
    }
  
    return false
  }