class Craft {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.type;
    this.materials = obj.materials;
    this.completed = false;
  }
}

module.exports = Craft;
