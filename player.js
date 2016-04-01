var barroom = require('./places/sams/barroom');

var player = {
  place: barroom,
  content: '',
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
        this.place = (noun.leadsto);
        this.content = '';
        break;
      }
    }
};

module.exports = player;
