const DataFetcher = require("./DataFetcher.js");

const uri = "https://en.wiki.elvenar.com/index.php?title=Marble_Manufactory";
const typeName = "Marble Manufactory";
const productName = "marble";
const spanId0 = "Marble_Manufactory_Elves";
const spanId1 = "Marble_Manufactory_Humans";

const propertiesFunction = function(properties)
{
   return properties.replace(/\"BuildingType.MARBLE_MANUFACTORY\"/g, "BuildingType.MARBLE_MANUFACTORY");
};

DataFetcher.fetch(uri, typeName, productName, spanId0, spanId1, propertiesFunction);