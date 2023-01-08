const deepEntries = (object) => {
  let nestedArray = [];

  for (const key in object) {
    if (typeof object[key] === "object") {
      console.log("IF CHECK IS WORKING");
      let recursiveSubArray = deepEntries(object[key]);
      nestedArray.push([key, recursiveSubArray]);
    } else {
      nestedArray.push([key, object[key]]);
    }
  }

  console.log(nestedArray);
  return nestedArray;
};

const deeplyEquals = ({ paramOne, paramTwo }) => {
  //iterate over array; paramOne
  //if elements are objects; recursive function call
  //recursive call with object entries arrays passed in
  //compare both elements at same index
  //if two values are ever not equal return false, otherwise true

  const isObject = (item) => {
    return typeof item === "object" && item !== null && !Array.isArray(item)
      ? true
      : false;
  };

  // I need to rearrange the order of these conditional statements. I need to check that the params are in fact arrays before I attempt to iterate over them.
  paramOne.forEach((element, index) => {
    if (isObject(paramOne[index]) && isObject(paramTwo[index])) {
      return deeplyEquals({
        paramOne: Object.entries(paramOne[index]),
        paramTwo: Object.entries(paramTwo[index]),
      });
    }
    if (paramOne[index] !== paramTwo[index]) {
      return false;
    }
  });

  return true;
};

const flat = () => {};

module.exports = { deeplyEquals, flat, deepEntries };
