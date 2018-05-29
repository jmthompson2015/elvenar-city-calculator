import BuildingType from "./BuildingType.js";
import Race from "./Race.js";
import TimeSpan from "./TimeSpan.js";

const Workshop = {
   ELF_01: "elf01",
   ELF_02: "elf02",
   ELF_03: "elf03",
   ELF_04: "elf04",
   ELF_05: "elf05",
   ELF_06: "elf06",
   ELF_07: "elf07",
   ELF_08: "elf08",
   ELF_09: "elf09",
   ELF_10: "elf10",
   ELF_11: "elf11",
   ELF_12: "elf12",
   ELF_13: "elf13",
   ELF_14: "elf14",
   ELF_15: "elf15",
   ELF_16: "elf16",
   ELF_17: "elf17",
   ELF_18: "elf18",
   ELF_19: "elf19",
   ELF_20: "elf20",
   ELF_21: "elf21",
   ELF_22: "elf22",
   ELF_23: "elf23",
   ELF_24: "elf24",
   ELF_25: "elf25",
   ELF_26: "elf26",
   ELF_27: "elf27",
   ELF_28: "elf28",
   ELF_29: "elf29",
   HUMAN_01: "human01",
   HUMAN_02: "human02",
   HUMAN_03: "human03",
   HUMAN_04: "human04",
   HUMAN_05: "human05",
   HUMAN_06: "human06",
   HUMAN_07: "human07",
   HUMAN_08: "human08",
   HUMAN_09: "human09",
   HUMAN_10: "human10",
   HUMAN_11: "human11",
   HUMAN_12: "human12",
   HUMAN_13: "human13",
   HUMAN_14: "human14",
   HUMAN_15: "human15",
   HUMAN_16: "human16",
   HUMAN_17: "human17",
   HUMAN_18: "human18",
   HUMAN_19: "human19",
   HUMAN_20: "human20",
   HUMAN_21: "human21",
   HUMAN_22: "human22",
   HUMAN_23: "human23",
   HUMAN_24: "human24",
   HUMAN_25: "human25",
   HUMAN_26: "human26",
   HUMAN_27: "human27",
   HUMAN_28: "human28",
   HUMAN_29: "human29",

   properties:
   {
      "elf01":
      {
         name: "Workshop 1 (Elf)",
         raceKey: Race.ELF,
         level: 1,
         width: 2,
         height: 2,
         population: -18,
         supplies: 29,
         key: "elf01"
      },
      "elf02":
      {
         name: "Workshop 2 (Elf)",
         raceKey: Race.ELF,
         level: 2,
         width: 2,
         height: 2,
         population: -6,
         culture: -2,
         supplies: 53,
         key: "elf02"
      },
      "elf03":
      {
         name: "Workshop 3 (Elf)",
         raceKey: Race.ELF,
         level: 3,
         width: 2,
         height: 2,
         population: -8,
         culture: -5,
         supplies: 74,
         key: "elf03"
      },
      "elf04":
      {
         name: "Workshop 4 (Elf)",
         raceKey: Race.ELF,
         level: 4,
         width: 2,
         height: 2,
         population: -8,
         culture: -7,
         supplies: 94,
         key: "elf04"
      },
      "elf05":
      {
         name: "Workshop 5 (Elf)",
         raceKey: Race.ELF,
         level: 5,
         width: 3,
         height: 2,
         population: -32,
         culture: -21,
         supplies: 169,
         key: "elf05"
      },
      "elf06":
      {
         name: "Workshop 6 (Elf)",
         raceKey: Race.ELF,
         level: 6,
         width: 3,
         height: 2,
         population: -9,
         culture: -6,
         supplies: 196,
         key: "elf06"
      },
      "elf07":
      {
         name: "Workshop 7 (Elf)",
         raceKey: Race.ELF,
         level: 7,
         width: 3,
         height: 2,
         population: -12,
         culture: -6,
         supplies: 223,
         key: "elf07"
      },
      "elf08":
      {
         name: "Workshop 8 (Elf)",
         raceKey: Race.ELF,
         level: 8,
         width: 3,
         height: 2,
         population: -14,
         culture: -6,
         supplies: 249,
         key: "elf08"
      },
      "elf09":
      {
         name: "Workshop 9 (Elf)",
         raceKey: Race.ELF,
         level: 9,
         width: 4,
         height: 3,
         population: -130,
         culture: -63,
         supplies: 547,
         key: "elf09"
      },
      "elf10":
      {
         name: "Workshop 10 (Elf)",
         raceKey: Race.ELF,
         level: 10,
         width: 4,
         height: 3,
         population: -32,
         culture: -11,
         supplies: 596,
         key: "elf10"
      },
      "elf11":
      {
         name: "Workshop 11 (Elf)",
         raceKey: Race.ELF,
         level: 11,
         width: 4,
         height: 3,
         population: -33,
         culture: -9,
         supplies: 644,
         key: "elf11"
      },
      "elf12":
      {
         name: "Workshop 12 (Elf)",
         raceKey: Race.ELF,
         level: 12,
         width: 4,
         height: 3,
         population: -45,
         culture: -10,
         supplies: 691,
         key: "elf12"
      },
      "elf13":
      {
         name: "Workshop 13 (Elf)",
         raceKey: Race.ELF,
         level: 13,
         width: 4,
         height: 3,
         population: -41,
         culture: -8,
         supplies: 738,
         key: "elf13"
      },
      "elf14":
      {
         name: "Workshop 14 (Elf)",
         raceKey: Race.ELF,
         level: 14,
         width: 4,
         height: 3,
         population: -39,
         culture: -8,
         supplies: 783,
         key: "elf14"
      },
      "elf15":
      {
         name: "Workshop 15 (Elf)",
         raceKey: Race.ELF,
         level: 15,
         width: 4,
         height: 3,
         population: -49,
         culture: -7,
         supplies: 828,
         key: "elf15"
      },
      "elf16":
      {
         name: "Workshop 16 (Elf)",
         raceKey: Race.ELF,
         level: 16,
         width: 5,
         height: 3,
         population: -136,
         culture: -122,
         supplies: 1090,
         key: "elf16"
      },
      "elf17":
      {
         name: "Workshop 17 (Elf)",
         raceKey: Race.ELF,
         level: 17,
         width: 5,
         height: 3,
         population: -48,
         culture: -34,
         supplies: 1160,
         key: "elf17"
      },
      "elf18":
      {
         name: "Workshop 18 (Elf)",
         raceKey: Race.ELF,
         level: 18,
         width: 3,
         height: 6,
         population: -202,
         culture: -109,
         supplies: 1470,
         key: "elf18"
      },
      "elf19":
      {
         name: "Workshop 19 (Elf)",
         raceKey: Race.ELF,
         level: 19,
         width: 3,
         height: 6,
         population: -60,
         culture: -48,
         supplies: 1550,
         key: "elf19"
      },
      "elf20":
      {
         name: "Workshop 20 (Elf)",
         raceKey: Race.ELF,
         level: 20,
         width: 3,
         height: 6,
         population: -101,
         culture: -51,
         supplies: 1640,
         key: "elf20"
      },
      "elf21":
      {
         name: "Workshop 21 (Elf)",
         raceKey: Race.ELF,
         level: 21,
         width: 3,
         height: 6,
         population: -109,
         culture: -56,
         supplies: 1740,
         key: "elf21"
      },
      "elf22":
      {
         name: "Workshop 22 (Elf)",
         raceKey: Race.ELF,
         level: 22,
         width: 4,
         height: 5,
         population: -257,
         culture: -141,
         supplies: 2040,
         key: "elf22"
      },
      "elf23":
      {
         name: "Workshop 23 (Elf)",
         raceKey: Race.ELF,
         level: 23,
         width: 4,
         height: 5,
         population: -145,
         culture: -82,
         supplies: 2160,
         key: "elf23"
      },
      "elf24":
      {
         name: "Workshop 24 (Elf)",
         raceKey: Race.ELF,
         level: 24,
         width: 4,
         height: 5,
         population: -159,
         culture: -88,
         supplies: 2280,
         key: "elf24"
      },
      "elf25":
      {
         name: "Workshop 25 (Elf)",
         raceKey: Race.ELF,
         level: 25,
         width: 4,
         height: 5,
         population: -179,
         culture: -96,
         supplies: 2410,
         key: "elf25"
      },
      "elf26":
      {
         name: "Workshop 26 (Elf)",
         raceKey: Race.ELF,
         level: 26,
         width: 3,
         height: 7,
         population: -293,
         culture: -162,
         supplies: 2680,
         key: "elf26"
      },
      "elf27":
      {
         name: "Workshop 27 (Elf)",
         raceKey: Race.ELF,
         level: 27,
         width: 3,
         height: 7,
         population: -222,
         culture: -122,
         supplies: 2830,
         key: "elf27"
      },
      "elf28":
      {
         name: "Workshop 28 (Elf)",
         raceKey: Race.ELF,
         level: 28,
         width: 3,
         height: 7,
         population: -263,
         culture: -137,
         supplies: 3000,
         key: "elf28"
      },
      "elf29":
      {
         name: "Workshop 29 (Elf)",
         raceKey: Race.ELF,
         level: 29,
         width: 3,
         height: 7,
         population: -209,
         culture: -149,
         supplies: 3170,
         key: "elf29"
      },
      "human01":
      {
         name: "Workshop 1 (Human)",
         raceKey: Race.HUMAN,
         level: 1,
         width: 2,
         height: 2,
         population: -15,
         supplies: 29,
         key: "human01"
      },
      "human02":
      {
         name: "Workshop 2 (Human)",
         raceKey: Race.HUMAN,
         level: 2,
         width: 2,
         height: 2,
         population: -7,
         culture: -2,
         supplies: 53,
         key: "human02"
      },
      "human03":
      {
         name: "Workshop 3 (Human)",
         raceKey: Race.HUMAN,
         level: 3,
         width: 2,
         height: 2,
         population: -9,
         culture: -5,
         supplies: 74,
         key: "human03"
      },
      "human04":
      {
         name: "Workshop 4 (Human)",
         raceKey: Race.HUMAN,
         level: 4,
         width: 2,
         height: 2,
         population: -8,
         culture: -7,
         supplies: 94,
         key: "human04"
      },
      "human05":
      {
         name: "Workshop 5 (Human)",
         raceKey: Race.HUMAN,
         level: 5,
         width: 2,
         height: 2,
         population: -6,
         culture: -9,
         supplies: 113,
         key: "human05"
      },
      "human06":
      {
         name: "Workshop 6 (Human)",
         raceKey: Race.HUMAN,
         level: 6,
         width: 2,
         height: 2,
         population: -8,
         culture: -5,
         supplies: 131,
         key: "human06"
      },
      "human07":
      {
         name: "Workshop 7 (Human)",
         raceKey: Race.HUMAN,
         level: 7,
         width: 2,
         height: 3,
         population: -38,
         culture: -19,
         supplies: 223,
         key: "human07"
      },
      "human08":
      {
         name: "Workshop 8 (Human)",
         raceKey: Race.HUMAN,
         level: 8,
         width: 2,
         height: 3,
         population: -11,
         culture: -6,
         supplies: 249,
         key: "human08"
      },
      "human09":
      {
         name: "Workshop 9 (Human)",
         raceKey: Race.HUMAN,
         level: 9,
         width: 2,
         height: 3,
         population: -15,
         culture: -5,
         supplies: 274,
         key: "human09"
      },
      "human10":
      {
         name: "Workshop 10 (Human)",
         raceKey: Race.HUMAN,
         level: 10,
         width: 2,
         height: 3,
         population: -19,
         culture: -5,
         supplies: 298,
         key: "human10"
      },
      "human11":
      {
         name: "Workshop 11 (Human)",
         raceKey: Race.HUMAN,
         level: 11,
         width: 3,
         height: 4,
         population: -168,
         culture: -73,
         supplies: 644,
         key: "human11"
      },
      "human12":
      {
         name: "Workshop 12 (Human)",
         raceKey: Race.HUMAN,
         level: 12,
         width: 3,
         height: 4,
         population: -33,
         culture: -10,
         supplies: 691,
         key: "human12"
      },
      "human13":
      {
         name: "Workshop 13 (Human)",
         raceKey: Race.HUMAN,
         level: 13,
         width: 3,
         height: 4,
         population: -38,
         culture: -8,
         supplies: 738,
         key: "human13"
      },
      "human14":
      {
         name: "Workshop 14 (Human)",
         raceKey: Race.HUMAN,
         level: 14,
         width: 3,
         height: 4,
         population: -45,
         culture: -8,
         supplies: 783,
         key: "human14"
      },
      "human15":
      {
         name: "Workshop 15 (Human)",
         raceKey: Race.HUMAN,
         level: 15,
         width: 3,
         height: 4,
         population: -51,
         culture: -7,
         supplies: 828,
         key: "human15"
      },
      "human16":
      {
         name: "Workshop 16 (Human)",
         raceKey: Race.HUMAN,
         level: 16,
         width: 3,
         height: 5,
         population: -169,
         culture: -122,
         supplies: 1090,
         key: "human16"
      },
      "human17":
      {
         name: "Workshop 17 (Human)",
         raceKey: Race.HUMAN,
         level: 17,
         width: 3,
         height: 5,
         population: -39,
         culture: -34,
         supplies: 1160,
         key: "human17"
      },
      "human18":
      {
         name: "Workshop 18 (Human)",
         raceKey: Race.HUMAN,
         level: 18,
         width: 6,
         height: 3,
         population: -183,
         culture: -109,
         supplies: 1470,
         key: "human18"
      },
      "human19":
      {
         name: "Workshop 19 (Human)",
         raceKey: Race.HUMAN,
         level: 19,
         width: 6,
         height: 3,
         population: -60,
         culture: -48,
         supplies: 1550,
         key: "human19"
      },
      "human20":
      {
         name: "Workshop 20 (Human)",
         raceKey: Race.HUMAN,
         level: 20,
         width: 6,
         height: 3,
         population: -101,
         culture: -51,
         supplies: 1640,
         key: "human20"
      },
      "human21":
      {
         name: "Workshop 21 (Human)",
         raceKey: Race.HUMAN,
         level: 21,
         width: 6,
         height: 3,
         population: -109,
         culture: -56,
         supplies: 1740,
         key: "human21"
      },
      "human22":
      {
         name: "Workshop 22 (Human)",
         raceKey: Race.HUMAN,
         level: 22,
         width: 4,
         height: 5,
         population: -257,
         culture: -141,
         supplies: 2040,
         key: "human22"
      },
      "human23":
      {
         name: "Workshop 23 (Human)",
         raceKey: Race.HUMAN,
         level: 23,
         width: 4,
         height: 5,
         population: -145,
         culture: -82,
         supplies: 2160,
         key: "human23"
      },
      "human24":
      {
         name: "Workshop 24 (Human)",
         raceKey: Race.HUMAN,
         level: 24,
         width: 4,
         height: 5,
         population: -159,
         culture: -88,
         supplies: 2280,
         key: "human24"
      },
      "human25":
      {
         name: "Workshop 25 (Human)",
         raceKey: Race.HUMAN,
         level: 25,
         width: 4,
         height: 5,
         population: -179,
         culture: -96,
         supplies: 2410,
         key: "human25"
      },
      "human26":
      {
         name: "Workshop 26 (Human)",
         raceKey: Race.HUMAN,
         level: 26,
         width: 3,
         height: 7,
         population: -293,
         culture: -162,
         supplies: 2680,
         key: "human26"
      },
      "human27":
      {
         name: "Workshop 27 (Human)",
         raceKey: Race.HUMAN,
         level: 27,
         width: 3,
         height: 7,
         population: -222,
         culture: -122,
         supplies: 2830,
         key: "human27"
      },
      "human28":
      {
         name: "Workshop 28 (Human)",
         raceKey: Race.HUMAN,
         level: 28,
         width: 3,
         height: 7,
         population: -263,
         culture: -137,
         supplies: 3000,
         key: "human28"
      },
      "human29":
      {
         name: "Workshop 29 (Human)",
         raceKey: Race.HUMAN,
         level: 29,
         width: 3,
         height: 7,
         population: -209,
         culture: -149,
         supplies: 3170,
         key: "human29"
      },
   },
};

// Supplementary data.
Workshop.properties[Workshop.ELF_01].suppliesMap = createTimeMap(7, 18, 45, 87, 149, 219);
Workshop.properties[Workshop.ELF_02].suppliesMap = createTimeMap(10, 25, 67, 128, 220, 322);
Workshop.properties[Workshop.ELF_03].suppliesMap = createTimeMap(14, 35, 93, 179, 309, 453);
Workshop.properties[Workshop.ELF_04].suppliesMap = createTimeMap(24, 56, 146, 281, 487, 713);
Workshop.properties[Workshop.ELF_08].suppliesMap = createTimeMap(39, 94, 249, 480, 832, 1220);

Workshop.properties[Workshop.HUMAN_01].suppliesMap = createTimeMap(6, 15, 38, 73, 125, 184);
Workshop.properties[Workshop.HUMAN_02].suppliesMap = createTimeMap(8, 20, 53, 102, 176, 257);
Workshop.properties[Workshop.HUMAN_07].suppliesMap = createTimeMap(44, 105, 279, 539, 933, 1363);
Workshop.properties[Workshop.HUMAN_08].suppliesMap = createTimeMap(49, 118, 312, 600, 1040, 1525);
Workshop.properties[Workshop.HUMAN_09].suppliesMap = createTimeMap(53, 130, 343, 662, 1145, 1675);
Workshop.properties[Workshop.HUMAN_10].suppliesMap = createTimeMap(58, 142, 373, 720, 1248, 1825);

Workshop.keys = function()
{
   return Object.keys(Workshop.properties);
};

Workshop.values = function()
{
   return Object.values(Workshop.properties);
};

Workshop.keys().forEach(function(buildingKey)
{
   const building = Workshop.properties[buildingKey];
   building.typeKey = BuildingType.WORKSHOP;
   building.race = Race.properties[building.raceKey];
   building.type = BuildingType.properties[building.typeKey];
});

function createTimeMap(value5, value15, value1, value3, value9, value24)
{
   const answer = {};

   answer[TimeSpan.FIVE_MINUTES] = value5;
   answer[TimeSpan.FIFTEEN_MINUTES] = value15;
   answer[TimeSpan.ONE_HOUR] = value1;
   answer[TimeSpan.THREE_HOURS] = value3;
   answer[TimeSpan.NINE_HOURS] = value9;
   answer[TimeSpan.ONE_DAY] = value24;

   return answer;
}

if (Object.freeze)
{
   Object.freeze(Workshop);
}

export default Workshop;