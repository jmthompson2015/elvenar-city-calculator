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

   return (
   {
      clientProps: clientProps,
      initialSelectedValue: initialSelectedValue,
      min: 0,
      max: 999,
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