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
          <div className="UnitWeaponsBox">
            <table className="RangedWeapons">
              <tbody>
                <tr className="WeaponHeader">
                  <th>Ranged Weapons</th>
                  <th>Range</th>
                  <th>A</th>
                  <th>BS</th>
                  <th>S</th>
                  <th>AP</th>
                  <th>D</th>
                </tr>
                {rangedWeapons.map((weapon) => (
                  <tr className="Weapon">
                    <td>{weapon.name}</td>
                    <td>{weapon.range + '"'}</td>
                    <td>{weapon.attacks}</td>
                    <td>{weapon.ballisticSkill + "+"}</td>
                    <td>{weapon.strength + "+"}</td>
                    <td>{"-" + weapon.armorPiercing}</td>
                    <td>{weapon.damage}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="MeleeWeapons">
              <tbody>
                <tr className="WeaponHeader">
                  <th>Melee Weapons</th>
                  <th>Range</th>
                  <th>A</th>
                  <th>BS</th>
                  <th>S</th>
                  <th>AP</th>
                  <th>D</th>
                </tr>
                {meleeWeapons.map((weapon) => (
                  <tr className="Weapon">
                    <td>{weapon.name}</td>
                    <td>{"melee"}</td>
                    <td>{weapon.attacks}</td>
                    <td>{weapon.ballisticSkill + "+"}</td>
                    <td>{weapon.strength + "+"}</td>
                    <td>{"-" + weapon.armorPiercing}</td>
                    <td>{weapon.damage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="UnitAbilitiesBox">
            <div className="AbilitiesHeader">Abilities</div>
            <div className="AbilitiesText">
              {unit.FactionAbility.name + ": " + unit.FactionAbility.text}
            </div>
            {abilities.map((abilityName) => (
              <div>
                {abilityName}: {getAbility(abilityName)}
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
