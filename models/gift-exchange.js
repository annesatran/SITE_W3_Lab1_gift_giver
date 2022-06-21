const { BadRequestError } = require("../utils/errors")

class GiftExchange {

  // HELPER FUNCTIONS
  static getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
  }
  
  static  randomizeArray(array) {
    let currentIndex = array.length, randomIndex;

    // while there are still items left to shuffle,
    while (currentIndex != 0) {
  
      // get a random name
      randomIndex = getRandomIndex(currentIndex);
      currentIndex -= 1;
  
      // swap the random name with the current name
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  

  // STATIC METHODS FOR LAB

  static pairs(names) {
    // if there's an odd number of names, throw an error
    if (names.length % 2 == 1) {
      throw new BadRequestError("The number of names cannot be odd");
    }
    // create new copy of the names list
    let tempNames = [... names];
    let pairings = [];

    while (tempNames.length > 0) {

      const firstIndex = getRandomIndex(tempNames.length);
      const firstName = tempNames.splice(firstIndex, 1)[0];

      const secondIndex = getRandomIndex(tempNames.length);
      const secondName = tempNames.splice(secondIndex, 1)[0];

      pairings.push([firstName, secondName]);
    }
  
    return pairings
  }

  static traditional(names) {
    let tempNames = [... names];
    let pairings = [];
    
    // randomize order of the array
    tempNames = randomizeArray(tempNames)

    // chain together names
    for (let i = 0; i < tempNames.length; i++) {
      
      // get name at current index
      const firstName = tempNames[i];

      // if firstName is not the last one, set secondName as the one right after it, else set it to the very first name
      const secondName = (!(i === tempNames.length - 1)) ? tempNames[i + 1] : tempNames[0];
      
      pairings.push(`${firstName} is giving a gift to ${secondName}`)
    }

    return pairs
  }
}

export default GiftExchange