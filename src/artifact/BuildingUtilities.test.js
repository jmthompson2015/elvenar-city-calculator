import BuildingUtilities from "./BuildingUtilities.js";
import BuildingCategory from "./BuildingCategory.js";
import BuildingType from "./BuildingType.js";
import Race from "./Race.js";
import Residence from "./Residence.js";
import Workshop from "./Workshop.js";

QUnit.module("BuildingUtilities");

QUnit.test("BuildingUtilities.cumulativeCulture()", function(assert)
{
   assert.equal(BuildingUtilities.cumulativeCulture(BuildingType.RESIDENCE, Residence.ELF_01), 0);
   assert.equal(BuildingUtilities.cumulativeCulture(BuildingType.RESIDENCE, Residence.ELF_02), -3);
   assert.equal(BuildingUtilities.cumulativeCulture(BuildingType.RESIDENCE, Residence.ELF_03), -7);
   assert.equal(BuildingUtilities.cumulativeCulture(BuildingType.RESIDENCE, Residence.ELF_04), -19);
});

QUnit.test("BuildingUtilities.cumulativePopulation()", function(assert)
{
   assert.equal(BuildingUtilities.cumulativePopulation(BuildingType.RESIDENCE, Residence.ELF_01), 31);
   assert.equal(BuildingUtilities.cumulativePopulation(BuildingType.RESIDENCE, Residence.ELF_02), 35);
   assert.equal(BuildingUtilities.cumulativePopulation(BuildingType.RESIDENCE, Residence.ELF_03), 40);
   assert.equal(BuildingUtilities.cumulativePopulation(BuildingType.RESIDENCE, Residence.ELF_04), 68);
});

QUnit.test("BuildingUtilities.keysByRaceType() Elf Residence", function(assert)
{
   // Setup.
   const raceKey = Race.ELF;
   const typeKey = BuildingType.RESIDENCE;

   // Run.
   const result = BuildingUtilities.keysByRaceType(raceKey, typeKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 29);
   assert.equal(result[0], Residence.ELF_01);
   assert.equal(result[result.length - 1], Residence.ELF_29);
});

QUnit.test("BuildingUtilities.keysByRaceType() Human Workshop", function(assert)
{
   // Setup.
   const raceKey = Race.HUMAN;
   const typeKey = BuildingType.WORKSHOP;

   // Run.
   const result = BuildingUtilities.keysByRaceType(raceKey, typeKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 29);
   assert.equal(result[0], Workshop.HUMAN_01);
   assert.equal(result[result.length - 1], Workshop.HUMAN_29);
});

QUnit.test("BuildingUtilities.maxLevel()", function(assert)
{
   assert.equal(BuildingUtilities.maxLevel(Race.ELF, BuildingType.MARBLE_MANUFACTORY), 23);
   assert.equal(BuildingUtilities.maxLevel(Race.HUMAN, BuildingType.MARBLE_MANUFACTORY), 23);
   assert.equal(BuildingUtilities.maxLevel(Race.ELF, BuildingType.RESIDENCE), 29);
   assert.equal(BuildingUtilities.maxLevel(Race.HUMAN, BuildingType.RESIDENCE), 29);
   assert.equal(BuildingUtilities.maxLevel(Race.ELF, BuildingType.WORKSHOP), 29);
   assert.equal(BuildingUtilities.maxLevel(Race.HUMAN, BuildingType.WORKSHOP), 29);
});

QUnit.test("BuildingUtilities.raceCategoryHasBuildings()", function(assert)
{
   BuildingCategory.keys().forEach(categoryKey =>
   {
      const category = BuildingCategory.properties[categoryKey];
      assert.equal(BuildingUtilities.raceCategoryHasBuildings(Race.ELF, categoryKey), true, category.name);
   });

   BuildingCategory.keys().forEach(categoryKey =>
   {
      const category = BuildingCategory.properties[categoryKey];
      assert.equal(BuildingUtilities.raceCategoryHasBuildings(Race.HUMAN, categoryKey), true, category.name);
   });
});

QUnit.test("BuildingUtilities.raceTypeHasBuildings()", function(assert)
{
   BuildingType.keys().forEach(typeKey =>
   {
      const type = BuildingType.properties[typeKey];
      assert.equal(BuildingUtilities.raceTypeHasBuildings(Race.ELF, typeKey), true, type.name);
   });

   BuildingType.keys().forEach(typeKey =>
   {
      const type = BuildingType.properties[typeKey];
      assert.equal(BuildingUtilities.raceTypeHasBuildings(Race.HUMAN, typeKey), true, type.name);
   });
});

const BuildingTest = {};
export default BuildingTest;