import BuildingType from "../../artifact/BuildingType.js";
import BuildingUtilities from "../../artifact/BuildingUtilities.js";

import Action from "../../model/Action.js";

import Select from "../../view/Select.js";

function mapStateToProps(state, ownProps)
{
   const categoryKey = state.categoryKey;
   const values = BuildingType.keysByRaceCategory(state.raceKey, categoryKey).filter(typeKey =>
   {
      return BuildingUtilities.raceTypeHasBuildings(state.raceKey, typeKey);
   });

   const labelFunction = function(value)
   {
      const type = BuildingType.properties[value];
      return (type !== undefined ? type.name : value);
   };
   const clientProps = {};
   clientProps["data-id"] = ownProps.id;
   const initialSelectedValue = state.typeKey;

   return (
   {
      key: "typeSelect" + initialSelectedValue,
      values: values,
      clientProps: clientProps,
      initialSelectedValue: initialSelectedValue,
      labelFunction: labelFunction,
      disabled: state.typeSelectDisabled,
   });
}

function mapDispatchToProps(dispatch)
{
   return (
   {
      onChange: function(event)
      {
         const id = parseInt(event.target.dataset.id);
         const selected = event.target.value;
         dispatch(Action.setType(id, selected));
      },
   });
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Select);