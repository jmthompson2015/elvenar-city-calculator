import Residence from "../artifact/Residence.js";

import Action from "./Action.js";
import Construct from "./Construct.js";
import InitialState from "./InitialState.js";
import Reducer from "./Reducer.js";

QUnit.module("Reducer");

QUnit.test("addConstruct()", function(assert)
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