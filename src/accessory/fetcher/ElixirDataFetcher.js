const DataFetcher = require("./DataFetcher.js");

const uri = "https://en.wiki.elvenar.com/index.php?title=Elixir_Manufactory";
const typeName = "Elixir Manufactory";
const productName = "elixir";
const spanId0 = "Elixir_Manufactory_Elves";
const spanId1 = "Elixir_Manufactory_Humans";

const propertiesFunction = function(properties)
{
   return properties.replace(/\"BuildingType.ELIXIR_MANUFACTORY\"/g, "BuildingType.ELIXIR_MANUFACTORY");
};

DataFetcher.fetch(uri, typeName, productName, spanId0, spanId1, propertiesFunction);