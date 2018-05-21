import BuildingType from "./BuildingType.js";
import Street from "./Street.js";

QUnit.module("Street");

QUnit.test("Street properties Footpath", function(assert)
{
   const buildingKey = Street.FOOTPATH_ELF;
   const building = Street.properties[buildingKey];
   assert.equal(building.name, "Footpath (Elf)");
   assert.equal(building.typeKey, BuildingType.FOOTPATH_ELF);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = Street.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(Street);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = Street[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(Street.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return Street[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = Street.keys();

   // Verify.
   assert.ok(result);
   const length = 22;
   assert.equal(result.length, length);
   assert.equal(result[0], Street.FOOTPATH_ELF);
   assert.equal(result[length - 1], Street.ETERNAL_STREET_HUMAN);

   const properties = Object.getOwnPropertyNames(Street);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;