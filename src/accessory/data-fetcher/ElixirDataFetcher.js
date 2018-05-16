const ManufactoryDataFetcher = require("./ManufactoryDataFetcher.js");

const typeName = "Elixir Manufactory";

const propertiesFunction = function(properties)
{
   return properties.replace(/\"BuildingType.ELIXIR_MANUFACTORY\"/g, "BuildingType.ELIXIR_MANUFACTORY");
};

ManufactoryDataFetcher.fetch(typeName, propertiesFunction);