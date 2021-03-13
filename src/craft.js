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
}

module.exports = Craft;
