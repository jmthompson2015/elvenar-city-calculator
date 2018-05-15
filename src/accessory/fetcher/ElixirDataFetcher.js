const DataFetcher = require("./DataFetcher.js");

const uri = "https://en.wiki.elvenar.com/index.php?title=Elixir_Manufactory";
const typeName = "Elixir Manufactory";
const spanId0 = "Elixir_Manufactory_Elves";
const spanId1 = "Elixir_Manufactory_Humans";

DataFetcher.fetch(uri, typeName, spanId0, spanId1);