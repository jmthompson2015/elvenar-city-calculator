import BuildingType from "./BuildingType.js";
import Culture from "./Culture.js";

QUnit.module("Culture");

QUnit.test("Culture properties Luminous Signpost (Elf)", function(assert)
{
   const buildingKey = Culture.LUMINOUS_SIGNPOST_ELF;
   const building = Culture.properties[buildingKey];
   assert.equal(building.name, "Luminous Signpost (Elf)");
   assert.equal(building.typeKey, BuildingType.LUMINOUS_SIGNPOST_ELF);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = Culture.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(Culture);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = Culture[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(Culture.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return Culture[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = Culture.keys();

   // Verify.
   assert.ok(result);
   const length = 54;
   assert.equal(result.length, length);
   assert.equal(result[0], "luminousSignpostElf");
   assert.equal(result[length - 1], "battleArenaHuman");

   const properties = Object.getOwnPropertyNames(Culture);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;