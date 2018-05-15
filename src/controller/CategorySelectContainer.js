import Building from "../artifact/Building.js";
import BuildingCategory from "../artifact/BuildingCategory.js";

import Action from "../model/Action.js";

import Select from "../view/Select.js";

function mapStateToProps(state, ownProps)
{
   const values = BuildingCategory.keys().filter(categoryKey =>
   {
      return Building.keysByCategory(state.raceKey, categoryKey).length > 0;
   });
   const labelFunction = function(value)
   {
      const category = BuildingCategory.properties[value];
      return (category !== undefined ? category.name : value);
   };
   const clientProps = {};
   clientProps["data-id"] = ownProps.id;
   const initialSelectedValue = state.rowData[ownProps.id].categoryKey;

   return (
   {
      values: values,
      clientProps: clientProps,
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
         const id = parseInt(event.target.dataset.id);
         const selected = event.target.value;
         dispatch(Action.setCategory(id, selected));
      },
   });
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Select);