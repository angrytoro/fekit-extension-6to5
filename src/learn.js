System.registerModule("es6/learn.js", [], function() {
  "use strict";
  var __moduleName = "es6/learn.js";
  var square = (function(x) {
    return x * x;
  });
  var Character = function Character(x, y) {
    this.x = x;
    this.y = y;
  };
  ($traceurRuntime.createClass)(Character, {}, {});
  var Monster = function Monster(x, y, name) {
    $traceurRuntime.superConstructor($Monster).call(this, x, y);
    this.name = name;
    this.health_ = 100;
  };
  var $Monster = Monster;
  ($traceurRuntime.createClass)(Monster, {
    attack: function(character) {
      $traceurRuntime.superGet(this, $Monster.prototype, "attack").call(this, character);
      this.health_ += 10;
    },
    get isAlive() {
      return this.health_ > 0;
    },
    get health() {
      return this.health_;
    },
    set health(value) {
      if (value < 0)
        throw new Error('Health must be non-negative.');
      this.health_ = value;
    }
  }, {}, Character);
  var myMonster = new Monster(5, 1, 'arrrg');
  expect(myMonster.health).to.be.eql(100);
  expect(myMonster.isAlive).to.be.eql(true);
  expect(myMonster.x).to.be.eql(5);
  myMonster.health = 10;
  expect(myMonster.health).to.be.eql(10);
  expect(myMonster.name).to.be.eql('arrrg');
  return {};
});
