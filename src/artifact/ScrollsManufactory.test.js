import BuildingType from "./BuildingType.js";
import ScrollsManufactory from "./ScrollsManufactory.js";

QUnit.module("ScrollsManufactory");

QUnit.test("ScrollsManufactory properties Elf 1", function(assert)
{
   const buildingKey = ScrollsManufactory.ELF_01;
   const building = ScrollsManufactory.properties[buildingKey];
   assert.equal(building.name, "Scrolls Manufactory 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.SCROLLS_MANUFACTORY);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = ScrollsManufactory.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(ScrollsManufactory);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = ScrollsManufactory[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(ScrollsManufactory.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return ScrollsManufactory[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = ScrollsManufactory.keys();

   // Verify.
   assert.ok(result);
   const length = 46;
   assert.equal(result.length, length);
   assert.equal(result[0], "elf01");
   assert.equal(result[length - 1], "human23");

   const properties = Object.getOwnPropertyNames(ScrollsManufactory);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;