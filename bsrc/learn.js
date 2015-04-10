'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var square = function square(x) {
  return x * x;
};

var Character = function Character(x, y) {
  _classCallCheck(this, Character);

  this.x = x;
  this.y = y;
};

var Monster = (function (_Character) {
  function Monster(x, y, name) {
    _classCallCheck(this, Monster);

    _get(Object.getPrototypeOf(Monster.prototype), 'constructor', this).call(this, x, y);
    this.name = name;
    this.health_ = 100;
  }

  _inherits(Monster, _Character);

  _createClass(Monster, [{
    key: 'attack',
    value: function attack(character) {
      _get(Object.getPrototypeOf(Monster.prototype), 'attack', this).call(this, character);
      this.health_ += 10;
    }
  }, {
    key: 'isAlive',
    get: function () {
      return this.health_ > 0;
    }
  }, {
    key: 'health',
    get: function () {
      return this.health_;
    },
    set: function (value) {
      if (value < 0) throw new Error('Health must be non-negative.');
      this.health_ = value;
    }
  }]);

  return Monster;
})(Character);

var myMonster = new Monster(5, 1, 'arrrg');
expect(myMonster.health).to.be.eql(100);
expect(myMonster.isAlive).to.be.eql(true);
expect(myMonster.x).to.be.eql(5);
myMonster.health = 10;
expect(myMonster.health).to.be.eql(10);
expect(myMonster.name).to.be.eql('arrrg');