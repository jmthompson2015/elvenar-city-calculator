import Logger from "../utility/Logger.js";

import BuildingCategory from "../artifact/BuildingCategory.js";

import Reducer from "../model/Reducer.js";

import TypeSelectContainer from "./TypeSelectContainer.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);

const store = Redux.createStore(Reducer.root);
const element = React.createElement(ReactRedux.Provider,
{
   store: store,
}, React.createElement(TypeSelectContainer,
{
   buildingCategoryKey: BuildingCategory.BASICS,
   id: 2,
}));
ReactDOM.render(element, document.getElementById("panel"));