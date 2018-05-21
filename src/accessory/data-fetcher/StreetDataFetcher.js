const rp = require('request-promise');
const cheerio = require('cheerio');

const FetcherUtilities = require("./FetcherUtilities.js");

const StreetDataFetcher = {};

StreetDataFetcher.fetch = function(typeName, propertiesFunction)
{
   const uri = "https://en.wiki.elvenar.com/index.php?title=" + typeName.replace(/ /g, "_");
   console.log("uri = " + uri);
   const spanId0 = typeName.replace(/ /g, "_") + "_Elves";
   const spanId1 = typeName.replace(/ /g, "_") + "_Humans";
   console.log("spanId0 = " + spanId0);

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

         typeProperties = result1.typeProperties.replace(/\"BuildingCategory.STREETS\"/g, "BuildingCategory.STREETS");

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

   $('span#' + spanId).parent().next().find('tr').each(function()
   {
      const children = $(this).children();
      let name = $(children[0]).find('p').text();

      if (name !== undefined && name.length > 0)
      {
         name = name.trim();
         const enumName = createEnumName(raceName, name);
         const enumValue = createEnumValue(raceName, name);
         typeEnums += enumName + ": \"" + enumValue + "\",\n";
         enums += enumName + ": \"" + enumValue + "\",\n";

         let culture = parseInt($(children[3]).text().trim().replace(/\./g, ""));
         culture = (Number.isInteger(culture) ? culture : 0);

         const typeData = {
            name: name + " (" + raceName + ")",
            categoryKey: "BuildingCategory.STREETS",
            key: enumValue,
         };

         const rowData = {
            name: name + " (" + raceName + ")",
            typeKey: "BuildingType." + enumName,
            raceKey: raceKey,
            level: 1,
            width: 1,
            height: 1,
         };

         if (culture !== undefined && culture > 0)
         {
            rowData.culture = culture;
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

const typeName = "Streets";

const propertiesFunction = function(properties)
{
   return properties.replace(/\"BuildingType.STREETS\"/g, "BuildingType.STREETS");
};

StreetDataFetcher.fetch(typeName, propertiesFunction);