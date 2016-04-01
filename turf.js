var arsenal = require('./weapons');
var population = require('./fighter');

var demoFight = function () {
  var attacker = population.samHill;
  var defender = population.atlAxihuitl;
  console.log(attacker.name + " attacks first.");
  var weapon = attacker.attacks.weapons[0];
  console.log(attacker.name + " attacks with his " + weapon.name);
  var damage = 0;
  weaponKeys = Object.getOwnPropertyNames(weapon.damage);
  for (i=0; i<weaponKeys.length; i++) {
    damage += (weapon.damage[weaponKeys[i]]) *
    defender.defense[weaponKeys[i]];
  }
  damage = Math.ceil(damage);
  defender.hp -= damage;
  console.log(defender.name + " takes " + damage + " damage.");

  do {

  var dooku = attacker;
  attacker = defender;
  defender = dooku;

  weapon = attacker.attacks.weapons[0];
  console.log(attacker.name + " attacks with his " + weapon.name);
  damage = 0;
  weaponKeys = Object.getOwnPropertyNames(weapon.damage);
  for (i=0; i<weaponKeys.length; i++) {
    damage += (weapon.damage[weaponKeys[i]]) *
    defender.defense[weaponKeys[i]];
  }
  damage = Math.ceil(damage);
  defender.hp -= damage;
  console.log(defender.name + " takes " + damage + " damage.");

  } while (defender.hp > 0);

  console.log("");
  console.log(attacker.name + " HitPts: " + attacker.hp);
  console.log(defender.name + " HitPts: " + defender.hp);
};

module.exports = demoFight;
