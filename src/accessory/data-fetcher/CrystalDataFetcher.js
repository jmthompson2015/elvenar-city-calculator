const ManufactoryDataFetcher = require("./ManufactoryDataFetcher.js");

const typeName = "Crystal Manufactory";

const propertiesFunction = function(properties)
{
   return properties.replace(/\"BuildingType.CRYSTAL_MANUFACTORY\"/g, "BuildingType.CRYSTAL_MANUFACTORY");
};

ManufactoryDataFetcher.fetch(typeName, 2, propertiesFunction);