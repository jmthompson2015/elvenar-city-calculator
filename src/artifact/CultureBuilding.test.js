import BuildingType from "./BuildingType.js";
import CultureBuilding from "./CultureBuilding.js";

QUnit.module("CultureBuilding");

QUnit.test("CultureBuilding properties Luminous Signpost (Elf)", function(assert)
{
   const buildingKey = CultureBuilding.LUMINOUS_SIGNPOST_ELF;
   const building = CultureBuilding.properties[buildingKey];
   assert.equal(building.name, "Luminous Signpost (Elf)");
   assert.equal(building.typeKey, BuildingType.LUMINOUS_SIGNPOST_ELF);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = CultureBuilding.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(CultureBuilding);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = CultureBuilding[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(CultureBuilding.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return CultureBuilding[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = CultureBuilding.keys();

   // Verify.
   assert.ok(result);
   const length = 54;
   assert.equal(result.length, length);
   assert.equal(result[0], "luminousSignpostElf");
   assert.equal(result[length - 1], "battleArenaHuman");

   const properties = Object.getOwnPropertyNames(CultureBuilding);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;