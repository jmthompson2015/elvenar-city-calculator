import BuildingType from "./BuildingType.js";
import Workshop from "./Workshop.js";

QUnit.module("Workshop");

QUnit.test("Workshop properties Elf 1", function(assert)
{
   const buildingKey = Workshop.ELF_01;
   const building = Workshop.properties[buildingKey];
   assert.equal(building.name, "Workshop 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.WORKSHOP);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = Workshop.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(Workshop);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = Workshop[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(Workshop.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return Workshop[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = Workshop.keys();

   // Verify.
   assert.ok(result);
   const length = 58;
   assert.equal(result.length, length);
   assert.equal(result[0], "elf01");
   assert.equal(result[length - 1], "human29");

   const properties = Object.getOwnPropertyNames(Workshop);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;