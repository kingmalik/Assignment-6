function reverseString(characterList) {
    let end = characterList.length - 1;
    let start = 0;
    while (start < end) {
      let temp = characterList[start];
      characterList[start] = characterList[end];
      characterList[end] = temp;
      start++;
      end--;
    }
    return characterList;
  }