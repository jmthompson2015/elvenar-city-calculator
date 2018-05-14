import BuildingCategory from "../artifact/BuildingCategory.js";
import BuildingType from "../artifact/BuildingType.js";
import Race from "../artifact/Race.js";

import Construct from "./Construct.js";

function InitialState()
{
   this.raceKey = Race.ELF;

   this.rowData = [];
   let construct = new Construct(this.rowData.length, BuildingCategory.MAIN_HALL, this.raceKey, BuildingType.MAIN_HALL, 1, 1);
   this.rowData.push(construct.toPlainObject());
   construct = new Construct(this.rowData.length, BuildingCategory.BUILDERS_HUT, this.raceKey, BuildingType.BUILDERS_HUT, 1, 1);
   this.rowData.push(construct.toPlainObject());
   construct = new Construct(this.rowData.length, BuildingCategory.BASIC, this.raceKey, BuildingType.RESIDENCE, 1, 1);
   this.rowData.push(construct.toPlainObject());
   construct = new Construct(this.rowData.length, BuildingCategory.BASIC, this.raceKey, BuildingType.WORKSHOP, 1, 1);
   this.rowData.push(construct.toPlainObject());
}

if (Object.freeze)
{
   Object.freeze(InitialState);
}

export default InitialState;