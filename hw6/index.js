
  
  
  
  
  
  function lastWordLenght(sentence) {
    const wordsList = sentence.trim().split(" ");
    const lastWord = wordsList[wordsList.length - 1];
    return lastWord.length;
  }
  
  function uniqueCharacterIndex(word) {
    let wordDictionary = {};
    for (let i = 0; i < word.length; i++) {
      if (wordDictionary[word[i]]) {
        wordDictionary[word[i]] += 1;
      } else {
        wordDictionary[word[i]] = 1;
      }
    }
    for (let i = 0; i < word.length; i++) {
      if (wordDictionary[word[i]] == 1) {
        return i;
      }
    }
    return -1;
  }
  
  function missingNumber(numberList) {
    let numbersSet = new Set(numberList);
    for (let index = 0; index <= numberList.length ; index++) {
      if (!numbersSet.has(index)) {
        return index;
      }
    }
  }
  
  const isIsomorphic = (firstWord, secondWord) => {
      if (firstWord.length !== secondWord.length) {
         return false;
      };
      for (let i = 0;
      i < firstWord.length; i++) {
         const a = firstWord.indexOf(firstWord[i]);
         const b = secondWord.indexOf(secondWord[i]);
         if (secondWord[a] !== secondWord[i] || firstWord[b] !== firstWord[i]) {
            return false;
         };
      };
      return true;
   };