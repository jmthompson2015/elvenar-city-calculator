import BuildingType from "./BuildingType.js";
import PlanksManufactory from "./PlanksManufactory.js";

QUnit.module("PlanksManufactory");

QUnit.test("PlanksManufactory properties Elf 1", function(assert)
{
   const buildingKey = PlanksManufactory.ELF_01;
   const building = PlanksManufactory.properties[buildingKey];
   assert.equal(building.name, "Planks Manufactory 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.PLANKS_MANUFACTORY);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = PlanksManufactory.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(PlanksManufactory);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = PlanksManufactory[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(PlanksManufactory.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return PlanksManufactory[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = PlanksManufactory.keys();

   // Verify.
   assert.ok(result);
   const length = 46;
   assert.equal(result.length, length);
   assert.equal(result[0], "elf01");
   assert.equal(result[length - 1], "human23");

   const properties = Object.getOwnPropertyNames(PlanksManufactory);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;