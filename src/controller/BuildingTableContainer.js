import Building from "../artifact/Building.js";

import Action from "../model/Action.js";

import DataTable from "../view/DataTable.js";

import CategorySelectContainer from "./CategorySelectContainer.js";
import TypeSelectContainer from "./TypeSelectContainer.js";
import CountInputContainer from "./CountInputContainer.js";
import LevelInputContainer from "./LevelInputContainer.js";

function mapStateToProps(state)
{
   const rowDataIn = state.rowData;
   const rowData = rowDataIn.map(row =>
   {
      const building = Building.find(row.raceKey, row.typeKey, row.level);
      if (building === undefined)
      {
         console.warn("can't find building for raceKey = " + row.raceKey + " typeKey = " + row.typeKey + " level = " + row.level);
      }
      const count = row.count;
      const area = count * building.width * building.height;
      const population = count * Building.cumulativePopulation(building.key);
      const culture = count * Building.cumulativeCulture(building.key);
      return Object.assign(
      {}, row,
      {
         area: area,
         population: population,
         culture: culture,
      });
   });
   const cellFunctions = createCellFunctions();

   return (
   {
      columns: TableColumns,
      rowData: rowData,
      cellFunctions: cellFunctions,
      showFooter: true,
   });
}

function mapDispatchToProps(dispatch)
{
   return (
   {
      categoryChanged: function(id, category)
      {
         dispatch(Action.setCategory(id, category.key));
      },
      typeChanged: function(id, type)
      {
         dispatch(Action.setType(id, type.key));
      },
      levelChanged: function(id, level)
      {
         dispatch(Action.setLevel(id, level));
      },
      countChanged: function(id, count)
      {
         dispatch(Action.setCount(id, count));
      },
   });
}

const TableColumns = [
   {
      key: "category",
      label: "Category",
      className: "tl",
   },
   {
      key: "type",
      label: "Type",
      className: "tl",
   },
   {
      key: "level",
      label: "Level",
      className: "tr",
   },
   {
      key: "size",
      label: "Size",
      className: "tc",
   },
   {
      key: "count",
      label: "Count",
      className: "tr",
   },
   {
      key: "area",
      label: "Area",
      className: "tr",
   },
   {
      key: "population",
      label: "Population",
      className: "tr",
   },
   {
      key: "culture",
      label: "Culture",
      className: "tr",
   },
];

function createCellFunctions()
{
   const cellFunctions = {};

   cellFunctions.category = function(value)
   {
      let answer;
      if (value.categoryKey !== undefined)
      {
         answer = React.createElement(CategorySelectContainer,
         {
            id: value.id,
         });
      }
      return answer;
   };

   cellFunctions.type = function(value)
   {
      let answer;
      if (value.categoryKey !== undefined && value.typeKey !== undefined)
      {
         answer = React.createElement(TypeSelectContainer,
         {
            id: value.id,
            buildingCategoryKey: value.categoryKey,
         });
      }
      return answer;
   };

   cellFunctions.level = function(value)
   {
      let answer;
      if (value.typeKey !== undefined)
      {
         answer = React.createElement(LevelInputContainer,
         {
            id: value.id,
            typeKey: value.typeKey,
         });
      }
      return answer;
   };

   cellFunctions.size = function(value)
   {
      let answer;
      if (value.raceKey !== undefined && value.typeKey !== undefined)
      {
         const building = Building.find(value.raceKey, value.typeKey, value.level);
         if (building !== undefined)
         {
            answer = building.width + "x" + building.height;
         }
      }
      return answer;
   };

   cellFunctions.count = function(value)
   {
      let answer;
      if (value.typeKey !== undefined)
      {
         answer = React.createElement(CountInputContainer,
         {
            id: value.id,
         });
      }
      return answer;
   };

   return cellFunctions;
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(DataTable);