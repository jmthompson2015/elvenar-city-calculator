import BuildingCategory from "../artifact/BuildingCategory.js";
import BuildingType from "../artifact/BuildingType.js";
import Race from "../artifact/Race.js";

import Construct from "./Construct.js";

function InitialState()
{
   this.raceKey = Race.ELF;
   this.rowData = InitialState.initializeBuildings(this.raceKey);
}

InitialState.initializeBuildings = function(raceKey)
{
   const rowData = [];

   let construct = new Construct(rowData.length, BuildingCategory.START, raceKey, BuildingType.MAIN_HALL, 1, 1);
   rowData.push(construct.toPlainObject());
   construct = new Construct(rowData.length, BuildingCategory.START, raceKey, BuildingType.BUILDERS_HUT, 1, 1);
   rowData.push(construct.toPlainObject());
   construct = new Construct(rowData.length, BuildingCategory.BASICS, raceKey, BuildingType.RESIDENCE, 1, 1);
   rowData.push(construct.toPlainObject());
   construct = new Construct(rowData.length, BuildingCategory.BASICS, raceKey, BuildingType.WORKSHOP, 1, 1);
   rowData.push(construct.toPlainObject());

   return rowData;
};

if (Object.freeze)
{
   Object.freeze(InitialState);
}

export default InitialState;