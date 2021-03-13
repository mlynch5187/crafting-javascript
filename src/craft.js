class Craft {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.type;
    this.materials = obj.materials;
    this.completed = false;
  }

  completeCraft() {
    this.completed = true;
    return 'All done! It looks great!'
  }

  calculateProjectTotal() {
    var x = this.materials[0].price *   this.materials[0].amount
    var y = this.materials[1].price *   this.materials[1].amount
    return x + y
  }
}

module.exports = Craft;
