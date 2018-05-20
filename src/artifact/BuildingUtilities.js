import InputValidator from "../utility/InputValidator.js";

import BuildingResolver from "./BuildingResolver.js";
import BuildingType from "./BuildingType.js";

const BuildingUtilities = {};

BuildingUtilities.cumulativeCulture = function(typeKey, buildingKey)
{
   InputValidator.validateIsString("typeKey", typeKey);
   InputValidator.validateIsString("buildingKey", buildingKey);

   return cumulative(typeKey, buildingKey, "culture");
};

BuildingUtilities.cumulativePopulation = function(typeKey, buildingKey)
{
   InputValidator.validateIsString("typeKey", typeKey);
   InputValidator.validateIsString("buildingKey", buildingKey);

   return cumulative(typeKey, buildingKey, "population");
};

BuildingUtilities.keysByRaceType = function(raceKey, typeKey)
{
   InputValidator.validateIsString("raceKey", raceKey);
   InputValidator.validateIsString("typeKey", typeKey);

   const buildingClass = BuildingResolver.buildingClass(typeKey);

   return buildingClass.keys().filter(key =>
   {
      const building = buildingClass.properties[key];
      return building.raceKey === raceKey;
   });
};

BuildingUtilities.maxLevel = function(raceKey, typeKey)
{
   InputValidator.validateIsString("raceKey", raceKey);
   InputValidator.validateIsString("typeKey", typeKey);

   const buildingClass = BuildingResolver.buildingClass(typeKey);
   const keys = BuildingUtilities.keysByRaceType(raceKey, typeKey);

   return keys.reduce((accumulator, key) =>
   {
      const building = buildingClass.properties[key];
      return (building.level > accumulator ? building.level : accumulator);
   }, 0);
};

BuildingUtilities.raceCategoryHasBuildings = function(raceKey, categoryKey)
{
   InputValidator.validateIsString("raceKey", raceKey);
   InputValidator.validateIsString("categoryKey", categoryKey);

   let answer = false;
   const typeKeys = BuildingType.keysByRaceCategory(raceKey, categoryKey);

   typeKeys.some(typeKey =>
   {
      const buildingClass = BuildingResolver.buildingClass(typeKey);
      answer = (buildingClass !== undefined && buildingClass.keys().length > 0);
      return answer;
   });

   return answer;
};

BuildingUtilities.raceTypeHasBuildings = function(raceKey, typeKey)
{
   InputValidator.validateIsString("raceKey", raceKey);
   InputValidator.validateIsString("typeKey", typeKey);

   const buildingClass = BuildingResolver.buildingClass(typeKey);

   return (buildingClass !== undefined && buildingClass.keys().length > 0);
};

function cumulative(typeKey, buildingKey, statKey)
{
   InputValidator.validateIsString("typeKey", typeKey);
   InputValidator.validateIsString("buildingKey", buildingKey);
   InputValidator.validateIsString("statKey", statKey);

   let answer = 0;
   const buildingClass = BuildingResolver.buildingClass(typeKey);
   const building = buildingClass.properties[buildingKey];

   for (let i = 1; i <= building.level; i++)
   {
      const myBuilding = BuildingResolver.find(building.raceKey, typeKey, i);
      answer += myBuilding[statKey];
   }

   return answer;
}

if (Object.freeze)
{
   Object.freeze(BuildingUtilities);
}

export default BuildingUtilities;