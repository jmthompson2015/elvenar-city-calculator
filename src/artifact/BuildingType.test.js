import BuildingCategory from "./BuildingCategory.js";
import BuildingType from "./BuildingType.js";

QUnit.module("BuildingType");

QUnit.test("BuildingType properties Residence", function(assert)
{
   const typeKey = BuildingType.RESIDENCE;
   const type = BuildingType.properties[typeKey];
   assert.equal(type.name, "Residence");
   assert.equal(type.key, typeKey);
});

QUnit.test("BuildingType.keysByCategory() Basic", function(assert)
{
   // Setup.
   const categoryKey = BuildingCategory.BASIC;

   // Run.
   const result = BuildingType.keysByCategory(categoryKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 6);
   assert.equal(result[0], BuildingType.MAGIC_ACADEMY);
   assert.equal(result[result.length - 1], BuildingType.WORKSHOP);
});

QUnit.test("BuildingType.keysByCategory() Manufactory", function(assert)
{
   // Setup.
   const categoryKey = BuildingCategory.MANUFACTORY;

   // Run.
   const result = BuildingType.keysByCategory(categoryKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 5);
   assert.equal(result[0], BuildingType.CRYSTAL_MANUFACTORY);
   assert.equal(result[result.length - 1], BuildingType.STEEL_MANUFACTORY);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = BuildingType.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(BuildingType);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = BuildingType[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(BuildingType.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return BuildingType[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = BuildingType.keys();

   // Verify.
   assert.ok(result);
   const length = 13;
   assert.equal(result.length, length);
   assert.equal(result[0], "buildersHut");
   assert.equal(result[length - 1], "workshop");

   const properties = Object.getOwnPropertyNames(BuildingType);
   const count = properties.length - 1 - // properties
      1 - // keysByCategory
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;