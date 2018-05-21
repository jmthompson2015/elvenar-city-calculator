import BuildingType from "./BuildingType.js";
import Race from "./Race.js";

const BuildersHut = {
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
         name: "Builder's Hut 1 (Elf)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 3,
         key: "elf01",
      },
      "elf02":
      {
         name: "Builder's Hut 2 (Elf)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.ELF,
         level: 2,
         width: 3,
         height: 3,
         key: "elf02",
      },
      "elf03":
      {
         name: "Builder's Hut 3 (Elf)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.ELF,
         level: 3,
         width: 3,
         height: 3,
         key: "elf03",
      },
      "elf04":
      {
         name: "Builder's Hut 4 (Elf)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.ELF,
         level: 4,
         width: 3,
         height: 3,
         key: "elf04",
      },
      "elf05":
      {
         name: "Builder's Hut 5 (Elf)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.ELF,
         level: 5,
         width: 3,
         height: 3,
         key: "elf05",
      },
      "human01":
      {
         name: "Builder's Hut 1 (Human)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.HUMAN,
         level: 1,
         width: 2,
         height: 3,
         key: "human01",
      },
      "human02":
      {
         name: "Builder's Hut 2 (Human)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.HUMAN,
         level: 2,
         width: 2,
         height: 3,
         key: "human02",
      },
      "human03":
      {
         name: "Builder's Hut 3 (Human)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.HUMAN,
         level: 3,
         width: 2,
         height: 3,
         key: "human03",
      },
      "human04":
      {
         name: "Builder's Hut 4 (Human)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.HUMAN,
         level: 4,
         width: 2,
         height: 3,
         key: "human04",
      },
      "human05":
      {
         name: "Builder's Hut 5 (Human)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.HUMAN,
         level: 5,
         width: 2,
         height: 3,
         key: "human05",
      },
   },
};

BuildersHut.keys = function()
{
   return Object.keys(BuildersHut.properties);
};

BuildersHut.values = function()
{
   return Object.values(BuildersHut.properties);
};

BuildersHut.keys().forEach(function(buildingKey)
{
   const building = BuildersHut.properties[buildingKey];
   building.race = Race.properties[building.raceKey];
   building.type = BuildingType.properties[building.typeKey];
});

if (Object.freeze)
{
   Object.freeze(BuildersHut);
}

export default BuildersHut;