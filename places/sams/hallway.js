var Place = require('../place.js');
var Exit = require('../exitClass.js');

var barroom = require('./barroom.js');

var _stairs = new Exit({
  name: "stairs",
  leadsto: barroom
});

var barroom = new Place({
  description: "A hallway with no windows. Light shines up from the STAIRS to the barroom below, and from the crack under the FIRST DOOR on the right. Behind the SECOND DOOR is dark.",
  features: [_stairs]
});

module.exports = barroom;
