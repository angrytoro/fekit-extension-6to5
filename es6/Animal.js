class Animal {
    constructor(name = 'animal', weight = 0) {
        this.name = name;
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    toString() {
        console.log('name=' + this.name, 'weight=' + this.weight);
    }
}

export {Animal}