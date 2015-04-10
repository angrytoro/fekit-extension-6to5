import {Animal} from './Animal'

class Dog extends Animal {
	constructor(name, weight, age) {
		super(name, weight);
		this.age = age;
	}

	getAge() {
		return this.age;
	}

	setAge(age) {
		this.age = age
	}

	toString() {
		console.log('name=' + this.name, 'weight=' + this.weight, 'age=' + this.age);
	}
}