import Logger from "../utility/Logger.js";

import NumberInput from "./NumberInput.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);

let selectedValue = 2;
const onChange = function(event, selected)
{
   selectedValue = selected;
   console.log("onChange() selectedValue = " + selectedValue + " " + (typeof selectedValue) + " " + JSON.stringify(selectedValue));
};
const element = React.createElement(NumberInput,
{
   initialSelectedValue: selectedValue,
   min: 0,
   max: 10,
   onChange: onChange,
});
ReactDOM.render(element, document.getElementById("panel"));