import Race from "../artifact/Race.js";

import Action from "../model/Action.js";

import Select from "../view/Select.js";

function mapStateToProps(state)
{
   const values = Race.keys();
   const initialSelectedValue = state.raceKey;
   const labelFunction = function(value)
   {
      const race = Race.properties[value];
      return (race !== undefined ? race.name : value);
   };

   return (
   {
      key: "raceSelect" + initialSelectedValue,
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
         dispatch(Action.setRace(selected));
      },
   });
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Select);