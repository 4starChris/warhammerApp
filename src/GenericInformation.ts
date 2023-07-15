export class weapon {
  constructor(
    public name: string,
    public keywordsList: string[],
    public range: number,
    public attacks: number,
    public ballisticSkill: number,
    public strength: number,
    public armorPiercing: number,
    public damage: number
  ) {}
}

export class UnitDataSheet {
  constructor(
    public name: string,
    public key: string,
    public faction: string,
    public moveSpeed: number,
    public toughness: number,
    public save: number,
    public wounds: number,
    public leadership: number,
    public objectiveControl: number,
    public FactionAbility: IfactionAbility,
    public abilityList: string[],
    public coreAbilityList: string[],
    public keywordList: string[],
    public meleeWeaponList: weapon[],
    public rangedWeaponList: weapon[]
  ) {}
}

export class weaponKeywords {
  constructor(public keyword: string, public text: string) {}
}

export interface IfactionAbility {
  name: string;
  text: string;
}

export class ability {
  constructor(public name: string, public text: string) {}
}

let weaponKeyWordsMap = new Map<string, string>([
  [
    "Assault",
    "Weapons with [ASSAULT] in their profile are known as Assault weapons. If a unit that Advanced this turn contains any models equipped with Assault weapons, it is still eligible to shoot in this turn’s Shooting phase. When such a unit is selected to shoot, you can only resolve attacks using Assault weapons its models are equipped with.",
  ],
  [
    "Rapid Fire",
    "Weapons with [RAPID FIRE X] in their profile are known as Rapid Fire weapons. Each time such a weapon targets a unit within half that weapon’s range, the Attacks characteristic of that weapon is increased by the amount denoted by ‘x’.",
  ],
  [
    "Ignores Cover",
    "Weapons with [IGNORES COVER] in their profile are known as Ignores Cover weapons. Each time an attack is made with such a weapon, the target cannot have the Benefit of Cover against that attack.",
  ],
  [
    "Twin Linked",
    "Weapons with [TWIN-LINKED] in their profile are known as Twin-linked weapons. Each time an attack is made with such a weapon, you can re-roll that attack’s Wound roll.",
  ],
  [
    "Pistol",
    "Weapons with [PISTOL] in their profile are known as Pistols. If a unit contains any models equipped with Pistols, that unit is eligible to shoot in its controlling player’s Shooting phase even while it is within Engagement Range of one or more enemy units. When such a unit is selected to shoot, it can only resolve attacks using its Pistols and can only target one of the enemy units it is within Engagement Range of. In such circumstances, a Pistol can target an enemy unit even if other friendly units are within Engagement Range of the same enemy unit. If a model is equipped with one or more Pistols, unless it is a Monster or Vehicle model, it can either shoot with its Pistols or with all of its other ranged weapons. Declare whether such a model will shoot with its Pistols or its other ranged weapons before selecting targets.",
  ],
  [
    "Torrent",
    "Weapons with [TORRENT] in their profile are known as Torrent weapons. Each time an attack is made with such a weapon, that attack automatically hits the target.",
  ],
  [
    "Lethal Hits",
    "Weapons with [LETHAL HITS] in their profile are known as Lethal Hits weapons. Each time an attack is made with such a weapon, a Critical Hit automatically wounds the target.",
  ],
  [
    "Lance",
    "Weapons with [LANCE] in their profile are known as Lance weapons. Each time an attack is made with such a weapon, if the bearer made a Charge move this turn, add 1 to that attack’s Wound roll.",
  ],
  [
    "Indirect Fire",
    "Weapons with [INDIRECT FIRE] in their profile are known as Indirect Fire weapons, and attacks can be made with them even if the target is not visible to the attacking model. These attacks can destroy enemy models in a target unit even though none may have been visible to the attacking unit when you selected that target. If no models in a target unit are visible to the attacking unit when you select that target, then each time a model in the attacking unit makes an attack against that target using an Indirect Fire weapon, subtract 1 from that attack’s Hit roll and the target has the Benefit of Cover against that attack.",
  ],
  [
    "Precision",
    "Weapons with [PRECISION] in their profile are known as Precision weapons. Each time an attack made with such a weapon successfully wounds an Attached unit, if a Character model in that unit is visible to the attacking model, the attacking model’s player can choose to have that attack allocated to that Character model instead of following the normal attack sequence.",
  ],
  [
    "Blast",
    "Weapons with [BLAST] in their profile are known as Blast weapons, and they make a random number of attacks. Each time you determine how many attacks are made with a Blast weapon, add 1 to the result for every five models that were in the target unit when you selected it as the target (rounding down). Blast weapons can never be used to make attacks against a unit that is within Engagement Range of one or more units from the attacking model’s army (including its own unit).",
  ],
  [
    "Melta",
    "Weapons with [MELTA X] in their profile are known as Melta weapons. Each time an attack made with such a weapon targets a unit within half that weapon’s range, that attack’s Damage characteristic is increased by the amount denoted by ‘x’.",
  ],
  [
    "Heavy",
    "Weapons with [HEAVY] in their profile are known as Heavy weapons. Each time an attack is made with such a weapon, if the attacking model’s unit Remained Stationary this turn, add 1 to that attack’s Hit roll.",
  ],
  [
    "Hazardous",
    "Weapons with [HAZARDOUS] in their profile are known as Hazardous weapons. Each time a unit is selected to shoot or fight, if one or more models attack with Hazardous weapons, then after that unit has resolved all of its attacks, you must take one Hazardous test for each Hazardous weapon that was just used by rolling one D6. For each roll of 1, that test is failed and one model in that unit equipped with a Hazardous weapon is destroyed (selected by the controlling player), unless that model is a Character, Monster or Vehicle, in which case it suffers 3 mortal wounds instead. Note that if you selected a Character model in an Attached unit, the mortal wounds suffered must be allocated to that model first, even if there is another model in that unit that has lost one or more wounds or has had attacks allocated to it this phase.",
  ],
  [
    "Devastating Wounds",
    "Weapons with [DEVASTATING WOUNDS] in their profile are known as Devastating Wounds weapons. Each time an attack is made with such a weapon, a Critical Wound inflicts a number of mortal wounds on the target equal to the Damage characteristic of that weapon and the attack sequence ends.",
  ],
  [
    "Sustained Hits",
    "Weapons with [SUSTAINED HITS X] in their profile are known as Sustained Hits weapons. Each time an attack is made with such a weapon, if a Critical Hit is rolled, that attack scores a number of additional hits on the target as denoted by ‘x’.",
  ],
  [
    "Extra Attacks",
    "Weapons with [EXTRA ATTACKS] in their profile are known as Extra Attacks weapons. Each time the bearer of such a weapon fights, it can make attacks with that weapon in addition to the one it chooses to fight with. The number of attacks made with an Extra Attacks weapon cannot be modified by other rules.",
  ],
  [
    "Anti",
    "Weapons with [ANTI-KEYWORD X+] in their profile are known as Anti weapons. Each time an attack is made with such a weapon against a target with the keyword after the word ‘Anti-’, an unmodified Wound roll of ‘x+’ scores a Critical Wound.",
  ],
]);

export function getItemListFromMapUsingStringList(
  listOfThingsToSearch: string[],
  mapToSearch: Map<string, any>
) {
  let listToReturn = [];
  let item;
  for (let i = 0; i < listOfThingsToSearch.length; i++) {
    item = mapToSearch.get(listOfThingsToSearch[i]);
    listToReturn.push(item);
  }
  return listToReturn;
}
