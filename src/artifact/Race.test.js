import Race from "./Race.js";

QUnit.module("Race");

QUnit.test("Race properties Elf", function(assert)
{
   const raceKey = Race.ELF;
   const race = Race.properties[raceKey];
   assert.equal(race.name, "Elf");
   assert.equal(race.key, raceKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = Race.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(Race);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = Race[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(Race.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return Race[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = Race.keys();

   // Verify.
   assert.ok(result);
   const length = 2;
   assert.equal(result.length, length);
   assert.equal(result[0], "elf");
   assert.equal(result[length - 1], "human");

   const properties = Object.getOwnPropertyNames(Race);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;