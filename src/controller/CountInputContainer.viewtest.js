import Logger from "../utility/Logger.js";

import Reducer from "../model/Reducer.js";

import CountInputContainer from "./CountInputContainer.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);

const store = Redux.createStore(Reducer.root);

const element = React.createElement(ReactRedux.Provider,
{
   store: store,
}, React.createElement(CountInputContainer,
{
   id: 2,
}));
ReactDOM.render(element, document.getElementById("panel"));