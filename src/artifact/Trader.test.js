import BuildingType from "./BuildingType.js";
import Trader from "./Trader.js";

QUnit.module("Trader");

QUnit.test("Trader properties Elf 1", function(assert)
{
   const buildingKey = Trader.ELF_01;
   const building = Trader.properties[buildingKey];
   assert.equal(building.name, "Trader 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.TRADER);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = Trader.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(Trader);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = Trader[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(Trader.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return Trader[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = Trader.keys();

   // Verify.
   assert.ok(result);
   const length = 6;
   assert.equal(result.length, length);
   assert.equal(result[0], "elf01");
   assert.equal(result[length - 1], "human03");

   const properties = Object.getOwnPropertyNames(Trader);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;