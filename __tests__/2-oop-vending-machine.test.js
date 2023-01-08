const VendingMachine = require("../sections/2-oop-vending-machine");

// ARRANGE
// ACT
// ASSERT

describe("vending machine class tests", () => {
  //TEST LIST
  //TEST FOR CREDIT PROPERTY
  //TEST STOCK PROPERTY IS OBJECT
  //TEST ADDSTOCK METHOD ADDS TO VENDING MACHINE AT CORRECT POSITION
  //TEST ADDCREDIT UPDATES CREDIT
  //TEST PURCHASE METHOD DECREASES STOCK
  //TEST PURCHASE METHOD DECREASES STOCK WITH NO CREDIT
  //TEST RETURN OF PURCHASE METHOD

  test("TEST FOR CREDIT PROPERTY", () => {
    const testMachine = new VendingMachine();
    const credit = testMachine.credit; // 0;
    expect(credit).toBe(0);
  });

  test("TEST STOCK PROPERTY IS OBJECT", () => {
    const testMachine = new VendingMachine();
    const stock = testMachine.stock;
    expect(stock).toEqual({
      A: {},
      B: {},
      C: {},
    });
    expect(typeof stock).toBe("object");
  });

  test("TEST ADDSTOCK METHOD ADDS TO VENDING MACHINE AT CORRECT POSITION", () => {
    const testMachine = new VendingMachine();
    const marsBars = { name: "marsBar", price: 50, quantity: 6 };
    testMachine.addStock(marsBars, "A");
    const stock = testMachine.stock;
    expect(stock).toEqual({
      A: { name: "marsBar", price: 50, quantity: 6 },
      B: {},
      C: {},
    });
  });

  test("TEST ADDCREDIT UPDATES CREDIT", () => {
    const testMachine = new VendingMachine();
    testMachine.credit; // 0
    testMachine.addCredit(50);
    testMachine.credit; // 50
    testMachine.addCredit(10);
    testMachine.credit; // 60;
    expect(testMachine.credit).toBe(60);
  });

  test("TEST PURCHASE METHOD DECREASES STOCK WITH NO CREDIT", () => {
    const marsBars = { name: "marsBar", price: 50, quantity: 6 };
    const testMachine = new VendingMachine();
    testMachine.addStock(marsBars, "A");
    testMachine.addCredit(30);
    expect(testMachine.purchaseItem("A")).toBe("Insufficent credit!");
  });

  test("TEST PURCHASE METHOD DECREASES STOCK", () => {
    const marsBars = { name: "marsBar", price: 50, quantity: 6 };
    const testMachine = new VendingMachine();
    testMachine.addStock(marsBars, "A");
    testMachine.addCredit(50);
    testMachine.purchaseItem("A");
    expect(testMachine.stock.A.quantity).toBe(5);
  });

  test("TEST PURCHASE RETURNS ITEM WHEN SUFFICIENT CREDIT", () => {
    const marsBars = { name: "marsBar", price: 50, quantity: 6 };
    const testMachine = new VendingMachine();
    testMachine.addStock(marsBars, "A");
    testMachine.addCredit(100);
    expect(testMachine.purchaseItem("A")).toBe("marsBar");
  });
});
