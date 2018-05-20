import BuildingType from "./BuildingType.js";
import MagicAcademy from "./MagicAcademy.js";

QUnit.module("MagicAcademy");

QUnit.test("MagicAcademy properties Elf 1", function(assert)
{
   const buildingKey = MagicAcademy.ELF_01;
   const building = MagicAcademy.properties[buildingKey];
   assert.equal(building.name, "Magic Academy 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.MAGIC_ACADEMY);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = MagicAcademy.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(MagicAcademy);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = MagicAcademy[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(MagicAcademy.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return MagicAcademy[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = MagicAcademy.keys();

   // Verify.
   assert.ok(result);
   const length = 10;
   assert.equal(result.length, length);
   assert.equal(result[0], "elf01");
   assert.equal(result[length - 1], "human05");

   const properties = Object.getOwnPropertyNames(MagicAcademy);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;