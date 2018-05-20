const ManufactoryDataFetcher = require("./ManufactoryDataFetcher.js");

const typeName = "Gems Manufactory";

const propertiesFunction = function(properties)
{
   return properties.replace(/\"BuildingType.GEMS_MANUFACTORY\"/g, "BuildingType.GEMS_MANUFACTORY");
};

ManufactoryDataFetcher.fetch(typeName, 3, propertiesFunction);