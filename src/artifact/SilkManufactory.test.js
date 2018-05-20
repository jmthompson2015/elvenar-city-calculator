import BuildingType from "./BuildingType.js";
import SilkManufactory from "./SilkManufactory.js";

QUnit.module("SilkManufactory");

QUnit.test("SilkManufactory properties Elf 1", function(assert)
{
   const buildingKey = SilkManufactory.ELF_01;
   const building = SilkManufactory.properties[buildingKey];
   assert.equal(building.name, "Silk Manufactory 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.SILK_MANUFACTORY);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = SilkManufactory.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(SilkManufactory);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = SilkManufactory[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(SilkManufactory.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return SilkManufactory[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = SilkManufactory.keys();

   // Verify.
   assert.ok(result);
   const length = 46;
   assert.equal(result.length, length);
   assert.equal(result[0], "elf01");
   assert.equal(result[length - 1], "human23");

   const properties = Object.getOwnPropertyNames(SilkManufactory);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;