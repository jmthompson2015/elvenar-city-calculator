import BuildingType from "./BuildingType.js";
import CrystalManufactory from "./CrystalManufactory.js";

QUnit.module("CrystalManufactory");

QUnit.test("CrystalManufactory properties Elf 1", function(assert)
{
   const buildingKey = CrystalManufactory.ELF_01;
   const building = CrystalManufactory.properties[buildingKey];
   assert.equal(building.name, "Crystal Manufactory 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.CRYSTAL_MANUFACTORY);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = CrystalManufactory.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(CrystalManufactory);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = CrystalManufactory[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(CrystalManufactory.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return CrystalManufactory[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = CrystalManufactory.keys();

   // Verify.
   assert.ok(result);
   const length = 46;
   assert.equal(result.length, length);
   assert.equal(result[0], "elf01");
   assert.equal(result[length - 1], "human23");

   const properties = Object.getOwnPropertyNames(CrystalManufactory);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;