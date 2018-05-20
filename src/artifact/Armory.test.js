import BuildingType from "./BuildingType.js";
import Armory from "./Armory.js";

QUnit.module("Armory");

QUnit.test("Armory properties Elf 1", function(assert)
{
   const buildingKey = Armory.ELF_01;
   const building = Armory.properties[buildingKey];
   assert.equal(building.name, "Armory 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.ARMORY);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = Armory.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(Armory);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = Armory[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(Armory.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return Armory[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = Armory.keys();

   // Verify.
   assert.ok(result);
   const length = 62;
   assert.equal(result.length, length);
   assert.equal(result[0], Armory.ELF_01);
   assert.equal(result[length - 1], Armory.HUMAN_31);

   const properties = Object.getOwnPropertyNames(Armory);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;