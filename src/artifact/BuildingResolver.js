import InputValidator from "../utility/InputValidator.js";

import Armory from "./Armory.js";
import Barracks from "./Barracks.js";
import BuildersHut from "./BuildersHut.js";
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
import ScrollsManufactory from "./ScrollsManufactory.js";
import SilkManufactory from "./SilkManufactory.js";
import SteelManufactory from "./SteelManufactory.js";
import Trader from "./Trader.js";
import TrainingGrounds from "./TrainingGrounds.js";
import Workshop from "./Workshop.js";

var BuildingResolver = {};

BuildingResolver.TYPE_TO_CLASS = {};
BuildingResolver.TYPE_TO_CLASS[BuildingType.ARMORY] = Armory;
BuildingResolver.TYPE_TO_CLASS[BuildingType.BARRACKS] = Barracks;
BuildingResolver.TYPE_TO_CLASS[BuildingType.BUILDERS_HUT] = BuildersHut;
BuildingResolver.TYPE_TO_CLASS[BuildingType.CRYSTAL_MANUFACTORY] = CrystalManufactory;
BuildingResolver.TYPE_TO_CLASS[BuildingType.ELIXIR_MANUFACTORY] = ElixirManufactory;
BuildingResolver.TYPE_TO_CLASS[BuildingType.GEMS_MANUFACTORY] = GemsManufactory;
BuildingResolver.TYPE_TO_CLASS[BuildingType.MAGIC_ACADEMY] = MagicAcademy;
BuildingResolver.TYPE_TO_CLASS[BuildingType.MAGIC_DUST_MANUFACTORY] = MagicDustManufactory;
BuildingResolver.TYPE_TO_CLASS[BuildingType.MAIN_HALL] = MainHall;
BuildingResolver.TYPE_TO_CLASS[BuildingType.MARBLE_MANUFACTORY] = MarbleManufactory;
BuildingResolver.TYPE_TO_CLASS[BuildingType.PLANKS_MANUFACTORY] = PlanksManufactory;
BuildingResolver.TYPE_TO_CLASS[BuildingType.RESIDENCE] = Residence;
BuildingResolver.TYPE_TO_CLASS[BuildingType.SCROLLS_MANUFACTORY] = ScrollsManufactory;
BuildingResolver.TYPE_TO_CLASS[BuildingType.SILK_MANUFACTORY] = SilkManufactory;
BuildingResolver.TYPE_TO_CLASS[BuildingType.STEEL_MANUFACTORY] = SteelManufactory;
BuildingResolver.TYPE_TO_CLASS[BuildingType.TRADER] = Trader;
BuildingResolver.TYPE_TO_CLASS[BuildingType.TRAINING_GROUNDS] = TrainingGrounds;
BuildingResolver.TYPE_TO_CLASS[BuildingType.WORKSHOP] = Workshop;

CultureBuilding.keys().forEach(buildingKey =>
{
   const typeKey = buildingKey;
   BuildingResolver.TYPE_TO_CLASS[typeKey] = CultureBuilding;
});

BuildingResolver.buildingClass = function(typeKey)
{
   InputValidator.validateIsString("typeKey", typeKey);

   return BuildingResolver.TYPE_TO_CLASS[typeKey];
};

BuildingResolver.find = function(raceKey, typeKey, level)
{
   InputValidator.validateIsString("raceKey", raceKey);
   InputValidator.validateIsString("typeKey", typeKey);
   InputValidator.validateIsNumber("level", level);

   let answer;
   var buildingClass = BuildingResolver.buildingClass(typeKey);
   const keys = buildingClass.keys();

   keys.some(buildingKey =>
   {
      const building = buildingClass.properties[buildingKey];
      if (building.raceKey === raceKey && building.level === level)
      {
         answer = building;
      }
      return answer !== undefined;
   });

   return answer;
};

BuildingResolver.resolve = function(typeKey, buildingKey)
{
   InputValidator.validateNotNull("typeKey", typeKey);
   InputValidator.validateNotNull("buildingKey", buildingKey);

   var buildingClass = BuildingResolver.buildingClass(typeKey);

   return buildingClass.properties[buildingKey];
};

if (Object.freeze)
{
   Object.freeze(BuildingResolver);
}

export default BuildingResolver;