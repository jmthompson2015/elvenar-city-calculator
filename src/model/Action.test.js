import BuildingCategory from "../artifact/BuildingCategory.js";
import BuildingType from "../artifact/BuildingType.js";
import Race from "../artifact/Race.js";
import Residence from "../artifact/Residence.js";

import Action from "./Action.js";
import Construct from "./Construct.js";

QUnit.module("Action");

QUnit.test("addRow()", function(assert)
{
   // Setup.

   // Run.
   const result = Action.addRow();

   // Verify.
   assert.ok(result);
   assert.equal(result.type, Action.ADD_ROW);
});

QUnit.test("reset()", function(assert)
{
   // Setup.

   // Run.
   const result = Action.reset();

   // Verify.
   assert.ok(result);
   assert.equal(result.type, Action.RESET);
});

QUnit.test("setCategory()", function(assert)
{
   // Setup.
   const id = 2;
   const categoryKey = BuildingCategory.BASIC;

   // Run.
   const result = Action.setCategory(id, categoryKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, Action.SET_CATEGORY);
   assert.equal(result.id, id);
   assert.equal(result.categoryKey, categoryKey);
});

QUnit.test("setConstruct()", function(assert)
{
   // Setup.
   const construct = createConstruct();

   // Run.
   const result = Action.setConstruct(construct);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, Action.SET_CONSTRUCT);
   assert.equal(result.construct, construct);
});

QUnit.test("setCount()", function(assert)
{
   // Setup.
   const id = 2;
   const count = 18;

   // Run.
   const result = Action.setCount(id, count);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, Action.SET_COUNT);
   assert.equal(result.id, id);
   assert.equal(result.count, count);
});

QUnit.test("setLevel()", function(assert)
{
   // Setup.
   const id = 2;
   const level = 4;

   // Run.
   const result = Action.setLevel(id, level);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, Action.SET_LEVEL);
   assert.equal(result.id, id);
   assert.equal(result.level, level);
});

QUnit.test("setRace()", function(assert)
{
   // Setup.
   const raceKey = Race.HUMAN;

   // Run.
   const result = Action.setRace(raceKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, Action.SET_RACE);
   assert.equal(result.raceKey, raceKey);
});

QUnit.test("setType()", function(assert)
{
   // Setup.
   const id = 2;
   const typeKey = BuildingType.RESIDENCE;

   // Run.
   const result = Action.setType(id, typeKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, Action.SET_TYPE);
   assert.equal(result.id, id);
   assert.equal(result.typeKey, typeKey);
});

function createConstruct()
{
   const buildingKey = Residence.ELF_01;
   const building = Residence.properties[buildingKey];
   const id = 1;
   const count = 18;

   return new Construct(id, building.type.categoryKey, building.raceKey, building.typeKey, building.level, count);
}

const ActionTest = {};
export default ActionTest;