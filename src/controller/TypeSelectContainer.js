import Building from "../artifact/Building.js";
import BuildingType from "../artifact/BuildingType.js";

import Action from "../model/Action.js";

import Select from "../view/Select.js";

function mapStateToProps(state, ownProps)
{
   const categoryKey = ownProps.buildingCategoryKey;
   const values = BuildingType.keysByCategory(state.raceKey, categoryKey).filter(typeKey =>
   {
      return Building.keysByType(state.raceKey, typeKey).length > 0;
   });

   const labelFunction = function(value)
   {
      const type = BuildingType.properties[value];
      return (type !== undefined ? type.name : value);
   };
   const clientProps = {};
   clientProps["data-id"] = ownProps.id;
   const initialSelectedValue = state.rowData[ownProps.id].typeKey;

   return (
   {
      key: "typeSelect" + initialSelectedValue,
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
         dispatch(Action.setType(id, selected));
      },
   });
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Select);