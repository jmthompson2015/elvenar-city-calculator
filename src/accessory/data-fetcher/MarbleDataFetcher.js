const ManufactoryDataFetcher = require("./ManufactoryDataFetcher.js");

const typeName = "Marble Manufactory";

const propertiesFunction = function(properties)
{
   return properties.replace(/\"BuildingType.MARBLE_MANUFACTORY\"/g, "BuildingType.MARBLE_MANUFACTORY");
};

ManufactoryDataFetcher.fetch(typeName, propertiesFunction);