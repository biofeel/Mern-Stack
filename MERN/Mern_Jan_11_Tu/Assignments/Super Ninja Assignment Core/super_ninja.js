class Ninja {
    constructor(name, health = 100) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Stength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        console.log(`${this.name} drank sake`);
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Mario");
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats();

class Sensei extends Ninja {
    constructor(name, wisdom=10, speed, strength) {
        super(name)
        this.health = 200
        this.wisdom = wisdom
        this.speed = speed
        this.strength = strength
    }

    speakWisdom() {
        super.drinkSake()
        console.log('What one programmer can do in one month, two programmers can do in two months')
    }
}

const sensei1 = new Sensei("Master", 200, 10, 10 );
sensei1.sayName()
sensei1.showStats()
sensei1.drinkSake()
sensei1.speakWisdom()

