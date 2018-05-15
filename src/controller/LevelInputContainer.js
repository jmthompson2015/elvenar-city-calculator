import Action from "../model/Action.js";

import NumberInput from "../view/NumberInput.js";

function mapStateToProps(state, ownProps)
{
   const values = [];
   for (let i = 1; i <= ownProps.max; i++)
   {
      values.push(i);
   }
   const clientProps = {};
   clientProps["data-id"] = ownProps.id;
   const initialSelectedValue = state.rowData[ownProps.id].level;

   return (
   {
      values: values,
      clientProps: clientProps,
      initialSelectedValue: initialSelectedValue,
      min: 1,
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
         dispatch(Action.setLevel(id, selected));
      },
   });
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(NumberInput);