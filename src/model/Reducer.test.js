import BuildingCategory from "../artifact/BuildingCategory.js";
import BuildingType from "../artifact/BuildingType.js";
import Residence from "../artifact/Residence.js";

import Action from "./Action.js";
import Construct from "./Construct.js";
import InitialState from "./InitialState.js";
import Reducer from "./Reducer.js";

QUnit.module("Reducer");

QUnit.test("setCategory()", function(assert)
{
   // Setup.
   const state = new InitialState();
   const id = 2;
   const categoryKey = BuildingCategory.MILITARY;
   const action = Action.setCategory(id, categoryKey);

   // Run.
   const result = Reducer.root(state, action);

   // Verify.
   assert.ok(result);
   assert.equal(result.rowData[id].categoryKey, categoryKey);
   assert.equal(result.rowData[id].typeKey, BuildingType.ARMORY);
   assert.equal(result.rowData[id].level, 1);
   assert.equal(result.rowData[id].count, 1);
});

QUnit.test("setConstruct()", function(assert)
{
   // Setup.
   const state = new InitialState();
   const length = 4;
   assert.equal(state.rowData.length, length);
   const construct = createConstruct();
   const action = Action.setConstruct(construct);

   // Run.
   const result = Reducer.root(state, action);

   // Verify.
   assert.ok(result);
   assert.equal(result.rowData.length, length + 1);
});

QUnit.test("setCount()", function(assert)
{
   // Setup.
   const state = new InitialState();
   const id = 0;
   const count = 12;
   const action = Action.setCount(id, count);

   // Run.
   const result = Reducer.root(state, action);

   // Verify.
   assert.ok(result);
   assert.equal(result.rowData[id].categoryKey, BuildingCategory.START);
   assert.equal(result.rowData[id].typeKey, BuildingType.MAIN_HALL);
   assert.equal(result.rowData[id].level, 1);
   assert.equal(result.rowData[id].count, count);
});

QUnit.test("setLevel()", function(assert)
{
   // Setup.
   const state = new InitialState();
   const id = 0;
   const level = 6;
   const action = Action.setLevel(id, level);

   // Run.
   const result = Reducer.root(state, action);

   // Verify.
   assert.ok(result);
   assert.equal(result.rowData[id].categoryKey, BuildingCategory.START);
   assert.equal(result.rowData[id].typeKey, BuildingType.MAIN_HALL);
   assert.equal(result.rowData[id].level, level);
   assert.equal(result.rowData[id].count, 1);
});

QUnit.test("setType()", function(assert)
{
   // Setup.
   const state = new InitialState();
   const id = 2;
   const typeKey = BuildingType.WORKSHOP;
   const action = Action.setType(id, typeKey);

   // Run.
   const result = Reducer.root(state, action);

   // Verify.
   assert.ok(result);
   assert.equal(result.rowData[id].categoryKey, BuildingCategory.BASICS);
   assert.equal(result.rowData[id].typeKey, typeKey);
   assert.equal(result.rowData[id].level, 1);
   assert.equal(result.rowData[id].count, 1);
});

function createConstruct()
{
   const buildingKey = Residence.ELF_01;
   const building = Residence.properties[buildingKey];
   const id = 4;
   const count = 18;

   return new Construct(id, building.type.categoryKey, building.raceKey, building.typeKey, building.level, count);
}

const ReducerTest = {};
export default ReducerTest;