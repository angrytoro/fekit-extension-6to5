System.registerModule("es6/Animal.js", [], function() {
  "use strict";
  var __moduleName = "es6/Animal.js";
  var Animal = function Animal() {
    var name = arguments[0] !== (void 0) ? arguments[0] : 'animal';
    var weight = arguments[1] !== (void 0) ? arguments[1] : 0;
    this.name = name;
    this.weight = weight;
  };
  ($traceurRuntime.createClass)(Animal, {
    getName: function() {
      return this.name;
    },
    getWeight: function() {
      return this.weight;
    },
    setName: function(name) {
      this.name = name;
    },
    setWeight: function(weight) {
      this.weight = weight;
    },
    toString: function() {
      console.log('name=' + this.name, 'weight=' + this.weight);
    }
  }, {});
  ;
  return {get Animal() {
      return Animal;
    }};
});
