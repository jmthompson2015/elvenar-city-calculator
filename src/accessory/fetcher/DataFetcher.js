const rp = require('request-promise');
const cheerio = require('cheerio');

const DataFetcher = {};

DataFetcher.fetch = function(uri, typeName, spanId0, spanId1)
{
   const options = {
      uri: uri,
      transform: function(body)
      {
         return cheerio.load(body);
      }
   };

   rp(options)
      .then(($) =>
      {
         let enums = "";
         let properties = "";

         const raceName0 = "Elf";
         const result0 = parse(raceName0, typeName, spanId0, $, enums, properties);

         const raceName1 = "Human";
         const result1 = parse(raceName1, typeName, spanId1, $, result0.enums, result0.properties);

         console.log(result1.enums);
         console.log(result1.properties);
      })
      .catch((err) =>
      {
         console.log(err);
      });
};

function createEnumName(raceName, typeName, levelString)
{
   return typeName.toUpperCase().replace(/ /g, "_") + "_" + raceName.toUpperCase() + "_" + levelString.padStart(2, "0");
}

function createEnumValue(raceName, typeName, levelString)
{
   return toCamelCase(typeName + " " + raceName + " " + levelString.padStart(2, "0"));
}

function parse(raceName, typeName, spanId, $, enums, properties)
{
   $('span#' + spanId).parent().next().find('tr').each(function()
   {
      const children = $(this).children();
      const levelString = $(children[0]).text().trim();
      const level = parseInt(levelString);

      if (Number.isInteger(level))
      {
         const enumName = createEnumName(raceName, typeName, levelString);
         const enumValue = createEnumValue(raceName, typeName, levelString);
         enums += enumName + ": \"" + enumValue + "\",\n";

         const sizeString = $(children[1]).text().trim();
         const sizeParts = sizeString.split("X");
         const width = parseInt(sizeParts[0]);
         const height = parseInt(sizeParts[1]);
         const population = parseInt($(children[2]).text().trim());
         let culture = parseInt($(children[3]).text().trim());
         culture = (Number.isInteger(culture) ? culture : 0);

         const rowData = {
            name: typeName + " " + level + " (" + raceName + ")",
            typeKey: "BuildingType.ELIXIR_MANUFACTORY",
            raceKey: "Race." + raceName.toUpperCase(),
            level: level,
            width: width,
            height: height,
            population: -population,
            culture: -culture,
            key: enumValue,
         };

         properties += "\"" + enumValue + "\": " + stringify(rowData) + ",\n";
         properties = properties.replace(/\"BuildingType.ELIXIR_MANUFACTORY\"/g, "BuildingType.ELIXIR_MANUFACTORY");
         properties = properties.replace(/\"Race.ELF\"/g, "Race.ELF");
         properties = properties.replace(/\"Race.HUMAN\"/g, "Race.HUMAN");
      }
   });

   return (
   {
      enums: enums,
      properties: properties,
   });
}

function toCamelCase(str)
{
   return str.split(' ').map(function(word, index)
   {
      // If it is the first word make sure to lowercase all the chars.
      if (index == 0)
      {
         return word.toLowerCase();
      }

      // If it is not the first word only upper case the first char and lowercase the rest.
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
   }).join('');
}

function stringify(obj_from_json)
{
   if (typeof obj_from_json !== "object" || Array.isArray(obj_from_json))
   {
      // not an object, stringify using native function
      return JSON.stringify(obj_from_json);
   }
   // Implements recursive object serialization according to JSON spec
   // but without quotes around the keys.
   let props = Object
      .keys(obj_from_json)
      .map(key => `${key}:${stringify(obj_from_json[key])}`)
      .join(",");
   return `{${props}}`;
}

module.exports = DataFetcher;