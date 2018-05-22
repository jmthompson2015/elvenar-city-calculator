import BuildingCategory from "../../artifact/BuildingCategory.js";
import BuildingType from "../../artifact/BuildingType.js";

import Action from "./Action.js";
import InitialState from "./InitialState.js";

const Reducer = {};

Reducer.root = function(state, action)
{
   LOGGER.debug("root() type = " + action.type);

   if (typeof state === 'undefined')
   {
      return new InitialState();
   }

   let newRowData, newTypeKey, newTypeSelectDisabled;

   switch (action.type)
   {
      case Action.SET_CATEGORY:
         LOGGER.info("Reducer id = " + action.id + " categoryKey = " + action.categoryKey);
         newTypeKey = BuildingType.keysByRaceCategory(state.raceKey, action.categoryKey)[0];
         newTypeSelectDisabled = [BuildingCategory.CULTURE, BuildingCategory.STREETS].includes(action.categoryKey);
         newRowData = InitialState.initializeBuildings(state.raceKey, action.categoryKey, newTypeKey);
         return Object.assign(
         {}, state,
         {
            categoryKey: action.categoryKey,
            typeKey: newTypeKey,
            typeSelectDisabled: newTypeSelectDisabled,
            rowData: newRowData,
         });
      case Action.SET_RACE:
         LOGGER.info("Reducer raceKey = " + action.raceKey);
         newRowData = InitialState.initializeBuildings(action.raceKey, state.categoryKey, state.typeKey);
         return Object.assign(
         {}, state,
         {
            raceKey: action.raceKey,
            rowData: newRowData,
         });
      case Action.SET_TYPE:
         LOGGER.info("Reducer id = " + action.id + " typeKey = " + action.typeKey);
         newRowData = InitialState.initializeBuildings(state.raceKey, state.categoryKey, action.typeKey);
         return Object.assign(
         {}, state,
         {
            typeKey: action.typeKey,
            rowData: newRowData,
         });
      default:
         LOGGER.warn("Reducer.root: Unhandled action type: " + action.type);
         return state;
   }
};

if (Object.freeze)
{
   Object.freeze(Reducer);
}

export default Reducer;