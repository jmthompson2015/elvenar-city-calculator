import InputValidator from "../utility/InputValidator.js";

// Factories.
let Table = React.createFactory(Reactable.Table);
let Tr = React.createFactory(Reactable.Tr);
let Td = React.createFactory(Reactable.Td);
let Tfoot = React.createFactory(Reactable.Tfoot);

class DataTable extends React.Component
{
   render()
   {
      const rowData = this.props.rowData;
      const table = this.createTable(rowData);

      const rows = [];

      const rowCount = "Row Count: " + rowData.length;
      rows.push(ReactDOMFactories.tr(
      {
         key: rows.length,
      }, ReactDOMFactories.td(
      {
         className: "f6 tl",
      }, rowCount)));
      rows.push(ReactDOMFactories.tr(
      {
         key: rows.length,
      }, ReactDOMFactories.td(
      {}, table)));
      rows.push(ReactDOMFactories.tr(
      {
         key: rows.length,
      }, ReactDOMFactories.td(
      {
         className: "f6 tl",
      }, rowCount)));

      return ReactDOMFactories.table(
      {}, ReactDOMFactories.tbody(
      {}, rows));
   }

   createFooterRow(rowData)
   {
      let firstData = rowData[0];
      let keys = Object.keys(firstData);
      let myData = {};
      keys.forEach(key =>
      {
         if (Number.isInteger(firstData[key]))
         {
            myData[key] = 0;
            rowData.forEach(data =>
            {
               myData[key] += (Number.isInteger(data[key]) ? data[key] : 0);
            });
         }
      });

      return Tfoot(
      {
         key: "footer",
         className: "ba bg-lotr-medium",
      }, this.createRow0(myData, rowData.length));
   }

   createRow0(data, key)
   {
      InputValidator.validateNotNull("data", data);
      InputValidator.validateNotNull("key", key);

      const columns = this.props.columns;
      const cells = [];
      columns.forEach(function(column)
      {
         const value = this.determineValue(column, data);
         const cell = this.determineCell(column, data, value);
         cells.push(ReactDOMFactories.td(
         {
            key: cells.length,
            className: column.className,
            value: value,
         }, (cell === undefined ? "" : cell)));
      }, this);

      return ReactDOMFactories.tr(
      {
         key: key,
         className: "ba bg-silver",
      }, cells);
   }

   createRow(data, key)
   {
      InputValidator.validateNotNull("data", data);
      InputValidator.validateNotNull("key", key);

      const columns = this.props.columns;
      const cells = [];
      columns.forEach(function(column)
      {
         const value = this.determineValue(column, data);
         const cell = this.determineCell(column, data, value);
         cells.push(Td(
         {
            key: cells.length,
            className: column.className,
            column: column.key,
            value: value,
         }, (cell === undefined ? "" : cell)));
      }, this);

      return Tr(
      {
         key: key,
         className: "striped--light-gray",
      }, cells);
   }

   createTable(rowData)
   {
      InputValidator.validateNotNull("rowData", rowData);

      const columns = this.props.columns;
      const rows = [];

      rowData.forEach(function(data, i)
      {
         rows.push(this.createRow(data, i));
      }.bind(this));

      if (this.props.showFooter && rowData.length > 0)
      {
         rows.push(this.createFooterRow(rowData));
      }

      return Table(
      {
         className: "dataTable bg-white collapse f6",
         columns: columns,
         sortable: true,
      }, rows);
   }

   determineCell(column, data, value)
   {
      InputValidator.validateNotNull("column", column);
      InputValidator.validateNotNull("data", data);

      let answer;
      const cellFunctions = this.props.cellFunctions;

      if (cellFunctions && cellFunctions[column.key])
      {
         answer = cellFunctions[column.key](data);
      }
      else
      {
         answer = value;
      }

      return answer;
   }

   determineValue(column, data)
   {
      InputValidator.validateNotNull("column", column);
      InputValidator.validateNotNull("data", data);

      let answer;
      const valueFunctions = this.props.valueFunctions;

      if (valueFunctions && valueFunctions[column.key])
      {
         answer = valueFunctions[column.key](data);
      }
      else
      {
         answer = data[column.key];
      }

      return answer;
   }
}

DataTable.propTypes = {
   columns: PropTypes.array.isRequired,
   rowData: PropTypes.array.isRequired,

   cellFunctions: PropTypes.object,
   showFooter: PropTypes.bool,
   valueFunctions: PropTypes.object,
};

DataTable.defaultProps = {
   showFooter: false,
};

export default DataTable;