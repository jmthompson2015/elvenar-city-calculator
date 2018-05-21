import BuildingType from "../artifact/BuildingType.js";

import Action from "../model/Action.js";

import NumberInput from "../view/NumberInput.js";

function mapStateToProps(state, ownProps)
{
   const clientProps = {};
   clientProps["data-id"] = ownProps.id;

   let initialSelectedValue;
   const rowData = state.rowData[ownProps.id];

   if (rowData !== undefined)
   {
      initialSelectedValue = rowData.count;
   }

   let min = 0;
   let max = 99;

   if ([BuildingType.BUILDERS_HUT, BuildingType.MAIN_HALL].includes(rowData.typeKey))
   {
      min = 1;
   }

   if ([BuildingType.BARRACKS, BuildingType.BUILDERS_HUT, BuildingType.MAGIC_ACADEMY, BuildingType.MAIN_HALL, BuildingType.TRADER, BuildingType.TRAINING_GROUNDS].includes(rowData.typeKey))
   {
      max = 1;
   }

   return (
   {
      key: "countInput" + initialSelectedValue,
      clientProps: clientProps,
      initialSelectedValue: initialSelectedValue,
      min: min,
      max: max,
   });
}

function mapDispatchToProps(dispatch)
{
   return (
   {
      onChange: function(event)
      {
         const id = parseInt(event.target.dataset.id);
         const selected = parseInt(event.target.value);
         dispatch(Action.setCount(id, selected));
      },
   });
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(NumberInput);