import BuildingType from "./BuildingType.js";
import ElixirManufactory from "./ElixirManufactory.js";

QUnit.module("ElixirManufactory");

QUnit.test("ElixirManufactory properties Elf 1", function(assert)
{
   const buildingKey = ElixirManufactory.ELF_01;
   const building = ElixirManufactory.properties[buildingKey];
   assert.equal(building.name, "Elixir Manufactory 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.ELIXIR_MANUFACTORY);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = ElixirManufactory.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(ElixirManufactory);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = ElixirManufactory[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(ElixirManufactory.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return ElixirManufactory[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = ElixirManufactory.keys();

   // Verify.
   assert.ok(result);
   const length = 46;
   assert.equal(result.length, length);
   assert.equal(result[0], "elf01");
   assert.equal(result[length - 1], "human23");

   const properties = Object.getOwnPropertyNames(ElixirManufactory);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;