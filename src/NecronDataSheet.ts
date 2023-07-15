import "./NecronFaction.ts";
import { weapon, UnitDataSheet } from "./GenericInformation.ts";
import { factionAbility, getRangedWeaponsList } from "./NecronFaction.ts";

const unitNotFound = new UnitDataSheet(
  "Unit Not Found",
  "unitNotFound",
  "Unknown",
  0,
  0,
  0,
  0,
  0,
  0,
  factionAbility,
  [],
  [],
  [],
  [],
  []
);

const necronWarriors = new UnitDataSheet(
  "Necron Warriors",
  "necronWarriors",
  "Necron",
  5,
  4,
  4,
  1,
  7,
  2,
  factionAbility,
  ["Their Number is Legion"],
  [],
  ["Infanctry, Battleline, Necron Warriors"],
  [new weapon("Close Combat Weapon", [], 0, 1, 4, 4, 0, 1)],
  getRangedWeaponsList(["Gauss Flayer", "Gauss Reaper"])
);
const immortals = new UnitDataSheet(
  "Immortals",
  "Immortals",
  "Necron",
  5,
  5,
  3,
  1,
  7,
  2,
  factionAbility,
  ["Implacable Eradiction"],
  [],
  ["Infanctry", "Battleline", "Immortals"],
  [new weapon("Close Combat Weapon", [], 0, 2, 3, 4, 0, 1)],
  getRangedWeaponsList(["Gauss Blaster", "Tesla Carbine"])
);

export const UnitList = [necronWarriors, immortals];

export function searchUnitList(name: string): UnitDataSheet {
  for (let i = 0; i < UnitList.length; i++) {
    if (UnitList[i].name == name) {
      return UnitList[i];
    }
  }
  return unitNotFound;
}
