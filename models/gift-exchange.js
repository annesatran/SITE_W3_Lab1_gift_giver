function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

class GiftExchange {
  static pairs(names) {
    // if there's an odd number of names, throw an error
    if (names.length % 2 == 1) {
      throw new Error("The number of names cannot be odd");
    }
    // create new copy of the names list
    let tempNames = [... names];
    let pairings = [];

    while (tempNames.length > 0) {

      const firstIndex = getRandomIndex(tempNames.length);
      const firstName = tempNames.splice(firstIndex, 1);

      const secondIndex = getRandomIndex(tempNames.length);
      const secondName = tempNames.splice(secondIndex, 1);

      pairings.push([firstName, secondName]);
    }
  
    return pairings
  }

  static traditional(names) {

  }
}

module.exports = GiftExchange