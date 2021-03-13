class Craft {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.type;
  }
}

module.exports = Craft;
