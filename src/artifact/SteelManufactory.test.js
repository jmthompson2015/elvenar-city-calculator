import BuildingType from "./BuildingType.js";
import SteelManufactory from "./SteelManufactory.js";

QUnit.module("SteelManufactory");

QUnit.test("SteelManufactory properties Elf 1", function(assert)
{
   const buildingKey = SteelManufactory.ELF_01;
   const building = SteelManufactory.properties[buildingKey];
   assert.equal(building.name, "Steel Manufactory 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.STEEL_MANUFACTORY);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = SteelManufactory.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(SteelManufactory);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = SteelManufactory[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(SteelManufactory.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return SteelManufactory[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = SteelManufactory.keys();

   // Verify.
   assert.ok(result);
   const length = 46;
   assert.equal(result.length, length);
   assert.equal(result[0], "elf01");
   assert.equal(result[length - 1], "human23");

   const properties = Object.getOwnPropertyNames(SteelManufactory);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;