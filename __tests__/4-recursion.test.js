const { deeplyEquals, flat, deepEntries } = require("../sections/4-recursion");

describe("tests for deeply equals", () => {
  //TEST LIST
  //EMPTY OBJECT ARGUMENT RETURNS EMPTY ARRAY
  //TEST SUBARRAY CONTAINS SAME KEY/VALUE PAIRS AS OBJECT
  //TEST SUBARRAY CONTAINS SAME KEY/VALUE PAIRS AS NEST OBJECT
  //TEST SUBARRAY CONTAINS SAME KEY/VALUE PAIRS AS SUPER MEGA NESTED OBJECT
  //TEST RETURN VALUE IS DIFFERENT FROM INPUT ARGUMENT
  //TEST INPUT ARGUMENT IS NOT MUTATED
  test("EMPTY OBJECT ARGUMENT RETURNS EMPTY ARRAY", () => {
    expect(deepEntries({})).toEqual([]);
  });

  test("TEST SUBARRAY CONTAINS SAME KEY/VALUE PAIRS AS OBJECT", () => {
    const inputObject = { name: "Sam", favBook: "Blood Meridian" };
    const returnArray = deepEntries(inputObject);
    expect(returnArray).toEqual([
      ["name", "Sam"],
      ["favBook", "Blood Meridian"],
    ]);
  });

  test("TEST SUBARRAY CONTAINS SAME KEY/VALUE PAIRS AS NESTED OBJECT", () => {
    const inputObject = { name: "Sam", pets: { name: "fido" } };
    const returnArray = deepEntries(inputObject);
    expect(returnArray).toEqual([
      ["name", "Sam"],
      ["pets", [["name", "fido"]]],
    ]);
  });

  test("TEST SUBARRAY CONTAINS SAME KEY/VALUE PAIRS AS SUPER MEGA NESTED OBJECT", () => {
    const inputObject = {
      name: "Sam",
      pets: {
        name: "fido",
        hobbies: {
          favHobby: "barking",
          secFavHobby: "digging",
        },
      },
    };
    const returnArray = deepEntries(inputObject);
    expect(returnArray).toEqual([
      ["name", "Sam"],
      [
        "pets",
        [
          ["name", "fido"],
          [
            "hobbies",
            [
              ["favHobby", "barking"],
              ["secFavHobby", "digging"],
            ],
          ],
        ],
      ],
    ]);
  });

  test(" TEST RETURN VALUE IS DIFFERENT FROM INPUT ARGUMENT", () => {
    const inputObject = { name: "Sam", favBook: "Blood Meridian" };
    const returnArray = deepEntries(inputObject);
    expect(returnArray).not.toBe(inputObject);
  });

  test("TEST INPUT ARGUMENT IS NOT MUTATED", () => {
    const inputObject = { name: "Sam", favBook: "Blood Meridian" };
    deepEntries(inputObject);
    expect(inputObject).toEqual({ name: "Sam", favBook: "Blood Meridian" });
  });
});

describe.only("tests for deeply equals", () => {
  //TEST LIST
  //TWO VARIABLES WITH ONE LETTER STRING VALUES, POSITIVE AND NEGATIVE TESTS
  //TEST TWO NESTED ARRAYS WITH OBJECT ELEMENTS
  //TEST TWO NESTED OBJECTS WITH ARRAY VALUES.
  test("TWO VARIABLES WITH ONE LETTER STRING VALUES - POSITIVE", () => {
    const variableOne = "a";
    const variableTwo = "a";
    expect(deeplyEquals({ paramOne: variableOne, paramTwo: variableTwo })).toBe(
      true
    );
  });
  test("TWO VARIABLES WITH ONE LETTER STRING VALUES -NEGATIVE", () => {
    const variableOne = "a";
    const variableTwo = "b";
    expect(deeplyEquals({ paramOne: "a", paramTwo: "b" })).toBe(false);
  });

  test("TEST TWO NESTED ARRAYS WITH OBJECT ELEMENTS", () => {
    const variableOne = [1, 2, { a: "hello" }];
    const variableTwo = [1, 2, { a: "hello" }];
    expect(deeplyEquals({ paramOne: variableOne, paramTwo: variableTwo })).toBe(
      true
    );
  });
});
