import InputValidator from "../utility/InputValidator.js";

import Building from "../artifact/Building.js";

import Action from "../model/Action.js";

import NumberInput from "../view/NumberInput.js";

function mapStateToProps(state, ownProps)
{
   InputValidator.validateIsNumber("ownProps.id", ownProps.id);
   InputValidator.validateIsString("ownProps.typeKey", ownProps.typeKey);

   const id = ownProps.id;
   const typeKey = ownProps.typeKey;
   const max = Building.maxLevel(state.raceKey, typeKey);
   const clientProps = {};
   clientProps["data-id"] = id;
   const initialSelectedValue = state.rowData[id].level;

   return (
   {
      key: "levelInput" + max,
      clientProps: clientProps,
      initialSelectedValue: initialSelectedValue,
      min: 1,
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
         dispatch(Action.setLevel(id, selected));
      },
   });
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(NumberInput);