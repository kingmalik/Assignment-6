function missingNumber(numberList) {
    let numbersSet = new Set(numberList);
    for (let index = 0; index <= numberList.length ; index++) {
      if (!numbersSet.has(index)) {
        return index;
      }
    }
  }