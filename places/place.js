var Place = function (params) {
  this.name = params.name;
  this.features = params.features;
  this.description = params.description;
};

Place.prototype.featureNames = function () {
  featureNames = [];
  this.features.forEach(function(feat) {
    featureNames.push(feat.name);
  });
};

Place.prototype.getNoun = function (name) {
  var returner = null;
  this.features.forEach(function(feat) {
    if (feat.name === name) {
      returner = feat;
    }
  });
  return returner;
};

// var throneRoom = new Place({
//   name: "Throne Room",
//   features: [throne, exit, visier]
// });

module.exports = Place;
