System.registerModule("es6/Dog.js", [], function() {
  "use strict";
  var __moduleName = "es6/Dog.js";
  var Animal = System.get("es6/Animal").Animal;
  var Dog = function Dog(name, weight, age) {
    $traceurRuntime.superConstructor($Dog).call(this, name, weight);
    this.age = age;
  };
  var $Dog = Dog;
  ($traceurRuntime.createClass)(Dog, {
    getAge: function() {
      return this.age;
    },
    setAge: function(age) {
      this.age = age;
    },
    toString: function() {
      console.log('name=' + this.name, 'weight=' + this.weight, 'age=' + this.age);
    }
  }, {}, Animal);
  return {};
});
