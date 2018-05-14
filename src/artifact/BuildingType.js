import BuildingCategory from "./BuildingCategory.js";

const BuildingType = {
   BUILDERS_HUT: "buildersHut",
   CRYSTAL_MANUFACTORY: "crystalManufactory",
   ELIXIR_MANUFACTORY: "elixirManufactory",
   GEM_MANUFACTORY: "gemManufactory",
   MAGIC_ACADEMY: "magicAcademy",
   MAGIC_DUST_MANUFACTORY: "magicDustManufactory",
   MAGIC_RESIDENCE: "magicResidence",
   MAGIC_WORKSHOP: "magicWorkshop",
   MAIN_HALL: "mainHall",
   MARBLE_MANUFACTORY: "marbleManufactory",
   PLANK_MANUFACTORY: "plankManufactory",
   RESIDENCE: "residence",
   SCROLL_MANUFACTORY: "scrollManufactory",
   SILK_MANUFACTORY: "silkManufactory",
   STEEL_MANUFACTORY: "steelManufactory",
   TRADER: "trader",
   WORKSHOP: "workshop",

   properties:
   {
      "buildersHut":
      {
         name: "Builder's Hut",
         categoryKey: BuildingCategory.BUILDERS_HUT,
         key: "buildersHut",
      },
      "crystalManufactory":
      {
         name: "Crystal Manufactory",
         categoryKey: BuildingCategory.MANUFACTORY,
         key: "crystalManufactory",
      },
      "elixirManufactory":
      {
         name: "Elixir Manufactory",
         categoryKey: BuildingCategory.MANUFACTORY,
         key: "elixirManufactory",
      },
      "gemManufactory":
      {
         name: "Gem Manufactory",
         categoryKey: BuildingCategory.MANUFACTORY,
         key: "gemManufactory",
      },
      "magicAcademy":
      {
         name: "Magic Academy",
         categoryKey: BuildingCategory.BASIC,
         key: "magicAcademy",
      },
      "magicDustManufactory":
      {
         name: "Magic Dust Manufactory",
         categoryKey: BuildingCategory.MANUFACTORY,
         key: "magicDustManufactory",
      },
      "magicResidence":
      {
         name: "Magic Residence",
         categoryKey: BuildingCategory.BASIC,
         key: "magicResidence",
      },
      "magicWorkshop":
      {
         name: "Magic Workshop",
         categoryKey: BuildingCategory.BASIC,
         key: "magicWorkshop",
      },
      "mainHall":
      {
         name: "Main Hall",
         categoryKey: BuildingCategory.MAIN_HALL,
         key: "mainHall",
      },
      "marbleManufactory":
      {
         name: "Marble Manufactory",
         categoryKey: BuildingCategory.MANUFACTORY,
         key: "marbleManufactory",
      },
      "plankManufactory":
      {
         name: "Plank Manufactory",
         categoryKey: BuildingCategory.MANUFACTORY,
         key: "plankManufactory",
      },
      "residence":
      {
         name: "Residence",
         categoryKey: BuildingCategory.BASIC,
         key: "residence",
      },
      "scrollManufactory":
      {
         name: "Scroll Manufactory",
         categoryKey: BuildingCategory.MANUFACTORY,
         key: "scrollManufactory",
      },
      "silkManufactory":
      {
         name: "Silk Manufactory",
         categoryKey: BuildingCategory.MANUFACTORY,
         key: "silkManufactory",
      },
      "steelManufactory":
      {
         name: "Steel Manufactory",
         categoryKey: BuildingCategory.MANUFACTORY,
         key: "steelManufactory",
      },
      "trader":
      {
         name: "Trader",
         categoryKey: BuildingCategory.BASIC,
         key: "trader",
      },
      "workshop":
      {
         name: "Workshop",
         categoryKey: BuildingCategory.BASIC,
         key: "workshop",
      },
   },
};

BuildingType.keys = function()
{
   return Object.keys(BuildingType.properties);
};

BuildingType.values = function()
{
   return Object.values(BuildingType.properties);
};

BuildingType.keys().forEach(function(typeKey)
{
   var type = BuildingType.properties[typeKey];
   type.category = BuildingCategory.properties[type.categoryKey];
});

BuildingType.keysByCategory = function(categoryKey)
{
   return BuildingType.keys().filter(key =>
   {
      const type = BuildingType.properties[key];
      return type.categoryKey === categoryKey;
   });
};

if (Object.freeze)
{
   Object.freeze(BuildingType);
}

export default BuildingType;