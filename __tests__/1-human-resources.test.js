const {
  removeAgents,
  makeNameTags,
  createPoll,
} = require("../sections/1-human-resources");

const NCFruitBowl = require("../data/poll-data");

// ARRANGE
// ACT
// ASSERT

//TESTS FOR SECTION 1 - HUMAN-RESOURCES.JS
describe("tests for the removeAgents function", () => {
  //TEST LIST
  //EMPTY ARRAY ARG TO RETURN EMPTY ARRAY
  //INPUT ARRAY IS SAME LENGTH AS RETURN ARRAY IF NO MOLES
  //INPUT ARRAY WITH ONE MOLE RETURNS ARRAY WITH MOLE REMOVED
  //MULTI ELEMENT ARR ARG RETURNS ARR WITH MULTIPLE MOLES REMOVED
  //TEST THE RETURN VALUE IS DIFFERENT FROM THE INPUT ARG
  //TEST THE INPUT ARG IS NOT MUTATED.

  test("EMPTY ARRAY ARG TO RETURN EMPTY ARRAY", () => {
    const employees = [];
    const returnArr = removeAgents(employees);
    expect(returnArr).toEqual(employees);
  });

  test("INPUT ARRAY IS SAME LENGTH AS RETURN ARRAY IF NO MOLES", () => {
    const employees = [
      { name: "Sam", profession: "artist" },
      { name: "Mitch", profession: "software engineer" },
    ];
    const returnArr = removeAgents(employees);
    expect(returnArr.length).toBe(employees.length);
  });

  test("INPUT ARRAY WITH ONE MOLE RETURNS ARRAY WITH MOLE REMOVED", () => {
    const employees = [
      { name: "Sam", profession: "artist" },
      { name: "Mitch", profession: "mole" },
    ];
    const updatedArray = [{ name: "Sam", profession: "artist" }];
    const returnArr = removeAgents(employees);
    expect(returnArr).toEqual(updatedArray);
  });

  test("MULTI ELEMENT ARR ARG RETURNS ARR WITH MULTIPLE MOLES REMOVED", () => {
    const employees = [
      { name: "Sam", profession: "artist" },
      { name: "Mitch", profession: "mole" },
      { name: "Tracy", profession: "Boxer" },
      { name: "Gary", profession: "mole" },
      { name: "Barbera", profession: "actor" },
      { name: "Dave", profession: "mole" },
      { name: "Sandra", profession: "dancer" },
    ];
    const updatedArray = [
      { name: "Sam", profession: "artist" },
      { name: "Tracy", profession: "Boxer" },
      { name: "Barbera", profession: "actor" },
      { name: "Sandra", profession: "dancer" },
    ];
    const returnArr = removeAgents(employees);
    expect(returnArr).toEqual(updatedArray);
  });

  test("TEST THE RETURN ARRAY IS DIFFERENT FROM THE INPUT ARRAY", () => {
    const employees = [
      { name: "Sam", profession: "artist" },
      { name: "Mitch", profession: "mole" },
    ];
    const returnArr = removeAgents(employees);
    expect(employees).not.toBe(returnArr);
  });

  test("TEST THE RETURNED OBJECTS ARE DIFFERENT FROM THE INPUT OBJECTS", () => {
    const employees = [
      { name: "Sam", profession: "artist" },
      { name: "Mitch", profession: "mole" },
    ];
    const returnArr = removeAgents(employees);
    expect(employees[0]).not.toBe(returnArr[0]);
  });

  test("TEST THE INPUT ARRAY IS NOT MUTATED.", () => {
    const employees = [
      { name: "Sam", profession: "artist" },
      { name: "Mitch", profession: "mole" },
    ];
    removeAgents(employees);
    expect(employees).toEqual([
      { name: "Sam", profession: "artist" },
      { name: "Mitch", profession: "mole" },
    ]);
  });
});

/* GOING TO WRITE LESS TESTS FOR THE REST OF THE FUNCITONS BECAUSE IM SPENDING TOO MUCH TIME TESTING FOR THE MOST BASIC OF THINGS AND I FEEL LIKE IVE REACHED A POINT OF DIMINISHING RETURNS WHEN IT COMES TO LEARNING AND TESTING. ID RATHER GET THROUGH ALL THE SECTIONS THAN WRITE TESTS FOR A FUNCTION THAT RETURNS AN EMPTY ARRAY WHEN PASSED AN EMPTY ARRAY. IT MAY BE BENEFICIAL TO LEARN TO WRITE DIFFERENT TESTS*/

describe("tests for the makeNameTags function", () => {
  //TEST LIST
  //RETURN ARRAY CONTAINS STRINGS
  //STRING CONTAINS ALL RELEVANT VALUES; `${title} ${forname}` etc
  //TEST THE RETURN ARRAY IS DIFFERENT FROM THE INPUT ARRAY
  //TEST THE INPUT ARRAY IS NOT MUTATED.
  test("EMPTY ARRAY ARG TO RETURN EMPTY ARRAY", () => {
    const guests = [];
    const result = makeNameTags(guests);
    expect(result).toEqual(guests);
  });

  test("RETURN ARRAY CONTAINS STRINGS", () => {
    const guests = [
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
      },
    ];
    const result = makeNameTags(guests);
    expect(typeof result[0]).toBe("string");
  });

  test("STRING CONTAINS ALL RELEVANT VALUES; `${title} ${forname}` etc", () => {
    const guests = [
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
      },
    ];
    const result = makeNameTags(guests);
    expect(result[0]).toBe(
      `${guests[0].title} ${guests[0].forename} ${guests[0].surname}, ${guests[0].company} `
    );
  });

  test("TEST THE RETURN ARRAY IS DIFFERENT FROM THE INPUT ARRAY", () => {
    const guests = [
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
      },
      {
        title: "Mr",
        forename: "Kermit",
        surname: "The Frog",
        age: 35,
        company: "Jim Henson Studios",
      },
    ];
    const result = makeNameTags(guests);
    expect(guests).not.toBe(result);
  });

  test("TEST INPUT ARRAY NOT MUTATED", () => {
    const guests = [
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
      },
      {
        title: "Mr",
        forename: "Kermit",
        surname: "The Frog",
        age: 35,
        company: "Jim Henson Studios",
      },
    ];
    makeNameTags(guests);
    expect(guests).toEqual([
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
      },
      {
        title: "Mr",
        forename: "Kermit",
        surname: "The Frog",
        age: 35,
        company: "Jim Henson Studios",
      },
    ]);
  });

  describe("tests for the removeAgents function", () => {
    //TEST LIST
    //RETURNS AN OBJECT
    //SUM OF ALL NUMBERS VALUES = INPUT ARRAY LENGTH
    //TEST THE INPUT ARR IS NOT MUTATED.
    test("RETURNS AN OBJECT", () => {
      const pollData = ["cake", "biscuit", "biscuit"];
      //   const pollObject = { cake: 1, biscuit: 2 }
      const pollObject = createPoll(pollData);
      expect(Array.isArray(pollObject)).toBe(false);
      expect(typeof pollObject).toBe("object");
    });

    test("SUM OF ALL NUMBERS VALUES = INPUT ARRAY LENGTH", () => {
      const pollData = ["cake", "biscuit", "biscuit", "biscuit"];
      const pollObject = createPoll(pollData);
      const valueArray = Object.values(pollObject);
      let sum = 0;
      valueArray.forEach((num) => (sum += num));

      expect(sum).toBe(pollData.length);
    });

    test("INPUT ARRAY NOT MUTATED", () => {
      const pollData = ["cake", "biscuit", "biscuit", "biscuit"];
      createPoll(pollData);
      expect(pollData).toEqual(["cake", "biscuit", "biscuit", "biscuit"]);
    });

    test("ULTIMATE TEST IS ULTIMATE", () => {
      const pollData = NCFruitBowl;
      const pollObject = createPoll(pollData);
      expect(pollObject).toEqual({
        apple: 276,
        pear: 223,
        banana: 263,
        orange: 238,
        "lonesome plum": 1,
      });
    });
  });
});
