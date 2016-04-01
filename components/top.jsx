var React = require('react');
var ReactDOM = require('react-dom');
var population = require('../fighter.js');
var arsenal = require('../weapons.js');

var player = population.samHill;

var stringifyHP = function (hp) {
  var healthBar = "";
  for (var i = 0; i < player.hp/4; i++) {
    healthBar += "▓";
  }
  if ((healthBar.length)*4 - hp === 1 ||
      (healthBar.length)*4 - hp === 2 ) {
    healthBar = healthBar.slice(0,healthBar.length-1);
    healthBar += "▒";
  } else if ((healthBar.length)*4 - hp === 3) {
    healthBar = healthBar.slice(0,healthBar.length-1);
    healthBar += "░";
  }
  return healthBar;
};

var healthBar = stringifyHP(player.hp);

var stringifyAmmo = function (ammo) {
  var ammoBar = "";
  for (var i = 0; i < ammo; i++) {
    ammoBar += "⌻ ";
  }
  if (ammo > 12) {
    ammoBar = "×" + ammo;
  }
  return ammoBar;
};

var ammoBar = stringifyAmmo(player.attacks.weapons[0].ammo);

var Top = React.createClass({
  render: function () {
    return <div className="top group">
      <div className='health'>
        {healthBar}
      </div>
      <div className='ammo'>
        {player.attacks.weapons[0].name}
        <br />
        {ammoBar}
      </div>
    </div>;
  }
});

module.exports = Top;
