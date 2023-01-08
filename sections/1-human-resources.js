function removeAgents(employees) {
  //PURE FUNCTION
  //NEW ARRAY AND NEW OBJECT ELEMENTS
  //FOR EACH WILL PUSH NEW OBJECTS TO NEW ARRAY.
  let updatedEmployeeArray = [];
  employees.forEach((employee) => {
    const newEmployee = { ...employee };
    newEmployee.profession !== "mole" && updatedEmployeeArray.push(newEmployee);
  });

  return updatedEmployeeArray;
}

function makeNameTags(guests) {
  //PURE FUNCTION
  //NEW ARRAY WITH STRING ELEMENTS
  //MAP WILL RETURN NEW ARRAY OF STRINGS.
  return guests.map((guest) => {
    return `${guest.title} ${guest.forename} ${guest.surname}, ${guest.company} `;
  });
}

function createPoll(pollData) {
  //NEW OBJECT
  let pollObject = {};

  pollData.forEach((item) => {
    //ARRAY OF NEW OBJECTS KEYS
    const pollObjectKeys = Object.keys(pollObject);
    //IF POLLOBJECT DOESNT INCLUDE THE ITEM, ADD IT WITH A VALUE OF 1
    //IF POLLOBJECT ALREADY INCLUDES THE ITEM, VALUE++
    pollObjectKeys.includes(item) ? pollObject[item]++ : (pollObject[item] = 1);
  });
  return pollObject;
}

module.exports = { removeAgents, makeNameTags, createPoll };
