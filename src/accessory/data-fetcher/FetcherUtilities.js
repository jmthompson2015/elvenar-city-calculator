const FetcherUtilities = {};

FetcherUtilities.createEnumName = function(raceName, typeName, levelString)
{
   return typeName.toUpperCase().replace(/ /g, "_") + "_" + raceName.toUpperCase() + "_" + levelString.padStart(2, "0");
};

FetcherUtilities.createEnumValue = function(raceName, typeName, levelString)
{
   return FetcherUtilities.toCamelCase(typeName + " " + raceName + " " + levelString.padStart(2, "0"));
};

FetcherUtilities.stringify = function(obj_from_json)
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
      .map(key => `${key}:${FetcherUtilities.stringify(obj_from_json[key])}`)
      .join(",");
   return `{${props}}`;
};

FetcherUtilities.toCamelCase = function(str)
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
};

module.exports = FetcherUtilities;