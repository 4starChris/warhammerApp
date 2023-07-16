import {
  weapon,
  weaponKeywords,
  IfactionAbility,
  getItemListFromMapUsingStringList,
  ability,
} from "./GenericInformation";

export const factionAbility: IfactionAbility = {
  name: "Reanimation Protocols",
  text: "If your Army Faction is Necrons, at the end of your Command phase, each unit from your army with this ability activates its Reanimation Protocols and reanimates D3 wounds. Each time such a unit reanimates a wound: ■ If that unit contains one or more models with fewer than their starting number of wounds remaining, select one of those models; that model regains one lost wound. ■ If all models in that unit have their starting number of wounds, but that unit is not at its Starting Strength, one destroyed model is returned to that unit with one wound remaining. Once such a unit is at its Starting Strength and all of its models have their starting number of wounds, nothing further happens.",
};

const gaussFlayer = new weapon(
  "Gauss Flayer",
  ["Lethal Hits", "Rapid Fire 1"],
  24,
  1,
  4,
  4,
  0,
  1
);

const gaussReaper = new weapon(
  "Gauss Reaper",
  ["Lethal Hits"],
  12,
  2,
  4,
  5,
  1,
  1
);

const gaussBlaster = new weapon(
  "Gauss Blaster",
  ["Lethal Hits"],
  24,
  2,
  3,
  5,
  1,
  1
);

const teslaCarbine = new weapon(
  "Tesla Carbine",
  ["Assault", "Sustained Hits 2"],
  18,
  2,
  3,
  5,
  0,
  1
);

const rangedWeaponsMap = new Map<string, weapon>([
  ["Gauss Flayer", gaussFlayer],
  ["Gauss Reaper", gaussReaper],
  ["Gauss Blaster", gaussBlaster],
  ["Tesla Carbine", teslaCarbine],
]);

export function getRangedWeaponsList(ListOfWeaponNames: string[]) {
  // return getItemListFromMapUsingStringList(ListOfWeaponNames, rangedWeaponsMap);
  return ListOfWeaponNames.map(e => rangedWeaponsMap.get(e) as weapon)
}

let meleeWeaponsMap = new Map<string, weapon>();

const abilityMap = new Map<string, string>([
  [
    "Their Number is Legion",
    "Each time this unit’s Reanimation Protocols activate, it reanimates D6 wounds instead of D3 wounds, unless it is within range of an objective marker you control, in which case it reanimates D3+3 wounds instead.",
  ],
  [
    "Implacable Eradiction",
    "Each time a model in this unit makes an attack, re-roll a Wound roll of 1. If the target of that attack is an enemy unit within range of an objective marker, you can re-roll the Wound roll instead.",
  ],
]);

export function getAbility(abilityName: string) {
  return abilityMap.get(abilityName);
}
