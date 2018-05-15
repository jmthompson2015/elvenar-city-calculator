import Logger from "../utility/Logger.js";

import Reducer from "../model/Reducer.js";

import BuildingTableContainer from "./BuildingTableContainer.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);

const store = Redux.createStore(Reducer.root);

const element = React.createElement(ReactRedux.Provider,
{
   store: store,
}, React.createElement(BuildingTableContainer));
ReactDOM.render(element, document.getElementById("panel"));