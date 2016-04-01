var Exit = function (params) {
  this.featureClass = "Exit";
  this.name = params.name;
  this.leadsto = params.leadsto;
};

// var cave_entrance = new Exit({
//   name: "Cave entrance",
//   leadsto: darkCave
// });

module.exports = Exit;
