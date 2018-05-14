import BuildingCategory from "../artifact/BuildingCategory.js";
import BuildingType from "../artifact/BuildingType.js";
import Race from "../artifact/Race.js";

import InitialState from "./InitialState.js";

QUnit.module("InitialState");

QUnit.test("InitialState()", function(assert)
{
   // Run.
   const result = new InitialState();

   // Verify.
   assert.equal(result.raceKey, Race.ELF);
   assert.ok(result.rowData);
   assert.equal(result.rowData.length, 4);

   const row0 = result.rowData[0];
   assert.equal(row0.categoryKey, BuildingCategory.MAIN_HALL);
   assert.equal(row0.typeKey, BuildingType.MAIN_HALL);
   assert.equal(row0.level, 1);
   assert.equal(row0.count, 1);

   const row3 = result.rowData[3];
   assert.equal(row3.categoryKey, BuildingCategory.BASIC);
   assert.equal(row3.typeKey, BuildingType.WORKSHOP);
   assert.equal(row3.level, 1);
   assert.equal(row3.count, 1);
});

const InitialStateTest = {};
export default InitialStateTest;