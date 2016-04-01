var arsenal = {
  cursedNambu: {
    name: "Cursed Nambu",
    description: "A 8mm caliber Nambu pistol salvaged from a frozen shipwreck in the Bering Strait.",
    damage: {pierce: 6, curse: 6, crush: 1},
    accuracyClass: "pistol",
    backfire: 0,
    ammoType: "bullets",
    ammoMax: 32,
    ammo: 6
  },

  colt45: {
    name: "Colt .45",
    description: "A 10mm caliber Colt pisol.",
    damage: {pierce: 10, crush: 2},
    accuracyClass: "pistol",
    backfire: 0,
    ammoType: "bullets",
    ammoMax: 32,
    ammo: 6
  },

  macana: {
    name: "Macana",
    description: "18 razor-sharp obsidian blades embedded in a cedar club.",
    damage: {cut: 11, crush: 7},
    accuracyClass: "heavy sword",
    backfire: 0,
    ammoType: "",
    ammoMax: 0,
    ammo: 0
  },

  dynamite: {
    name: "Dynamite",
    description: "Sticks of 100% T.N.T. Good for hurling.",
    damage: {blast: 18, crush: 8, burn: 9},
    accuracyClass: "grenade",
    backfire: 0.15,
    ammoType: "sticks",
    ammoMax: 12,
    ammo: 2
  }
};

module.exports = arsenal;
