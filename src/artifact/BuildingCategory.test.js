import BuildingCategory from "./BuildingCategory.js";

QUnit.module("BuildingCategory");

QUnit.test("BuildingCategory properties Basics", function(assert)
{
   const categoryKey = BuildingCategory.BASICS;
   const category = BuildingCategory.properties[categoryKey];
   assert.equal(category.name, "Basics");
   assert.equal(category.key, categoryKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = BuildingCategory.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(BuildingCategory);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = BuildingCategory[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(BuildingCategory.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return BuildingCategory[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = BuildingCategory.keys();

   // Verify.
   assert.ok(result);
   const length = 6;
   assert.equal(result.length, length);
   assert.equal(result[0], BuildingCategory.START);
   assert.equal(result[length - 1], BuildingCategory.CULTURE);

   const properties = Object.getOwnPropertyNames(BuildingCategory);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;