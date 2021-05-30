class CustomerDTO {
  constructor(id, name, address, salary) {
    this._id = id;
    this._name = name;
    this._address = address;
    this._salary = salary;
  }
  get getID() {
    return this._id;
  }
  get getName() {
    return this._name;
  }
  get getAddress() {
    return this._address;
  }
  get getSalary() {
    return this._salary;
  }
  set setID(newID) {
    this._id = newID;
  }
  set setName(newName) {
    this._name = newName;
  }
  set setAddress(newAddress) {
    this._address = newAddress;
  }
  set setSalary(newSalary) {
    this._salary = newSalary;
  }
}
