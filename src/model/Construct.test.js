import Building from "../artifact/Building.js";
import BuildingCategory from "../artifact/BuildingCategory.js";
import BuildingType from "../artifact/BuildingType.js";
import Race from "../artifact/Race.js";

import Construct from "./Construct.js";

QUnit.module("Construct");

QUnit.test("Construct()", function(assert)
{
   // Setup.
   const buildingKey = Building.RESIDENCE_ELF_01;
   const building = Building.properties[buildingKey];
   const id = 1;
   const count = 18;

   // Run.
   const result = new Construct(id, building.type.categoryKey, building.raceKey, building.typeKey, building.level, count);

   // Verify.
   assert.ok(result);
   assert.equal(result.id, id);
   assert.equal(result.categoryKey, building.type.categoryKey);
   assert.equal(result.raceKey, building.raceKey);
   assert.equal(result.typeKey, building.typeKey);
   assert.equal(result.level, building.level);
   assert.equal(result.count, count);
});

QUnit.test("toPlainObject()", function(assert)
{
   // Setup.
   const construct = createConstruct();

   // Run.
   const result = construct.toPlainObject();

   // Verify.
   assert.ok(result);
   assert.equal(result.id, 1);
   assert.equal(result.categoryKey, BuildingCategory.BASIC);
   assert.equal(result.raceKey, Race.ELF);
   assert.equal(result.typeKey, BuildingType.RESIDENCE);
   assert.equal(result.level, 1);
   assert.equal(result.count, 18);
});

QUnit.test("Construct.fromPlainObject()", function(assert)
{
   // Setup.
   const buildingKey = Building.RESIDENCE_ELF_01;
   const building = Building.properties[buildingKey];
   const count = 18;
   const instance = {
      id: 1,
      categoryKey: building.type.categoryKey,
      raceKey: building.raceKey,
      typeKey: building.typeKey,
      level: building.level,
      count: count,
   };

   // Run.
   const result = Construct.fromPlainObject(instance);

   // Verify.
   assert.ok(result);
   assert.equal(result.id, 1);
   assert.equal(result.categoryKey, BuildingCategory.BASIC);
   assert.equal(result.raceKey, Race.ELF);
   assert.equal(result.typeKey, BuildingType.RESIDENCE);
   assert.equal(result.level, 1);
   assert.equal(result.count, 18);
});

function createConstruct()
{
   const buildingKey = Building.RESIDENCE_ELF_01;
   const building = Building.properties[buildingKey];
   const id = 1;
   const count = 18;

   return new Construct(id, building.type.categoryKey, building.raceKey, building.typeKey, building.level, count);
}

const ConstructTest = {};
export default ConstructTest;