class Craft {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.type;
    this.materials = obj.materials;
  }
}

module.exports = Craft;
