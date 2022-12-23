function fixLetter(letter) {
    letter = letter.trim(); // Remove spaces at the beginning and end of the prase
    letter = letter.charAt(0).toUpperCase() + letter.slice(1); // Capitalize first letter
    letter = letter.replace(/( )+/g, ' '); // Remove multiple spaces and leave only one
    if (letter.at(-1) !== '.' && letter.at(-1) !== '?' && letter.at(-1) !== '!') {
        letter = letter + '.'; // Put a point at the end of the sentence if it does not have punctuation
    }
    letter = letter.replace(/,(?! )/g, ', '); // Leave a space after each comma
    letter = letter.replace(/\.(?! )/g, '. '); // Leave a space after each point
    letter = letter.replace(/\?(?! )/g, '? '); // Leave a space after each question mark
    letter = letter.replace(/( ,)+/g, ','); // Remove spaces before comma
    letter = letter.replace(/( \.)+/g, '.'); // Remove spaces before point
    letter = letter.replace(/( \?)+/g, '?'); // Remove spaces before question mark
    letter = letter.replace(/(\?)+/g, '?'); // Questions must only end with a question mark
    letter = letter.replace(/(\.|!|\?) [a-z]/g, match => match.toUpperCase()); // The first letter of each sentence must be capitalized
    letter = letter.replace(/[sS]anta [cC]laus/g, 'Santa Claus') // Put the word "Santa Claus" in uppercase if it appears in the letter
      letter = letter.trim(); // Remove spaces at the beginning and end of the prase
    
    return letter;
  }