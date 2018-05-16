const ManufactoryDataFetcher = require("./ManufactoryDataFetcher.js");

const typeName = "Magic Dust Manufactory";

const propertiesFunction = function(properties)
{
   return properties.replace(/\"BuildingType.MAGIC_DUST_MANUFACTORY\"/g, "BuildingType.MAGIC_DUST_MANUFACTORY");
};

ManufactoryDataFetcher.fetch(typeName, propertiesFunction);