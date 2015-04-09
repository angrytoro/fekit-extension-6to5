var square = (x) => {
	return x*x;
};

class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
    this.health_ = 100;
  }

  attack(character) {
    super.attack(character);
    this.health_ += 10;
  }

  get isAlive() { return this.health_ > 0; }
  get health() { return this.health_; }
  set health(value) {
    if (value < 0) throw new Error('Health must be non-negative.');
    this.health_ = value;
  }
}
var myMonster = new Monster(5,1, 'arrrg');
expect(myMonster.health).to.be.eql(100);
expect(myMonster.isAlive).to.be.eql(true);
expect(myMonster.x).to.be.eql(5);
myMonster.health = 10;
expect(myMonster.health).to.be.eql(10);
expect(myMonster.name).to.be.eql('arrrg');