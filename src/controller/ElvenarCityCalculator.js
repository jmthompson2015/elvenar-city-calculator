import Logger from "../utility/Logger.js";

import Action from "../model/Action.js";
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
const buttonCell = ReactUtilities.createCell([addRowButton, resetButton], "buttonCell", "pb2 tc");

const rows = [];
rows.push(ReactUtilities.createRow(raceCell, "raceRow"));
rows.push(ReactUtilities.createRow(tableCell, "tableRow"));
rows.push(ReactUtilities.createRow(buttonCell, "buttonRow"));

const table = ReactUtilities.createTable(rows, "table", "bg-elvenar center");
ReactDOM.render(table, document.getElementById("tablePanel"));