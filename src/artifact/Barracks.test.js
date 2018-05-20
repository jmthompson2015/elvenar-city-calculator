import BuildingType from "./BuildingType.js";
import Barracks from "./Barracks.js";

QUnit.module("Barracks");

QUnit.test("Barracks properties Elf 1", function(assert)
{
   const buildingKey = Barracks.ELF_01;
   const building = Barracks.properties[buildingKey];
   assert.equal(building.name, "Barracks 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.BARRACKS);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = Barracks.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(Barracks);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = Barracks[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(Barracks.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return Barracks[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = Barracks.keys();

   // Verify.
   assert.ok(result);
   const length = 58;
   assert.equal(result.length, length);
   assert.equal(result[0], "elf01");
   assert.equal(result[length - 1], "human29");

   const properties = Object.getOwnPropertyNames(Barracks);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;