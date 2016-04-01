var Place = require('../place.js');
var Exit = require('../exitClass.js');
var Talker = require('../talkerClass.js');

var hallway = require('./hallway.js');

var _exit = new Exit({
  name: "exit"
});

var _stairs = new Exit({
  name: "stairs",
  leadsto: hallway
});

var _bartender = new Talker({
  name: "bartender",
  dialogue: "SAM: Hope you been keeping comfortable up in Room 2 there, mister. Don't look like any of us'll be fit to leave town any time soon, way things are going."
});

var barroom = new Place({
  description: "The barroom of Sam's Inn in Manquilla. At one end of the room, a BARTENDER stands behind the bar. At the other is the EXIT. On the side wall there is a flight of STAIRS going up.",
  features: [_exit, _bartender, _stairs]
});

module.exports = barroom;
