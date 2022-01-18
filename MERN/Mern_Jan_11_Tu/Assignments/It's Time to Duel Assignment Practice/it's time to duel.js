class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power
        } else {
            throw new Error("Target must be a redBeltNinja!");
        }
    }
    showStat() {
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    haveEffectOn(target) {
        if (target instanceof Unit) {
            if (this.stat == "resilience") {
                target.res += this.magnitude
            } else if (this.stat == "power") {
                target.power += this.magnitude
                }
            } else {
            throw new Error("Target must be a unit!");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience", "resilience", 3);
const unhandledPromiseRefection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Unhandled Promise Rejection", 3, "increase target's power by 2", "power", 2);

redBeltNinja.attack(blackBeltNinja);
console.log(blackBeltNinja);
hardAlgorithm.haveEffectOn(redBeltNinja);
console.log(redBeltNinja)
