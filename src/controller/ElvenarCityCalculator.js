import Logger from "../utility/Logger.js";

import BuildingCategory from "../artifact/BuildingCategory.js";
import BuildingType from "../artifact/BuildingType.js";
import Race from "../artifact/Race.js";

import Action from "../model/Action.js";
import Construct from "../model/Construct.js";
import Reducer from "../model/Reducer.js";

import ReactUtilities from "../view/ReactUtilities.js";

import BuildingTableContainer from "./BuildingTableContainer.js";
import RaceSelectContainer from "./RaceSelectContainer.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);

const store = Redux.createStore(Reducer.root);

const raceSelect = React.createElement(ReactRedux.Provider,
{
   key: "raceSelect",
   store: store,
}, React.createElement(RaceSelectContainer));
const buildingTable = React.createElement(ReactRedux.Provider,
{
   store: store,
}, React.createElement(BuildingTableContainer));
const addRowButton = ReactDOMFactories.button(
{
   key: "addRowButton",
   onClick: function()
   {
      console.log("addRowButton onClick()");
      store.dispatch(Action.addRow());
   },
}, "Add Row");
const zarekLockElfButton = ReactDOMFactories.button(
{
   key: "zarekLockElfButton",
   onClick: function()
   {
      console.log("zarekLockElfButton onClick()");
      store.dispatch(Action.setRace(Race.ELF));
      store.dispatch(Action.setLevel(0, 9)); // Main Hall
      store.dispatch(Action.setLevel(1, 3)); // Builder's Hut
      store.dispatch(Action.setLevel(2, 9)); // Residence
      store.dispatch(Action.setCount(2, 19)); // Residence
      store.dispatch(Action.setLevel(3, 9)); // Workshop
      store.dispatch(Action.setCount(3, 7)); // Workshop
      const state = store.getState();
      let id = state.rowData.length;
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.BASIC, state.raceKey, BuildingType.MAGIC_ACADEMY, 2, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.BASIC, state.raceKey, BuildingType.TRADER, 1, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.MANUFACTORY, state.raceKey, BuildingType.STEEL_MANUFACTORY, 8, 3)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.MANUFACTORY, state.raceKey, BuildingType.CRYSTAL_MANUFACTORY, 10, 3)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.MANUFACTORY, state.raceKey, BuildingType.ELIXIR_MANUFACTORY, 4, 3)));
   },
}, "Zarek Lock (Elf)");
const zarekLockHumanButton = ReactDOMFactories.button(
{
   key: "zarekLockHumanButton",
   onClick: function()
   {
      console.log("zarekLockHumanButton onClick()");
      store.dispatch(Action.setRace(Race.HUMAN));
      store.dispatch(Action.setLevel(0, 7)); // Main Hall
      store.dispatch(Action.setLevel(1, 2)); // Builder's Hut
      store.dispatch(Action.setLevel(2, 8)); // Residence
      store.dispatch(Action.setCount(2, 20)); // Residence
      store.dispatch(Action.setLevel(3, 6)); // Workshop
      store.dispatch(Action.setCount(3, 7)); // Workshop
      const state = store.getState();
      let id = state.rowData.length;
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.BASIC, state.raceKey, BuildingType.MAGIC_ACADEMY, 2, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.BASIC, state.raceKey, BuildingType.TRADER, 1, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.MANUFACTORY, state.raceKey, BuildingType.STEEL_MANUFACTORY, 10, 3)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.MANUFACTORY, state.raceKey, BuildingType.CRYSTAL_MANUFACTORY, 4, 3)));
   },
}, "Zarek Lock (Human)");
const resetButton = ReactDOMFactories.button(
{
   key: "resetButton",
   onClick: function()
   {
      console.log("resetButton onClick()");
      store.dispatch(Action.reset());
   },
}, "Reset");

const raceCell = ReactUtilities.createCell(["Race: ", raceSelect], "raceCell", "pt2 tc");
const tableCell = ReactUtilities.createCell(buildingTable, "tableCell", "ph2");
const buttonCell = ReactUtilities.createCell([addRowButton, zarekLockElfButton, zarekLockHumanButton, resetButton], "buttonCell", "pb2 tc");

const rows = [];
rows.push(ReactUtilities.createRow(raceCell, "raceRow"));
rows.push(ReactUtilities.createRow(tableCell, "tableRow"));
rows.push(ReactUtilities.createRow(buttonCell, "buttonRow"));

const table = ReactUtilities.createTable(rows, "table", "bg-elvenar center");
ReactDOM.render(table, document.getElementById("tablePanel"));