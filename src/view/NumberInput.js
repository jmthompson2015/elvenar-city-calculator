/*
 * Provides an HTML input for numbers (a spinner component).
 */
class NumberInput extends React.Component
{
   constructor(props)
   {
      super(props);

      this.state = {
         selectedValue: this.props.initialSelectedValue,
      };
   }

   render()
   {
      const inputProps = {
         type: "number",
         className: "tr",
         min: this.props.min,
         max: this.props.max,
         value: this.state.selectedValue,
         onChange: this.handleChange.bind(this),
      };

      const clientProps = this.props.clientProps;

      if (clientProps)
      {
         Object.getOwnPropertyNames(clientProps).forEach(function(key)
         {
            inputProps[key] = clientProps[key];
         });
      }

      let answer;

      if (this.props.min === this.props.max)
      {
         answer = ReactDOMFactories.span(inputProps, this.props.min);
      }
      else
      {
         answer = ReactDOMFactories.input(inputProps);
      }

      return answer;
   }

   handleChange(event)
   {
      const selectedValue = parseInt(event.target.value);
      this.setState(
      {
         selectedValue: selectedValue,
      });

      const onChange = this.props.onChange;

      if (onChange)
      {
         onChange(event, selectedValue);
      }
   }
}

NumberInput.propTypes = {
   // Client properties. (optional)
   clientProps: PropTypes.object,
   // Initially selected value. (optional)
   initialSelectedValue: PropTypes.number,
   // Maximum value. (optional)
   max: PropTypes.number,
   // Minimum value. (optional)
   min: PropTypes.number,
   // Function called when the selection changes. (optional)
   onChange: PropTypes.func,
};

export default NumberInput;