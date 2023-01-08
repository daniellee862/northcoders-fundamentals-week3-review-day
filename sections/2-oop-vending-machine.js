class VendingMachine {
  constructor({ credit = 0 } = {}) {
    this.credit = credit;
    this.stock = {
      A: {},
      B: {},
      C: {},
    };
  }

  //ADD STOCK METHOD
  addStock(stockObject, position) {
    //check both arguments are passed
    const argumentCheck = stockObject && position ? true : false;

    //check stock is an object with name, price, and quantity keys
    const stockObjectCheck =
      argumentCheck &&
      Object.keys(stockObject).includes("name", "price", "quantity");

    //check position is a string that refers to a location within machine
    const positionStringCheck = Object.keys(this.stock).includes(position);

    //if both arguments are not passed and if they dont meet the criteria checks return 'error'
    if (argumentCheck && stockObjectCheck && positionStringCheck) {
      this.stock[position] = stockObject;
    }
    return "ERROR: Invalid stock update.";
  }

  //ADD CREDIT METHOD
  addCredit(money) {
    //check that the argument passed in is a number
    const moneyCheck = typeof money === "number";
    if (moneyCheck) {
      this.credit += money;
    }
  }

  //PURCHASE ITEM METHOD
  purchaseItem(itemRow) {
    //CHECK ITEM ROW IS A STRING AND EXISTS IN THE VENDING MACHINE
    const itemRowString = typeof itemRow === "string";
    const positionStringCheck = Object.keys(this.stock).includes(itemRow);

    if (itemRowString && positionStringCheck) {
      //CHECK WE HAVE ITEM IN STOCK
      const stockCheck = this.stock[itemRow].quantity > 0;
      //CHECK WE HAVE SUFFICIENT CREDIT
      const creditCheck = this.credit >= this.stock[itemRow].price;

      if (!creditCheck) {
        return "Insufficent credit!";
      }

      if (stockCheck && creditCheck) {
        this.credit -= this.stock[itemRow].price;
        this.stock[itemRow].quantity--;
        return this.stock[itemRow].name;
      }
    }
  }
}

module.exports = VendingMachine;
