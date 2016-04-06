var barroom = require('./places/sams/barroom');
var arsenal = require('./weapons.js');
var index = require('./places/placeIndex');

var player = {
  callback: null,
  place: barroom,
  content: '',
  hpInit: 100,
  hp: 100,
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
  },
  getContentWho: function(command) {
    if (command[0] === '@') {
      this.interact(command);
    }
    return this.content;
  },

  getContentWhere: function(command) {
    return this.place.description;
  },

  interact: function (command) {
    command = command.slice(1,command.length);
    if (command[0] === ' ') {
      command = command.slice(1,command.length);
    }
    var noun = this.place.getNoun(command);
    if (noun === null) {
      this.content = '?';
      return;
    }
    switch (noun.featureClass) {
      case 'Talker':
        this.content = (noun.dialogue);
        break;
      case 'Exit':
        if (index[noun.leadsto] && index[noun.leadsto].getNoun) {
          this.place = index[noun.leadsto];
        }
        this.content = '';
        break;
      }
      this.callback();
    }
};

module.exports = player;
