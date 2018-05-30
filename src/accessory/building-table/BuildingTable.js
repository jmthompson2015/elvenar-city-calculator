import Logger from "../../utility/Logger.js";

import ReactUtilities from "../../view/ReactUtilities.js";

import CategorySelectContainer from "../../controller/CategorySelectContainer.js";
import RaceSelectContainer from "../../controller/RaceSelectContainer.js";
import TimeSpanSelectContainer from "../../controller/TimeSpanSelectContainer.js";

import BuildingTableContainer from "./BuildingTableContainer.js";
import Reducer from "./Reducer.js";
import TypeSelectContainer from "./TypeSelectContainer.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);

const store = Redux.createStore(Reducer.root);

const raceSelect = React.createElement(ReactRedux.Provider,
{
   key: "raceSelect",
   store: store,
}, React.createElement(RaceSelectContainer));
const timeSpanSelect = React.createElement(ReactRedux.Provider,
{
   key: "timeSpanSelect",
   store: store,
}, React.createElement(TimeSpanSelectContainer));
const categorySelect = React.createElement(ReactRedux.Provider,
{
   key: "categorySelect",
   store: store,
}, React.createElement(CategorySelectContainer,
{
   id: 0,
   initialSelectedValue: store.getState().categoryKey,
}));
const typeSelect = React.createElement(ReactRedux.Provider,
{
   key: "typeSelect",
   store: store,
}, React.createElement(TypeSelectContainer,
{
   id: 0,
   buildingCategoryKey: store.getState().categoryKey,
   initialSelectedValue: store.getState().typeKey,
}));
const buildingTable = React.createElement(ReactRedux.Provider,
{
   store: store,
   className: "bg-elvenar center",
}, React.createElement(BuildingTableContainer,
{
   className: "bg-elvenar center",
}));

const cells = [];
cells.push(ReactUtilities.createCell("Race: ", "raceLabel"));
cells.push(ReactUtilities.createCell(raceSelect, "raceSelect", "pa2"));
cells.push(ReactUtilities.createCell("Time Span: ", "timeSpanLabel"));
cells.push(ReactUtilities.createCell(timeSpanSelect, "timeSpanSelect", "pa2"));
cells.push(ReactUtilities.createCell("Category: ", "categoryLabel"));
cells.push(ReactUtilities.createCell(categorySelect, "categorySelect", "pa2"));
cells.push(ReactUtilities.createCell("Type: ", "typeLabel"));
cells.push(ReactUtilities.createCell(typeSelect, "typeSelect", "pa2"));
const selectRow = ReactUtilities.createRow(cells, "selectRow");
const selectPanel = ReactUtilities.createTable(selectRow, "table", "bg-elvenar center pa2");

ReactDOM.render(selectPanel, document.getElementById("selectPanel"));
ReactDOM.render(buildingTable, document.getElementById("tablePanel"));