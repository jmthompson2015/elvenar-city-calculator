import BuildingType from "./BuildingType.js";
import Race from "./Race.js";

const MagicAcademy = {
   ELF_01: "elf01",
   ELF_02: "elf02",
   ELF_03: "elf03",
   ELF_04: "elf04",
   ELF_05: "elf05",
   HUMAN_01: "human01",
   HUMAN_02: "human02",
   HUMAN_03: "human03",
   HUMAN_04: "human04",
   HUMAN_05: "human05",

   properties:
   {
      "elf01":
      {
         name: "Magic Academy 1 (Elf)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.ELF,
         level: 1,
         width: 5,
         height: 5,
         key: "elf01",
      },
      "elf02":
      {
         name: "Magic Academy 2 (Elf)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.ELF,
         level: 2,
         width: 5,
         height: 5,
         key: "elf02",
      },
      "elf03":
      {
         name: "Magic Academy 3 (Elf)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.ELF,
         level: 3,
         width: 5,
         height: 5,
         key: "elf03",
      },
      "elf04":
      {
         name: "Magic Academy 4 (Elf)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.ELF,
         level: 4,
         width: 5,
         height: 5,
         key: "elf04",
      },
      "elf05":
      {
         name: "Magic Academy 5 (Elf)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.ELF,
         level: 5,
         width: 5,
         height: 5,
         key: "elf05",
      },
      "human01":
      {
         name: "Magic Academy 1 (Human)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.HUMAN,
         level: 1,
         width: 5,
         height: 4,
         key: "human01",
      },
      "human02":
      {
         name: "Magic Academy 2 (Human)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.HUMAN,
         level: 2,
         width: 5,
         height: 4,
         key: "human02",
      },
      "human03":
      {
         name: "Magic Academy 3 (Human)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.HUMAN,
         level: 3,
         width: 5,
         height: 4,
         key: "human03",
      },
      "human04":
      {
         name: "Magic Academy 4 (Human)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.HUMAN,
         level: 4,
         width: 5,
         height: 4,
         key: "human04",
      },
      "human05":
      {
         name: "Magic Academy 5 (Human)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.HUMAN,
         level: 5,
         width: 5,
         height: 4,
         key: "human05",
      },
   },
};

MagicAcademy.keys = function()
{
   return Object.keys(MagicAcademy.properties);
};

MagicAcademy.values = function()
{
   return Object.values(MagicAcademy.properties);
};

MagicAcademy.keys().forEach(function(buildingKey)
{
   const building = MagicAcademy.properties[buildingKey];
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
   Object.freeze(MagicAcademy);
}

export default MagicAcademy;