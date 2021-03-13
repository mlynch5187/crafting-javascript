class Material  {
  constructor(name, price, amount, units) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.units = units;
  }

  useMaterial(amount) {
    this.amount -= amount
    return `You now have ${this.amount} yards of fabric left.`
  }
}

module.exports = Material;
