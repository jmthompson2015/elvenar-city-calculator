import BuildingCategory from "../../artifact/BuildingCategory.js";
import BuildingType from "../../artifact/BuildingType.js";
import BuildingResolver from "../../artifact/BuildingResolver.js";
import BuildingUtilities from "../../artifact/BuildingUtilities.js";

import DataTable from "../../view/DataTable.js";

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
      let product;
      if (building.tier1Product !== undefined)
      {
         product = valueOrUndefined(count * building.tier1Product);
      }
      else if (building.tier2Product !== undefined)
      {
         product = valueOrUndefined(count * building.tier2Product);
      }
      else if (building.tier3Product !== undefined)
      {
         product = valueOrUndefined(count * building.tier3Product);
      }
      const culturePerArea = (culture !== undefined ? culture : 0) / area;
      const populationPerArea = (population !== undefined ? population : 0) / area;
      const coinPerArea = (coin !== undefined ? coin : 0) / area;
      const suppliesPerArea = (supplies !== undefined ? supplies : 0) / area;
      const productPerArea = (product !== undefined ? product : 0) / area;
      return Object.assign(
      {}, row,
      {
         name: building.name,
         area: area,
         coin: coin,
         culture: culture,
         population: population,
         supplies: supplies,
         product: product,
         culturePerArea: culturePerArea,
         populationPerArea: populationPerArea,
         coinPerArea: coinPerArea,
         suppliesPerArea: suppliesPerArea,
         productPerArea: productPerArea,
      });
   });
   const cellFunctions = createCellFunctions();

   return (
   {
      columns: TableColumns,
      rowData: rowData,
      cellFunctions: cellFunctions,
   });
}

function valueOrUndefined(value)
{
   return (value !== undefined && !isNaN(value) && Math.abs(value) !== 0 ? value : undefined);
}

const TableColumns = [
   {
      key: "name",
      label: "Name",
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
      key: "area",
      label: "Area",
      className: "tr",
   },
   {
      key: "culture",
      label: "Culture",
      className: "tr",
   },
   {
      key: "population",
      label: "Population",
      className: "tr",
   },
   {
      key: "coin",
      label: "Coin /h",
      className: "tr",
   },
   {
      key: "supplies",
      label: "Supplies /h",
      className: "tr",
   },
   {
      key: "product",
      label: "Product /h",
      className: "tr",
   },
   {
      key: "culturePerArea",
      label: "Culture /Area",
      className: "tr",
   },
   {
      key: "populationPerArea",
      label: "Population /Area",
      className: "tr",
   },
   {
      key: "coinPerArea",
      label: "Coin /Area",
      className: "tr",
   },
   {
      key: "suppliesPerArea",
      label: "Supplies /Area",
      className: "tr",
   },
   {
      key: "productPerArea",
      label: "Product /Area",
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
         answer = BuildingCategory.properties[value.categoryKey].name;
      }
      return answer;
   };

   cellFunctions.type = function(value)
   {
      let answer;
      if (value.typeKey !== undefined)
      {
         answer = BuildingType.properties[value.typeKey].name;
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

   cellFunctions.culturePerArea = function(value)
   {
      return value.culturePerArea.toFixed(2);
   };

   cellFunctions.populationPerArea = function(value)
   {
      return value.populationPerArea.toFixed(2);
   };

   cellFunctions.coinPerArea = function(value)
   {
      return value.coinPerArea.toFixed(2);
   };

   cellFunctions.suppliesPerArea = function(value)
   {
      return value.suppliesPerArea.toFixed(2);
   };

   cellFunctions.productPerArea = function(value)
   {
      return value.productPerArea.toFixed(2);
   };

   return cellFunctions;
}

export default ReactRedux.connect(mapStateToProps)(DataTable);