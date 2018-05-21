const rp = require('request-promise');
const cheerio = require('cheerio');

const FetcherUtilities = require("./FetcherUtilities.js");

const CultureDataFetcher = {};

CultureDataFetcher.fetch = function(typeName, propertiesFunction)
{
   const uri = "https://en.wiki.elvenar.com/index.php?title=" + typeName.replace(/ /g, "_");
   const spanId0 = "Cultural_Buildings_Elves";
   const spanId1 = "Cultural_Buildings_Humans";

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
         let typeEnums = "";
         let typeProperties = "";
         let enums = "";
         let properties = "";

         const raceName0 = "Elf";
         const result0 = parse(raceName0, typeName, spanId0, $, typeEnums, typeProperties, enums, properties);

         const raceName1 = "Human";
         const result1 = parse(raceName1, typeName, spanId1, $, result0.typeEnums, result0.typeProperties, result0.enums, result0.properties);

         typeProperties = result1.typeProperties.replace(/\"BuildingCategory.CULTURE\"/g, "BuildingCategory.CULTURE");

         properties = result1.properties.replace(/\"Race.ELF\"/g, "Race.ELF");
         properties = properties.replace(/\"Race.HUMAN\"/g, "Race.HUMAN");
         properties = properties.replace(/typeKey:"BuildingType/g, "typeKey:BuildingType");
         properties = properties.replace(/",raceKey:/g, ",raceKey:");
         properties = propertiesFunction(properties);

         console.log(result1.typeEnums);
         console.log(typeProperties);
         console.log(result1.enums);
         console.log(properties);
      })
      .catch((err) =>
      {
         console.log(err);
      });
};

function parse(raceName, typeName, spanId, $, typeEnums, typeProperties, enums, properties)
{
   const raceKey = "Race." + raceName.toUpperCase();
   const level = 1;

   $('span#' + spanId).parent().next().find('tr').each(function()
   {
      const children = $(this).children();
      let name = $(children[0]).find('a').attr('title');

      if (name !== undefined)
      {
         name = name.trim();
         const enumName = createEnumName(raceName, name);
         const enumValue = createEnumValue(raceName, name);
         typeEnums += enumName + ": \"" + enumValue + "\",\n";
         enums += enumName + ": \"" + enumValue + "\",\n";

         const sizeString = $(children[1]).text().trim();
         const sizeParts = sizeString.split(/[Xx]/);
         const width = parseInt(sizeParts[0]);
         const height = parseInt(sizeParts[1]);
         let culture = parseInt($(children[6]).text().trim().replace(/\./g, ""));
         culture = (Number.isInteger(culture) ? culture : 0);
         let population = parseInt($(children[7]).text().trim());
         population = (Number.isInteger(population) ? population : 0);

         const typeData = {
            name: name + " (" + raceName + ")",
            categoryKey: "BuildingCategory.CULTURE",
            key: enumValue,
         };

         const rowData = {
            name: name + " (" + raceName + ")",
            typeKey: "BuildingType." + enumName,
            raceKey: raceKey,
            level: level,
            width: width,
            height: height,
            culture: culture,
         };

         if (population !== undefined && population > 0)
         {
            rowData.population = population;
         }
         rowData.key = enumValue;

         typeProperties += "\"" + enumValue + "\": " + FetcherUtilities.stringify(typeData) + ",\n";
         properties += "\"" + enumValue + "\": " + FetcherUtilities.stringify(rowData) + ",\n";
      }
   });

   return (
   {
      typeEnums: typeEnums,
      typeProperties: typeProperties,
      enums: enums,
      properties: properties,
   });
}

function createEnumName(raceName, typeNameIn)
{
   let typeName = typeNameIn.replace(/'/g, "");

   return typeName.toUpperCase().replace(/ /g, "_") + "_" + raceName.toUpperCase();
}

function createEnumValue(raceName, typeNameIn)
{
   let typeName = typeNameIn.replace(/'/g, "");

   return FetcherUtilities.toCamelCase(typeName + " " + raceName);
}

const typeName = "Culture";

const propertiesFunction = function(properties)
{
   return properties.replace(/\"BuildingType.CULTURE\"/g, "BuildingType.CULTURE");
};

CultureDataFetcher.fetch(typeName, propertiesFunction);