function generateMultiples(multiple) {
  //MULTIPLE IS PASSED INTO OUTER FUNCTION

  function handleMultiples(listLength) {
    //INNER FUNCTION STORES MULTIPLE IN COVE
    const coveVariable = multiple;

    //AN ARRAY TO STORE MULTIPLES
    let multipleArray = [];
    //VARIABLE IN THE LOOPS PARENT SCOPE SO IT ISNT RE-DECLARED ON EACH LOOP
    let sum = 0;

    //USE LIST LENGTH TO DETERMINE NUMBER OF MULTIPLES TO RETURN
    for (let i = 0; i < listLength; i++) {
      //ADD MULTIPLE TO SUM
      sum += coveVariable;
      //PUSH THE VALUE TO MULTIPLES ARRAY
      multipleArray.push(sum);
    }

    //RETURN THE ARRAY
    return multipleArray;
  }

  //RETURN INNER FUNCTION
  return handleMultiples;
}

//REFACTORED TO BE AS SHORT AS POSSIBLE, NOT VERY READABLE
//JUST AN EXTRA CHALLENGE.
function secureFunc(password, func) {
  function handlePassword(passwordAttempt, ...params) {
    return passwordAttempt === password
      ? func(...params)
      : "Sorry your password is incorrect!";
  }
  return handlePassword;
}

module.exports = { generateMultiples, secureFunc };
