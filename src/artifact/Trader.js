import BuildingType from "./BuildingType.js";
import Race from "./Race.js";

const Trader = {
   ELF_01: "elf01",
   ELF_02: "elf02",
   ELF_03: "elf03",
   HUMAN_01: "human01",
   HUMAN_02: "human02",
   HUMAN_03: "human03",

   properties:
   {
      "elf01":
      {
         name: "Trader 1 (Elf)",
         typeKey: BuildingType.TRADER,
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 4,
         culture: 0,
         population: -50,
         key: "elf01",
      },
      "elf02":
      {
         name: "Trader 2 (Elf)",
         typeKey: BuildingType.TRADER,
         raceKey: Race.ELF,
         level: 2,
         width: 4,
         height: 5,
         culture: -500,
         population: -450,
         key: "elf02",
      },
      "elf03":
      {
         name: "Trader 3 (Elf)",
         typeKey: BuildingType.TRADER,
         raceKey: Race.ELF,
         level: 3,
         width: 5,
         height: 5,
         culture: -750,
         population: -750,
         key: "elf03",
      },
      "human01":
      {
         name: "Trader 1 (Human)",
         typeKey: BuildingType.TRADER,
         raceKey: Race.HUMAN,
         level: 1,
         width: 4,
         height: 4,
         culture: 0,
         population: -50,
         key: "human01",
      },
      "human02":
      {
         name: "Trader 2 (Human)",
         typeKey: BuildingType.TRADER,
         raceKey: Race.HUMAN,
         level: 2,
         width: 4,
         height: 5,
         culture: -500,
         population: -450,
         key: "human02",
      },
      "human03":
      {
         name: "Trader 3 (Human)",
         typeKey: BuildingType.TRADER,
         raceKey: Race.HUMAN,
         level: 3,
         width: 5,
         height: 5,
         culture: -750,
         population: -750,
         key: "human03",
      },
   },
};

Trader.keys = function()
{
   return Object.keys(Trader.properties);
};

Trader.values = function()
{
   return Object.values(Trader.properties);
};

Trader.keys().forEach(function(buildingKey)
{
   const building = Trader.properties[buildingKey];
   building.race = Race.properties[building.raceKey];
   building.type = BuildingType.properties[building.typeKey];
   building.coin = (building.coin !== undefined ? building.coin : 0);
   building.culture = (building.culture !== undefined ? building.culture : 0);
   building.population = (building.population !== undefined ? building.population : 0);
   building.supplies = (building.supplies !== undefined ? building.supplies : 0);
   building.tier1Product = (building.tier1Product !== undefined ? building.tier1Product : 0);
   building.tier2Product = (building.tier2Product !== undefined ? building.tier2Product : 0);
   building.tier3Product = (building.tier3Product !== undefined ? building.tier3Product : 0);
});

if (Object.freeze)
{
   Object.freeze(Trader);
}

export default Trader;