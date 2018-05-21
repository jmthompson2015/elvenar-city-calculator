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
      store.dispatch(Action.reset());
      store.dispatch(Action.setRace(Race.ELF));
      store.dispatch(Action.setLevel(0, 9)); // Main Hall
      store.dispatch(Action.setLevel(1, 3)); // Builder's Hut
      store.dispatch(Action.setLevel(2, 11)); // Residence
      store.dispatch(Action.setCount(2, 2)); // Residence
      store.dispatch(Action.setLevel(3, 9)); // Workshop
      store.dispatch(Action.setCount(3, 7)); // Workshop
      const state = store.getState();
      let id = state.rowData.length;
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.BASICS, state.raceKey, BuildingType.RESIDENCE, 10, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.BASICS, state.raceKey, BuildingType.RESIDENCE, 9, 16)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.BASICS, state.raceKey, BuildingType.RESIDENCE, 7, 4)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.BASICS, state.raceKey, BuildingType.MAGIC_ACADEMY, 2, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.BASICS, state.raceKey, BuildingType.TRADER, 1, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.STREETS, state.raceKey, BuildingType.SIMPLE_TRAIL_ELF, 1, 75)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.MILITARY, state.raceKey, BuildingType.BARRACKS, 4, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.MILITARY, state.raceKey, BuildingType.ARMORY, 4, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.MILITARY, state.raceKey, BuildingType.TRAINING_GROUNDS, 4, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.GOODS, state.raceKey, BuildingType.STEEL_MANUFACTORY, 8, 3)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.GOODS, state.raceKey, BuildingType.CRYSTAL_MANUFACTORY, 10, 3)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.GOODS, state.raceKey, BuildingType.ELIXIR_MANUFACTORY, 4, 2)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.GOODS, state.raceKey, BuildingType.GEMS_MANUFACTORY, 2, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.GOODS, state.raceKey, BuildingType.MAGIC_DUST_MANUFACTORY, 2, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.CULTURE, state.raceKey, BuildingType.GIFT_OF_THE_GARDEN_FAIRY_ELF, 1, 8)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.CULTURE, state.raceKey, BuildingType.STATUE_OF_THE_SACRED_SAGE_ELF, 1, 8)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.CULTURE, state.raceKey, BuildingType.SPOT_OF_WHISPERING_TREES_ELF, 1, 3)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.CULTURE, state.raceKey, BuildingType.ANCIENT_RUNES_ELF, 1, 3)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.CULTURE, state.raceKey, BuildingType.ORANGE_BERRIES_TREES_ELF, 1, 2)));
   },
}, "Zarek Lock (Elf)");
const zarekLockHumanButton = ReactDOMFactories.button(
{
   key: "zarekLockHumanButton",
   onClick: function()
   {
      console.log("zarekLockHumanButton onClick()");
      store.dispatch(Action.reset());
      store.dispatch(Action.setRace(Race.HUMAN));
      store.dispatch(Action.setLevel(0, 9)); // Main Hall
      store.dispatch(Action.setLevel(1, 2)); // Builder's Hut
      store.dispatch(Action.setLevel(2, 8)); // Residence
      store.dispatch(Action.setCount(2, 22)); // Residence
      store.dispatch(Action.setLevel(3, 10)); // Workshop
      store.dispatch(Action.setCount(3, 1)); // Workshop
      const state = store.getState();
      let id = state.rowData.length;
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.BASICS, state.raceKey, BuildingType.RESIDENCE, 10, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.BASICS, state.raceKey, BuildingType.WORKSHOP, 9, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.BASICS, state.raceKey, BuildingType.WORKSHOP, 8, 2)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.BASICS, state.raceKey, BuildingType.WORKSHOP, 7, 3)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.BASICS, state.raceKey, BuildingType.MAGIC_ACADEMY, 2, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.BASICS, state.raceKey, BuildingType.TRADER, 1, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.STREETS, state.raceKey, BuildingType.SIMPLE_TRAIL_HUMAN, 1, 75)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.MILITARY, state.raceKey, BuildingType.BARRACKS, 4, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.MILITARY, state.raceKey, BuildingType.ARMORY, 5, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.MILITARY, state.raceKey, BuildingType.TRAINING_GROUNDS, 1, 1)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.GOODS, state.raceKey, BuildingType.STEEL_MANUFACTORY, 10, 3)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.GOODS, state.raceKey, BuildingType.CRYSTAL_MANUFACTORY, 4, 3)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.CULTURE, state.raceKey, BuildingType.GLORIOUS_STATUE_HUMAN, 1, 10)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.CULTURE, state.raceKey, BuildingType.BLUE_FLOWERS_HUMAN, 1, 3)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.CULTURE, state.raceKey, BuildingType.HOLY_CODEX_HUMAN, 1, 2)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.CULTURE, state.raceKey, BuildingType.DELICATESSEN_BUTCHER_HUMAN, 1, 2)));
      store.dispatch(Action.setConstruct(new Construct(id++, BuildingCategory.CULTURE, state.raceKey, BuildingType.RED_FLOWERS_HUMAN, 1, 2)));
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