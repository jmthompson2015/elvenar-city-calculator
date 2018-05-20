import BuildingType from "./BuildingType.js";
import GemsManufactory from "./GemsManufactory.js";

QUnit.module("GemsManufactory");

QUnit.test("GemsManufactory properties Elf 1", function(assert)
{
   const buildingKey = GemsManufactory.ELF_01;
   const building = GemsManufactory.properties[buildingKey];
   assert.equal(building.name, "Gems Manufactory 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.GEMS_MANUFACTORY);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = GemsManufactory.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(GemsManufactory);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = GemsManufactory[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(GemsManufactory.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return GemsManufactory[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = GemsManufactory.keys();

   // Verify.
   assert.ok(result);
   const length = 46;
   assert.equal(result.length, length);
   assert.equal(result[0], "elf01");
   assert.equal(result[length - 1], "human23");

   const properties = Object.getOwnPropertyNames(GemsManufactory);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;