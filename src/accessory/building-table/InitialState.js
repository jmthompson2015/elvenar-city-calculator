import BuildingCategory from "../../artifact/BuildingCategory.js";
import BuildingType from "../../artifact/BuildingType.js";
import BuildingUtilities from "../../artifact/BuildingUtilities.js";
import Race from "../../artifact/Race.js";

import Construct from "../../model/Construct.js";

function InitialState()
{
   this.raceKey = Race.ELF;
   this.categoryKey = BuildingCategory.BASICS;
   this.typeKey = BuildingType.RESIDENCE;
   this.typeSelectDisabled = false;
   this.rowData = InitialState.initializeBuildings(this.raceKey, this.categoryKey, this.typeKey);
}

InitialState.initializeBuildings = function(raceKey, categoryKey, typeKey)
{
   const rowData = [];

   if ([BuildingCategory.CULTURE, BuildingCategory.STREETS].includes(categoryKey))
   {
      BuildingType.keysByRaceCategory(raceKey, categoryKey).forEach(typeKey =>
      {
         const construct = new Construct(rowData.length, categoryKey, raceKey, typeKey, 1, 1);
         rowData.push(construct.toPlainObject());
      });
   }
   else
   {
      const max = BuildingUtilities.maxLevel(raceKey, typeKey);

      for (let l = 1; l <= max; l++)
      {
         const construct = new Construct(rowData.length, categoryKey, raceKey, typeKey, l, 1);
         rowData.push(construct.toPlainObject());
      }
   }

   return rowData;
};

if (Object.freeze)
{
   Object.freeze(InitialState);
}

export default InitialState;