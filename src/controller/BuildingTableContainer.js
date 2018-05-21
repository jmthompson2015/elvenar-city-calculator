import BuildingResolver from "../artifact/BuildingResolver.js";
import BuildingUtilities from "../artifact/BuildingUtilities.js";

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
      const building = BuildingResolver.find(row.raceKey, row.typeKey, row.level);
      if (building === undefined)
      {
         console.warn("can't find building for raceKey = " + row.raceKey + " typeKey = " + row.typeKey + " level = " + row.level);
      }
      const count = row.count;
      const area = count * building.width * building.height;
      const coin = valueOrUndefined(Math.round(count * building.coin));
      const culture = valueOrUndefined(count * BuildingUtilities.cumulativeCulture(building.typeKey, building.key));
      const population = valueOrUndefined(count * BuildingUtilities.cumulativePopulation(building.typeKey, building.key));
      const supplies = valueOrUndefined(Math.round(count * building.supplies));
      const tier1Product = valueOrUndefined(count * building.tier1Product);
      const tier2Product = valueOrUndefined(count * building.tier2Product);
      const tier3Product = valueOrUndefined(count * building.tier3Product);
      return Object.assign(
      {}, row,
      {
         area: area,
         coin: coin,
         culture: culture,
         population: population,
         supplies: supplies,
         tier1Product: tier1Product,
         tier2Product: tier2Product,
         tier3Product: tier3Product,
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

function valueOrUndefined(value)
{
   return (value !== undefined && !isNaN(value) && Math.abs(value) !== 0 ? value : undefined);
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
      isinfooter: "true",
   },
   {
      key: "area",
      label: "Area",
      className: "tr",
      isinfooter: "true",
   },
   {
      key: "culture",
      label: "Culture",
      className: "tr",
      isinfooter: "true",
   },
   {
      key: "population",
      label: "Population",
      className: "tr",
      isinfooter: "true",
   },
   {
      key: "coin",
      label: "Coin/h",
      className: "tr",
      isinfooter: "true",
   },
   {
      key: "supplies",
      label: "Supplies/h",
      className: "tr",
      isinfooter: "true",
   },
   {
      key: "tier1Product",
      label: "Tier 1 Product/h",
      className: "tr",
      isinfooter: "true",
   },
   {
      key: "tier2Product",
      label: "Tier 2 Product/h",
      className: "tr",
      isinfooter: "true",
   },
   {
      key: "tier3Product",
      label: "Tier 3 Product/h",
      className: "tr",
      isinfooter: "true",
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
         const building = BuildingResolver.find(value.raceKey, value.typeKey, value.level);
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