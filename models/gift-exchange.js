const { BadRequestError } = require("../utils/errors")

class GiftExchange {

  static pairs(names) {
    // error handling
    if (!(names) || names.length === 0) {
      throw new BadRequestError("Must enter names")
    }
    else if (names.length % 2 === 1) {
      throw new BadRequestError("The number of names cannot be odd");
    }
    // create new copy of the names list
    let tempNames = [... names];
    let pairings = [];

    while (tempNames.length > 0) {

      const firstIndex = Math.floor(Math.random() * tempNames.length)
      const firstName = tempNames.splice(firstIndex, 1)[0];

      const secondIndex = Math.floor(Math.random() * tempNames.length)
      const secondName = tempNames.splice(secondIndex, 1)[0];

      pairings.push([firstName, secondName]);
    }
  
    return pairings
  }

  static traditional(names) {
    // error handling
    if (!(names) || names.length === 0) {
      throw new BadRequestError("Must enter names")}

    let tempNames = [... names];
    let pairings = [];
    
    // randomize order of the array
    tempNames.sort(() => Math.random() - 0.5);

    // chain together names
    for (let i = 0; i < tempNames.length; i++) {
      // get name at current index
      const firstName = tempNames[i];
      // if firstName is not the last one, set secondName as the one right after it, else set it to the very first name
      const secondName = (!(i === tempNames.length - 1)) ? tempNames[i + 1] : tempNames[0];
      
      pairings.push(`${firstName} is giving a gift to ${secondName}`)
    }

    return pairings
  }
}

module.exports = GiftExchange