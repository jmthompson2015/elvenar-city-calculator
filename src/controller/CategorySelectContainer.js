import BuildingCategory from "../artifact/BuildingCategory.js";
import BuildingUtilities from "../artifact/BuildingUtilities.js";

import Action from "../model/Action.js";

import Select from "../view/Select.js";

function mapStateToProps(state, ownProps)
{
   const values = BuildingCategory.keys().filter(categoryKey =>
   {
      return BuildingUtilities.raceCategoryHasBuildings(state.raceKey, categoryKey);
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
      key: "categorySelect" + initialSelectedValue,
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