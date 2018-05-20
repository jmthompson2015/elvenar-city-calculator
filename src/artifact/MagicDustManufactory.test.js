import BuildingType from "./BuildingType.js";
import MagicDustManufactory from "./MagicDustManufactory.js";

QUnit.module("MagicDustManufactory");

QUnit.test("MagicDustManufactory properties Elf 1", function(assert)
{
   const buildingKey = MagicDustManufactory.ELF_01;
   const building = MagicDustManufactory.properties[buildingKey];
   assert.equal(building.name, "Magic Dust Manufactory 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.MAGIC_DUST_MANUFACTORY);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = MagicDustManufactory.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(MagicDustManufactory);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = MagicDustManufactory[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(MagicDustManufactory.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return MagicDustManufactory[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = MagicDustManufactory.keys();

   // Verify.
   assert.ok(result);
   const length = 46;
   assert.equal(result.length, length);
   assert.equal(result[0], "elf01");
   assert.equal(result[length - 1], "human23");

   const properties = Object.getOwnPropertyNames(MagicDustManufactory);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;