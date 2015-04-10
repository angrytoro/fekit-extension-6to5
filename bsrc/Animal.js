'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
    value: true
});

var Animal = (function () {
    function Animal() {
        var name = arguments[0] === undefined ? 'animal' : arguments[0];
        var weight = arguments[1] === undefined ? 0 : arguments[1];

        _classCallCheck(this, Animal);

        this.name = name;
        this.weight = weight;
    }

    _createClass(Animal, [{
        key: 'getName',
        value: function getName() {
            return this.name;
        }
    }, {
        key: 'getWeight',
        value: function getWeight() {
            return this.weight;
        }
    }, {
        key: 'setName',
        value: function setName(name) {
            this.name = name;
        }
    }, {
        key: 'setWeight',
        value: function setWeight(weight) {
            this.weight = weight;
        }
    }, {
        key: 'toString',
        value: function toString() {
            console.log('name=' + this.name, 'weight=' + this.weight);
        }
    }]);

    return Animal;
})();

exports.Animal = Animal;