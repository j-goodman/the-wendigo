var Place = require('../place.js');
var Exit = require('../exitClass.js');
var Talker = require('../talkerClass.js');

var _stairs = new Exit({
  name: "stairs",
  leadsto: 'sams/barroom'
});

var _firstdoor = new Talker({
  name: "first door",
  dialogue: "There's no answer. It seems to be locked. You can hear a quiet scratching noise inside, like metal on wood."
});

var _thirddoor = new Talker({
  name: "third door",
  dialogue: "There's no answer. It seems to be locked."
});

var hallway = new Place({
  description: "A hallway with no windows. Light shines up from the STAIRS to the barroom below, and from the crack under the FIRST DOOR on the right. Behind the SECOND DOOR and THIRD DOOR is dark.",
  features: [_stairs, _firstdoor, _thirddoor]
});

module.exports = hallway;
