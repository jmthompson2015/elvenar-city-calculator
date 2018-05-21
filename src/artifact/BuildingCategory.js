const BuildingCategory = {
   START: "start",
   BASICS: "basics",
   STREETS: "streets",
   MILITARY: "military",
   GOODS: "goods",
   CULTURE: "culture",
   // SETTLEMENTS: "settlements",
   // ANCIENT_WONDERS: "ancientWonders",

   properties:
   {
      "start":
      {
         name: "Start",
         key: "start",
      },
      "basics":
      {
         name: "Basics",
         key: "basics",
      },
      "streets":
      {
         name: "Streets",
         key: "streets",
      },
      "military":
      {
         name: "Military",
         key: "military",
      },
      "goods":
      {
         name: "Goods",
         key: "goods",
      },
      "culture":
      {
         name: "Culture",
         key: "culture",
      },
      // "settlements":
      // {
      //    name: "Settlements",
      //    key: "settlements",
      // },
      // "ancientWonders":
      // {
      //    name: "Ancient Wonders",
      //    key: "ancientWonders",
      // },
   },
};

BuildingCategory.keys = function()
{
   return Object.keys(BuildingCategory.properties);
};

BuildingCategory.values = function()
{
   return Object.values(BuildingCategory.properties);
};

if (Object.freeze)
{
   Object.freeze(BuildingCategory);
}

export default BuildingCategory;