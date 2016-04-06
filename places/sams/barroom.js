var Place = require('../place.js');
var Exit = require('../exitClass.js');
var Talker = require('../talkerClass.js');

var _exit = new Exit({
  name: "exit"
});

var _stairs = new Exit({
  name: "stairs",
  leadsto: 'sams/hallway'
});

var _officers = new Talker({
  name: "officers",
  dialogue: "CAPT. AXIHUITL: You won't need to worry about whatever's going on out there for much longer. We're workinng on making contact with Fort Hueca. How about you let us get back to work? Just stay inside."
});

var _drunk = new Talker({
  name: "drunk",
  dialogue: "...no answer."
});

var _innkeeper = new Talker({
  name: "innkeeper",
  dialogue: "SAM: Hope you been keeping comfortable up in Room 2 there, mister. Don't look like any of us'll be fit to leave town any time soon, way things are going."
});

var barroom = new Place({
  description: "The barroom of Sam's Inn in Manquilla. At one end of the room, an INNKEEPER stands behind the bar. At the other is the EXIT. On the side wall there is a flight of STAIRS going up. At one table two army OFFICERS sit in conference, and at another in the corner a DRUNK is resting his head by his glass.",
  features: [_exit, _stairs, _innkeeper, _officers, _drunk]
});

module.exports = barroom;
