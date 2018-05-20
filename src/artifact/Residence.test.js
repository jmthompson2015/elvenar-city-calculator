import BuildingType from "./BuildingType.js";
import Residence from "./Residence.js";

QUnit.module("Residence");

QUnit.test("Residence properties Elf 1", function(assert)
{
   const buildingKey = Residence.ELF_01;
   const building = Residence.properties[buildingKey];
   assert.equal(building.name, "Residence 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.RESIDENCE);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = Residence.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(Residence);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = Residence[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(Residence.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return Residence[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = Residence.keys();

   // Verify.
   assert.ok(result);
   const length = 58;
   assert.equal(result.length, length);
   assert.equal(result[0], "elf01");
   assert.equal(result[length - 1], "human29");

   const properties = Object.getOwnPropertyNames(Residence);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;