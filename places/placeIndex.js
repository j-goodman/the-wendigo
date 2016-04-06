var samsBarroom = require('./sams/barroom');
var samsHallway = require('./sams/hallway');

var placeIndex = {
  'sams/barroom': samsBarroom,
  'sams/hallway': samsHallway
};

module.exports = placeIndex;
