import Armory from "./Armory.js";
import Barracks from "./Barracks.js";
import BuildersHut from "./BuildersHut.js";
import BuildingResolver from "./BuildingResolver.js";
import BuildingType from "./BuildingType.js";
import CrystalManufactory from "./CrystalManufactory.js";
import CultureBuilding from "./CultureBuilding.js";
import ElixirManufactory from "./ElixirManufactory.js";
import GemsManufactory from "./GemsManufactory.js";
import MagicAcademy from "./MagicAcademy.js";
import MagicDustManufactory from "./MagicDustManufactory.js";
import MainHall from "./MainHall.js";
import MarbleManufactory from "./MarbleManufactory.js";
import PlanksManufactory from "./PlanksManufactory.js";
import Residence from "./Residence.js";
import Race from "./Race.js";
import ScrollsManufactory from "./ScrollsManufactory.js";
import SilkManufactory from "./SilkManufactory.js";
import SteelManufactory from "./SteelManufactory.js";
import Trader from "./Trader.js";
import TrainingGrounds from "./TrainingGrounds.js";
import Workshop from "./Workshop.js";

QUnit.module("BuildingResolver");

QUnit.test("BuildingResolver.buildingClass()", function(assert)
{
   // Setup.
   const typeKey = BuildingType.MARBLE_MANUFACTORY;

   // Run.
   const result = BuildingResolver.buildingClass(typeKey);

   // Verify.
   assert.ok(result);
   assert.equal(result, MarbleManufactory);

   assert.equal(BuildingResolver.buildingClass(BuildingType.ARMORY), Armory, "Armory");
   assert.equal(BuildingResolver.buildingClass(BuildingType.BARRACKS), Barracks, "Barracks");
   assert.equal(BuildingResolver.buildingClass(BuildingType.BUILDERS_HUT), BuildersHut, "BuildersHut");
   assert.equal(BuildingResolver.buildingClass(BuildingType.CRYSTAL_MANUFACTORY), CrystalManufactory, "CrystalManufactory");
   assert.equal(BuildingResolver.buildingClass(BuildingType.ELIXIR_MANUFACTORY), ElixirManufactory, "ElixirManufactory");
   assert.equal(BuildingResolver.buildingClass(BuildingType.GEMS_MANUFACTORY), GemsManufactory, "GemsManufactory");
   assert.equal(BuildingResolver.buildingClass(BuildingType.MAGIC_ACADEMY), MagicAcademy, "MagicAcademy");
   assert.equal(BuildingResolver.buildingClass(BuildingType.MAGIC_DUST_MANUFACTORY), MagicDustManufactory, "MagicDustManufactory");
   assert.equal(BuildingResolver.buildingClass(BuildingType.MAIN_HALL), MainHall, "MainHall");
   assert.equal(BuildingResolver.buildingClass(BuildingType.MARBLE_MANUFACTORY), MarbleManufactory, "MarbleManufactory");
   assert.equal(BuildingResolver.buildingClass(BuildingType.PLANKS_MANUFACTORY), PlanksManufactory, "PlanksManufactory");
   assert.equal(BuildingResolver.buildingClass(BuildingType.RESIDENCE), Residence, "Residence");
   assert.equal(BuildingResolver.buildingClass(BuildingType.SCROLLS_MANUFACTORY), ScrollsManufactory, "ScrollsManufactory");
   assert.equal(BuildingResolver.buildingClass(BuildingType.SILK_MANUFACTORY), SilkManufactory, "SilkManufactory");
   assert.equal(BuildingResolver.buildingClass(BuildingType.STEEL_MANUFACTORY), SteelManufactory, "SteelManufactory");
   assert.equal(BuildingResolver.buildingClass(BuildingType.TRADER), Trader, "Trader");
   assert.equal(BuildingResolver.buildingClass(BuildingType.TRAINING_GROUNDS), TrainingGrounds, "TrainingGrounds");
   assert.equal(BuildingResolver.buildingClass(BuildingType.WORKSHOP), Workshop, "Workshop");

   CultureBuilding.keys().forEach(buildingKey =>
   {
      const typeKey = buildingKey;
      assert.equal(BuildingResolver.buildingClass(typeKey), CultureBuilding, typeKey);
   });
});

QUnit.test("BuildingResolver.find() Luminous Signpost Elf 1", function(assert)
{
   // Setup.
   const raceKey = Race.ELF;
   const typeKey = BuildingType.LUMINOUS_SIGNPOST_ELF;
   const level = 1;

   // Run.
   const result = BuildingResolver.find(raceKey, typeKey, level);

   // Verify.
   assert.ok(result);
   assert.equal(result.raceKey, raceKey);
   assert.equal(result.typeKey, typeKey);
   assert.equal(result.level, level);
   assert.equal(result.key, CultureBuilding.LUMINOUS_SIGNPOST_ELF);
});

QUnit.test("BuildingResolver.find() Marble Manufactory Elf 1", function(assert)
{
   // Setup.
   const raceKey = Race.ELF;
   const typeKey = BuildingType.MARBLE_MANUFACTORY;
   const level = 1;

   // Run.
   const result = BuildingResolver.find(raceKey, typeKey, level);

   // Verify.
   assert.ok(result);
   assert.equal(result.raceKey, raceKey);
   assert.equal(result.typeKey, typeKey);
   assert.equal(result.level, level);
   assert.equal(result.key, MarbleManufactory.ELF_01);
});

QUnit.test("BuildingResolver.find() Training Grounds Elf 1", function(assert)
{
   // Setup.
   const raceKey = Race.ELF;
   const typeKey = BuildingType.TRAINING_GROUNDS;
   const level = 1;

   // Run.
   const result = BuildingResolver.find(raceKey, typeKey, level);

   // Verify.
   assert.ok(result);
   assert.equal(result.raceKey, raceKey);
   assert.equal(result.typeKey, typeKey);
   assert.equal(result.level, level);
   assert.equal(result.key, TrainingGrounds.ELF_01);
});

QUnit.test("BuildingResolver.find() Training Grounds Human 20", function(assert)
{
   // Setup.
   const raceKey = Race.HUMAN;
   const typeKey = BuildingType.TRAINING_GROUNDS;
   const level = 20;

   // Run.
   const result = BuildingResolver.find(raceKey, typeKey, level);

   // Verify.
   assert.ok(result);
   assert.equal(result.raceKey, raceKey);
   assert.equal(result.typeKey, typeKey);
   assert.equal(result.level, level);
   assert.equal(result.key, TrainingGrounds.HUMAN_20);
});

QUnit.test("BuildingResolver.find() Workshop Human 5", function(assert)
{
   // Setup.
   const raceKey = Race.HUMAN;
   const typeKey = BuildingType.WORKSHOP;
   const level = 5;

   // Run.
   const result = BuildingResolver.find(raceKey, typeKey, level);

   // Verify.
   assert.ok(result);
   assert.equal(result.raceKey, raceKey);
   assert.equal(result.typeKey, typeKey);
   assert.equal(result.level, level);
   assert.equal(result.key, Workshop.HUMAN_05);
});

QUnit.test("BuildingResolver.resolve() Luminous Signpost Elf 1", function(assert)
{
   // Setup.
   const typeKey = BuildingType.LUMINOUS_SIGNPOST_ELF;
   const buildingKey = CultureBuilding.LUMINOUS_SIGNPOST_ELF;

   // Run.
   const result = BuildingResolver.resolve(typeKey, buildingKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.typeKey, typeKey);
   assert.equal(result.key, buildingKey);
});

QUnit.test("BuildingResolver.resolve() Marble Manufactory Elf 1", function(assert)
{
   // Setup.
   const typeKey = BuildingType.MARBLE_MANUFACTORY;
   const buildingKey = MarbleManufactory.ELF_01;

   // Run.
   const result = BuildingResolver.resolve(typeKey, buildingKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.typeKey, typeKey);
   assert.equal(result.key, buildingKey);
});

QUnit.test("BuildingResolver.resolve() Workshop Human 5", function(assert)
{
   // Setup.
   const typeKey = BuildingType.WORKSHOP;
   const buildingKey = Workshop.HUMAN_05;

   // Run.
   const result = BuildingResolver.resolve(typeKey, buildingKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.typeKey, typeKey);
   assert.equal(result.key, buildingKey);
});

const BuildingTest = {};
export default BuildingTest;