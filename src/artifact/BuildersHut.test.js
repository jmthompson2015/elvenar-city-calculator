import BuildingType from "./BuildingType.js";
import BuildersHut from "./BuildersHut.js";

QUnit.module("BuildersHut");

QUnit.test("BuildersHut properties Elf 1", function(assert)
{
   const buildingKey = BuildersHut.ELF_01;
   const building = BuildersHut.properties[buildingKey];
   assert.equal(building.name, "Builder's Hut 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.BUILDERS_HUT);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = BuildersHut.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(BuildersHut);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = BuildersHut[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(BuildersHut.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return BuildersHut[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = BuildersHut.keys();

   // Verify.
   assert.ok(result);
   const length = 10;
   assert.equal(result.length, length);
   assert.equal(result[0], "elf01");
   assert.equal(result[length - 1], "human05");

   const properties = Object.getOwnPropertyNames(BuildersHut);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;