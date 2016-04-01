var Talker = function (params) {
  this.featureClass = "Talker";
  this.name = params.name;
  this.dialogue = params.dialogue;
};

// Talker.prototype.menace = function () {
//   console.log("Now I will menace you, dragonkiller!");
// };
//
// var axihuitl = new Talker({
//   name: "Axihuitl",
//   dialogue: "Welcome to New Tenochtitlan, dragonkiller!"
// });

module.exports = Talker;
