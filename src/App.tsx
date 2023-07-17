import "./App.css";
import { useState } from "react";
import { UnitList, searchUnitList } from "./NecronDataSheet.ts";
import { getAbility } from "./NecronFaction.ts";

function generateDatasheet() {
  const [unit, setUnit] = useState(UnitList[0]);
  const rangedWeapons = unit.rangedWeaponList;
  const meleeWeapons = unit.meleeWeaponList;
  const abilities = unit.abilityList;
  function handleChange(event: { target: { value: string } }) {
    setUnit(searchUnitList(event.target.value));
  }

  return (
    <>
      <select
        className="unit-select"
        aria-label="Default select example"
        onChange={handleChange}
      >
        {UnitList.map((unit) => (
          <option value={unit.name}>{unit.name}</option>
        ))}
      </select>

      <div className="datasheet">
        <div className="UnitHeader">
          <div className="Name">{unit.name}</div>
          <div className="Stats">
            <div className="Stat-Item-Pair">
              <div>M</div>
              <div>{unit.moveSpeed}</div>
            </div>
            <div className="Stat-Item-Pair">
              <div>T</div>
              <div>{unit.toughness}</div>
            </div>
            <div className="Stat-Item-Pair">
              <div>SV</div>
              <div>{unit.save + "+"}</div>
            </div>
            <div className="Stat-Item-Pair">
              <div>W</div>
              <div>{unit.wounds}</div>
            </div>
            <div className="Stat-Item-Pair">
              <div>LD</div>
              <div>{unit.leadership + "+"}</div>
            </div>
            <div className="Stat-Item-Pair">
              <div>OC</div>
              <div>{unit.objectiveControl}</div>
            </div>
          </div>
        </div>
        <div className="UnitMainBox">
          <div className="UnitAllWeaponsBox">
            <div className="UnitWeaponsBox">
              <div className="WeaponHeader WeaponRow">
                <div className="WeaponName">Ranged Weapons</div>
                <div>Range</div>
                <div>A</div>
                <div>BS</div>
                <div>S</div>
                <div>AP</div>
                <div>D</div>
              </div>
              {rangedWeapons.map((weapon) => (
                <div className="Weapon WeaponRow">
                  <div className="WeaponName">{weapon.name}</div>
                  <div>{weapon.range + '"'}</div>
                  <div>{weapon.attacks}</div>
                  <div>{weapon.ballisticSkill + "+"}</div>
                  <div>{weapon.strength + "+"}</div>
                  <div>{"-" + weapon.armorPiercing}</div>
                  <div>{weapon.damage}</div>
                </div>
              ))}
            </div>

            <div className="UnitWeaponsBox">
              <div className="WeaponHeader WeaponRow">
                <div className="WeaponName">Melee Weapons</div>
                <div>Range</div>
                <div>A</div>
                <div>BS</div>
                <div>S</div>
                <div>AP</div>
                <div>D</div>
              </div>
              {meleeWeapons.map((weapon) => (
                <div className="Weapon WeaponRow">
                  <div className="WeaponName">{weapon.name}</div>
                  <div>{"melee"}</div>
                  <div>{weapon.attacks}</div>
                  <div>{weapon.ballisticSkill + "+"}</div>
                  <div>{weapon.strength + "+"}</div>
                  <div>{"-" + weapon.armorPiercing}</div>
                  <div>{weapon.damage}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="UnitAbilitiesBox">
            <div className="AbilitiesHeader">Abilities</div>
            <div className="AbilitiesText">
              <b>{unit.FactionAbility.name}</b>: {unit.FactionAbility.text}
            </div>
            {abilities.map((abilityName) => (
              <div>
                <b>{abilityName}</b>: {getAbility(abilityName)}
              </div>
            ))}
            <div className="WargearAbilitiesHeader"></div>
            <div className="AbilitiesText"></div>
          </div>
        </div>

        <div className="UnitFooter">
          <div className="KeywordsBox"></div>
          <div className="FactionBox"></div>
        </div>
      </div>
    </>
  );
}

function App() {
  return <> {generateDatasheet()}</>;
}

export default App;
