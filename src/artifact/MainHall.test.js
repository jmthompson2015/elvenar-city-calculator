import BuildingType from "./BuildingType.js";
import MainHall from "./MainHall.js";

QUnit.module("MainHall");

QUnit.test("MainHall properties Elf 1", function(assert)
{
   const buildingKey = MainHall.ELF_01;
   const building = MainHall.properties[buildingKey];
   assert.equal(building.name, "Main Hall 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.MAIN_HALL);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = MainHall.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(MainHall);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = MainHall[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(MainHall.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return MainHall[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = MainHall.keys();

   // Verify.
   assert.ok(result);
   const length = 10;
   assert.equal(result.length, length);
   assert.equal(result[0], "elf01");
   assert.equal(result[length - 1], "human05");

   const properties = Object.getOwnPropertyNames(MainHall);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;