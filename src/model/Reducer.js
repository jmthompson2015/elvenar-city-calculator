import BuildingCategory from "../artifact/BuildingCategory.js";
import BuildingType from "../artifact/BuildingType.js";

import Action from "./Action.js";
import Construct from "./Construct.js";
import InitialState from "./InitialState.js";

const Reducer = {};

Reducer.root = function(state, action)
{
   LOGGER.debug("root() type = " + action.type);

   if (typeof state === 'undefined')
   {
      return new InitialState();
   }

   let newCategoryKey, newConstruct, newRowData, newTypeKey, oldConstruct;

   switch (action.type)
   {
      case Action.ADD_ROW:
         LOGGER.info("Reducer addRow");
         newCategoryKey = BuildingCategory.BASICS;
         newTypeKey = BuildingType.RESIDENCE;
         newConstruct = new Construct(state.rowData.length, newCategoryKey, state.raceKey, newTypeKey, 1, 1);
         newRowData = state.rowData.slice();
         newRowData.push(newConstruct.toPlainObject());
         return Object.assign(
         {}, state,
         {
            rowData: newRowData,
         });
      case Action.RESET:
         LOGGER.info("Reducer reset");
         newRowData = InitialState.initializeBuildings(state.raceKey);
         return Object.assign(
         {}, state,
         {
            rowData: newRowData,
         });
      case Action.SET_CATEGORY:
         LOGGER.info("Reducer id = " + action.id + " categoryKey = " + action.categoryKey);
         oldConstruct = state.rowData[action.id];
         newTypeKey = BuildingType.keysByRaceCategory(state.raceKey, action.categoryKey)[0];
         newConstruct = new Construct(action.id, action.categoryKey, oldConstruct.raceKey, newTypeKey, 1, 1);
         newRowData = state.rowData.slice();
         newRowData[action.id] = newConstruct.toPlainObject();
         return Object.assign(
         {}, state,
         {
            rowData: newRowData,
         });
      case Action.SET_CONSTRUCT:
         LOGGER.info("Reducer construct = " + action.construct + " " + (typeof action.construct) + " " + JSON.stringify(action.construct));
         newRowData = state.rowData.slice();
         newRowData[action.construct.id] = action.construct.toPlainObject();
         return Object.assign(
         {}, state,
         {
            rowData: newRowData,
         });
      case Action.SET_COUNT:
         LOGGER.info("Reducer id = " + action.id + " count = " + action.count);
         oldConstruct = state.rowData[action.id];
         newConstruct = new Construct(action.id, oldConstruct.categoryKey, oldConstruct.raceKey, oldConstruct.typeKey, oldConstruct.level, action.count);
         newRowData = state.rowData.slice();
         newRowData[action.id] = newConstruct.toPlainObject();
         return Object.assign(
         {}, state,
         {
            rowData: newRowData,
         });
      case Action.SET_LEVEL:
         LOGGER.info("Reducer id = " + action.id + " level = " + action.level);
         oldConstruct = state.rowData[action.id];
         newConstruct = new Construct(action.id, oldConstruct.categoryKey, oldConstruct.raceKey, oldConstruct.typeKey, action.level, oldConstruct.count);
         newRowData = state.rowData.slice();
         newRowData[action.id] = newConstruct.toPlainObject();
         return Object.assign(
         {}, state,
         {
            rowData: newRowData,
         });
      case Action.SET_RACE:
         LOGGER.info("Reducer raceKey = " + action.raceKey);
         newRowData = (state.raceKey !== action.raceKey ? InitialState.initializeBuildings(action.raceKey) : state.rowData);
         return Object.assign(
         {}, state,
         {
            raceKey: action.raceKey,
            rowData: newRowData,
         });
      case Action.SET_TIME_SPAN:
         LOGGER.info("Reducer timeSpanKey = " + action.timeSpanKey);
         return Object.assign(
         {}, state,
         {
            timeSpanKey: action.timeSpanKey,
         });
      case Action.SET_TYPE:
         LOGGER.info("Reducer id = " + action.id + " typeKey = " + action.typeKey);
         oldConstruct = state.rowData[action.id];
         newConstruct = new Construct(action.id, oldConstruct.categoryKey, oldConstruct.raceKey, action.typeKey, 1, 1);
         newRowData = state.rowData.slice();
         newRowData[action.id] = newConstruct.toPlainObject();
         return Object.assign(
         {}, state,
         {
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