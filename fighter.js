var arsenal = require('./weapons');

var Fighter = function (params) {
  this.name = params.name;
  this.hp = params.hpInit;
  this.attacks = params.attacks;
  this.defense = params.defense;
  this.accuracy = params.accuracy;
};

var population = {

  samHill: new Fighter({
    name: "Sam Hill",
    hpInit: 100,
    hp: this.hpInit,
    attacks: {weapons: [arsenal.cursedNambu]},
    defense: {
      pierce: 0.8,
      cut: 0.6,
      crush: 0.6,
      blast: 0.9,
      freeze: 1,
      burn: 1,
      corrode: 1,
      curse: 1.5,
    },
    accuracy: {
      "pistol": 0.92
    }
  }),

  atlAxihuitl: new Fighter({
    name: "Atl Axihuitl",
    hpInit: 100,
    attacks: {weapons: [arsenal.macana]},
    defense: {
      pierce: 0.9,
      cut: 1.1,
      crush: 1,
      blast: 1.25,
      freeze: 1.5,
      burn: 0.75,
      corrode: 1,
      curse: 0.5,
    },
    accuracy: {
      "heavy sword": 0.97
    }
  })
};

module.exports = population;
