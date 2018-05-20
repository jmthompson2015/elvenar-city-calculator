const ManufactoryDataFetcher = require("./ManufactoryDataFetcher.js");

const typeName = "Silk Manufactory";

const propertiesFunction = function(properties)
{
   return properties.replace(/\"BuildingType.SILK_MANUFACTORY\"/g, "BuildingType.SILK_MANUFACTORY");
};

ManufactoryDataFetcher.fetch(typeName, 2, propertiesFunction);