const ManufactoryDataFetcher = require("./ManufactoryDataFetcher.js");

const typeName = "Planks Manufactory";

const propertiesFunction = function(properties)
{
   return properties.replace(/\"BuildingType.PLANKS_MANUFACTORY\"/g, "BuildingType.PLANKS_MANUFACTORY");
};

ManufactoryDataFetcher.fetch(typeName, propertiesFunction);