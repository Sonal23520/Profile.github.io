class ItemDTO {
  constructor(id, name, qty, price) {
    this._id = id;
    this._name = name;
    this._qty = qty;
    this._price = price;
  }
  get getID() {
    return this._id;
  }
  get getName() {
    return this._name;
  }
  get getQty() {
    return this._qty;
  }
  get getPrice() {
    return this._price;
  }
  set setID(newID) {
    this._id = newID;
  }
  set setName(newName) {
    this._name = newName;
  }
  set setQty(newQty) {
    this._qty = newQty;
  }
  set setPrice(newPrice) {
    this._price = newPrice;
  }
}
