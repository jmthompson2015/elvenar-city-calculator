import Building from "./Building.js";
import BuildingType from "./BuildingType.js";
import Race from "./Race.js";

QUnit.module("Building");

QUnit.test("Building properties Residence Elf 1", function(assert)
{
   const buildingKey = Building.RESIDENCE_ELF_01;
   const building = Building.properties[buildingKey];
   assert.equal(building.name, "Residence 1 (Elf)");
   assert.equal(building.key, buildingKey);
});

QUnit.test("Building.cumulativeCulture()", function(assert)
{
   assert.equal(Building.cumulativeCulture(Building.RESIDENCE_ELF_01), 0);
   assert.equal(Building.cumulativeCulture(Building.RESIDENCE_ELF_02), -3);
   assert.equal(Building.cumulativeCulture(Building.RESIDENCE_ELF_03), -7);
   assert.equal(Building.cumulativeCulture(Building.RESIDENCE_ELF_04), -19);
});

QUnit.test("Building.cumulativePopulation()", function(assert)
{
   assert.equal(Building.cumulativePopulation(Building.RESIDENCE_ELF_01), 31);
   assert.equal(Building.cumulativePopulation(Building.RESIDENCE_ELF_02), 35);
   assert.equal(Building.cumulativePopulation(Building.RESIDENCE_ELF_03), 40);
   assert.equal(Building.cumulativePopulation(Building.RESIDENCE_ELF_04), 68);
});

QUnit.test("Building.find()", function(assert)
{
   let building = Building.find(Race.ELF, BuildingType.RESIDENCE, 1);
   assert.equal(building.key, Building.RESIDENCE_ELF_01);

   building = Building.find(Race.HUMAN, BuildingType.WORKSHOP, 5);
   assert.equal(building.key, Building.WORKSHOP_HUMAN_05);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = Building.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(Building);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = Building[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(Building.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return Building[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = Building.keys();

   // Verify.
   assert.ok(result);
   const length = 106;
   assert.equal(result.length, length);
   assert.equal(result[0], "buildersHutElf01");
   assert.equal(result[length - 1], "workshopHuman10");

   const properties = Object.getOwnPropertyNames(Building);
   const count = properties.length - 1 - // properties
      1 - // cumulativeCulture
      1 - // cumulativePopulation
      1 - // find
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const BuildingTest = {};
export default BuildingTest;