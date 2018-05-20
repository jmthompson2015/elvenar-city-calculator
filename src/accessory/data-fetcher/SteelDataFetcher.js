const ManufactoryDataFetcher = require("./ManufactoryDataFetcher.js");

const typeName = "Steel Manufactory";

const propertiesFunction = function(properties)
{
   return properties.replace(/\"BuildingType.STEEL_MANUFACTORY\"/g, "BuildingType.STEEL_MANUFACTORY");
};

ManufactoryDataFetcher.fetch(typeName, 1, propertiesFunction);