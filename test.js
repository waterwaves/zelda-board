var util = require('util');
var _ = require('underscore');

var dice = require('./dice');
var AttackDice = dice.AttackDice;
var MonsterDice = dice.MonsterDice;

function DiceGroup () {
    this.attackDices = [];
    this.monsterDices = [];
    this.sides = [];
}
DiceGroup.prototype.putDices = function putDices () {
    if (! arguments.length) {
        console.error('no dices');
        return;
    }
    var dices = Array.prototype.slice.call(arguments);
    dices = _.flatten(dices);
    var instance = this;
    dices.forEach(function(dice) {
        if (dice instanceof AttackDice) {
            instance.attackDices.push(dice);
        }
        if (dice instanceof MonsterDice) {
            instance.monsterDices.push(dice);
        }
    });
    return this;
};
DiceGroup.prototype.shuffle = function shuffle () {
    var dices = this.attackDices.concat(this.monsterDices);
    var sides = dices.map(function(dice) {
        var index = parseInt(Math.random() * 10) % 6;
        return dice.sides[index];
    });
    this.sides = sides;
    return this;
};

var attackDices = [
    new AttackDice(),
    new AttackDice(),
    new AttackDice()
];

var monsterDices = [
    new MonsterDice('BOSS'),
    new MonsterDice('KEY'),
    new MonsterDice('MAP')
];

// work flow
var attackGroup = new DiceGroup();
attackGroup.putDices(attackDices).putDices(monsterDices).shuffle();
console.log(util.inspect(attackGroup.sides,true, 10));

