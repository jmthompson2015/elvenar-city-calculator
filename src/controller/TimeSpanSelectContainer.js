import TimeSpan from "../artifact/TimeSpan.js";

import Action from "../model/Action.js";

import Select from "../view/Select.js";

function mapStateToProps(state)
{
   const values = TimeSpan.keys();
   const initialSelectedValue = state.timeSpanKey;
   const labelFunction = function(value)
   {
      const race = TimeSpan.properties[value];
      return (race !== undefined ? race.name : value);
   };

   return (
   {
      key: "timeSpanSelect" + initialSelectedValue,
      values: values,
      initialSelectedValue: initialSelectedValue,
      labelFunction: labelFunction,
   });
}

function mapDispatchToProps(dispatch)
{
   return (
   {
      onChange: function(event)
      {
         const selected = event.target.value;
         dispatch(Action.setTimeSpan(selected));
      },
   });
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Select);