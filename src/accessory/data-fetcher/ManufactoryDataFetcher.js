const rp = require('request-promise');
const cheerio = require('cheerio');

const FetcherUtilities = require("./FetcherUtilities.js");

const ManufactoryDataFetcher = {};

ManufactoryDataFetcher.fetch = function(typeName, tier, propertiesFunction, spanId1In)
{
   const uri = "https://en.wiki.elvenar.com/index.php?title=" + typeName.replace(/ /g, "_");
   const spanId0 = typeName.replace(/ /g, "_") + "_Elves";
   const spanId1 = (spanId1In !== undefined ? spanId1In : typeName.replace(/ /g, "_") + "_Humans");

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
         const result0 = parse(raceName0, typeName, tier, spanId0, $, enums, properties);

         const raceName1 = "Human";
         const result1 = parse(raceName1, typeName, tier, spanId1, $, result0.enums, result0.properties);

         properties = propertiesFunction(result1.properties);

         console.log(result1.enums);
         console.log(properties);
      })
      .catch((err) =>
      {
         console.log(err);
      });
};

function parse(raceName, typeName, tier, spanId, $, enums, properties)
{
   const raceKey = "Race." + raceName.toUpperCase();

   $('span#' + spanId).parent().next().find('tr').each(function()
   {
      const children = $(this).children();
      const levelString = $(children[0]).text().trim();
      const level = parseInt(levelString);

      if (Number.isInteger(level))
      {
         const enumName = FetcherUtilities.createEnumName(raceName, undefined, levelString);
         const enumValue = FetcherUtilities.createEnumValue(raceName, undefined, levelString);
         enums += enumName + ": \"" + enumValue + "\",\n";

         const sizeString = $(children[1]).text().trim();
         const sizeParts = sizeString.split(/[Xx]/);
         const width = parseInt(sizeParts[0]);
         const height = parseInt(sizeParts[1]);
         const population = parseInt($(children[2]).text().trim());
         let culture = parseInt($(children[3]).text().trim());
         culture = (Number.isInteger(culture) ? culture : 0);
         const product = parseInt($(children[10]).text().trim().replace(/\./g, ""));

         const rowData = {
            name: typeName + " " + level + " (" + raceName + ")",
            raceKey: raceKey,
            level: level,
            width: width,
            height: height,
         };

         if (population !== undefined && population > 0)
         {
            rowData.population = -population;
         }
         if (culture !== undefined && culture > 0)
         {
            rowData.culture = -culture;
         }
         rowData["tier" + tier + "Product"] = product;
         rowData.key = enumValue;

         properties += "\"" + enumValue + "\": " + FetcherUtilities.stringify(rowData) + ",\n";
      }
   });

   properties = properties.replace(/\"Race.ELF\"/g, "Race.ELF");
   properties = properties.replace(/\"Race.HUMAN\"/g, "Race.HUMAN");

   return (
   {
      enums: enums,
      properties: properties,
   });
}

module.exports = ManufactoryDataFetcher;