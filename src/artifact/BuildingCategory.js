const BuildingCategory = {
   ANCIENT_WONDER: "ancientWonder",
   BASIC: "basic",
   BUILDERS_HUT: "buildersHut",
   CULTURE: "culture",
   EXPANSION: "expansion",
   MAIN_HALL: "mainHall",
   MANUFACTORY: "manufactory",
   MILITARY: "military",
   SETTLEMENT: "settlement",
   STREET: "street",

   properties:
   {
      "ancientWonder":
      {
         name: "Ancient Wonder",
         key: "ancientWonder",
      },
      "basic":
      {
         name: "Basic",
         key: "basic",
      },
      "buildersHut":
      {
         name: "Builder's Hut",
         key: "buildersHut",
      },
      "culture":
      {
         name: "Culture",
         key: "culture",
      },
      "expansion":
      {
         name: "Expansion",
         key: "expansion",
      },
      "mainHall":
      {
         name: "Main Hall",
         key: "mainHall",
      },
      "manufactory":
      {
         name: "Manufactory",
         key: "manufactory",
      },
      "military":
      {
         name: "Military",
         key: "military",
      },
      "settlement":
      {
         name: "Settlement",
         key: "settlement",
      },
      "street":
      {
         name: "Street",
         key: "street",
      },
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