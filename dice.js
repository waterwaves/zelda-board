// before: before collecting key, map and boss
// after: after collecting key, map, and boss
var facets = {
    SWORD: {
        name: 'sword',
        before: 0,
        after: 1
    },
    SHIELD: {
        name: 'shield',
        before: 1,
        after: 0
    },
    SKULL: {
        name: 'skull',
        before: -1,
        after: -1
    },
    KEY: {
        name: 'key',
        before: 0,
        after: undefined,
        isTreasure: true
    },
    MAP: {
        name: 'map',
        before: 0,
        after: undefined,
        isTreasure: true
    },
    BOSS: {
        name: 'boss',
        before: 0,
        after: undefined,
        isTreasure: true
    },
    BLANK: {
        name: '',
        before: 0,
        after: 0,
        isTreasure: false
    }
};
function Dice () {
    this.sides = [];
};

function AttackDice () {
    Dice.call(this);
    this.sides = [facets.SWORD, facets.SWORD, facets.SWORD, facets.SHIELD, facets.SHIELD, facets.SKULL];
}

function MonsterDice (type) {
    Dice.call(this);
    this.sides = [facets.BLANK, facets.BLANK, facets.SKULL];
    switch (type) {
        case 'BOSS':
            this.sides = this.sides.concat([facets.BOSS, facets.BOSS, facets.SKULL]);
            break;
        case 'KEY':
            this.sides = this.sides.concat([facets.KEY, facets.KEY, facets.BLANK]);
            break;
        case 'MAP':
            this.sides = this.sides.concat([facets.MAP, facets.MAP, facets.MAP]);
            break;
        default:
            console.error('Unknown type for MonsterDice');

    }
}

module.exports.AttackDice = AttackDice;
module.exports.MonsterDice = MonsterDice;
