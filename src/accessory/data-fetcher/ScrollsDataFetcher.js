const ManufactoryDataFetcher = require("./ManufactoryDataFetcher.js");

const typeName = "Scrolls Manufactory";

const propertiesFunction = function(properties)
{
   return properties.replace(/\"BuildingType.SCROLLS_MANUFACTORY\"/g, "BuildingType.SCROLLS_MANUFACTORY");
};

ManufactoryDataFetcher.fetch(typeName, 2, propertiesFunction, "Scrolls_Manufactory_Overview_Humans");