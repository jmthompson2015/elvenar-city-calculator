import BuildingType from "./BuildingType.js";
import TrainingGrounds from "./TrainingGrounds.js";

QUnit.module("TrainingGrounds");

QUnit.test("TrainingGrounds properties Elf 1", function(assert)
{
   const buildingKey = TrainingGrounds.ELF_01;
   const building = TrainingGrounds.properties[buildingKey];
   assert.equal(building.name, "Training Grounds 1 (Elf)");
   assert.equal(building.typeKey, BuildingType.TRAINING_GROUNDS);
   assert.equal(building.key, buildingKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = TrainingGrounds.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(TrainingGrounds);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = TrainingGrounds[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(TrainingGrounds.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return TrainingGrounds[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = TrainingGrounds.keys();

   // Verify.
   assert.ok(result);
   const length = 40;
   assert.equal(result.length, length);
   assert.equal(result[0], TrainingGrounds.ELF_01);
   assert.equal(result[length - 1], TrainingGrounds.HUMAN_20);

   const properties = Object.getOwnPropertyNames(TrainingGrounds);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;