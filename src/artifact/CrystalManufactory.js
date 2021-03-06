import BuildingType from "./BuildingType.js";
import Race from "./Race.js";
import TimeSpan from "./TimeSpan.js";

const CrystalManufactory = {
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

   properties:
   {
      "elf01":
      {
         name: "Crystal Manufactory 1 (Elf)",
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 2,
         population: -92,
         tier2Product: 28,
         key: "elf01"
      },
      "elf02":
      {
         name: "Crystal Manufactory 2 (Elf)",
         raceKey: Race.ELF,
         level: 2,
         width: 3,
         height: 2,
         population: -11,
         culture: -8,
         tier2Product: 38,
         key: "elf02"
      },
      "elf03":
      {
         name: "Crystal Manufactory 3 (Elf)",
         raceKey: Race.ELF,
         level: 3,
         width: 3,
         height: 2,
         population: -11,
         culture: -8,
         tier2Product: 47,
         key: "elf03"
      },
      "elf04":
      {
         name: "Crystal Manufactory 4 (Elf)",
         raceKey: Race.ELF,
         level: 4,
         width: 3,
         height: 2,
         population: -13,
         culture: -11,
         tier2Product: 56,
         key: "elf04"
      },
      "elf05":
      {
         name: "Crystal Manufactory 5 (Elf)",
         raceKey: Race.ELF,
         level: 5,
         width: 3,
         height: 2,
         population: -14,
         culture: -11,
         tier2Product: 66,
         key: "elf05"
      },
      "elf06":
      {
         name: "Crystal Manufactory 6 (Elf)",
         raceKey: Race.ELF,
         level: 6,
         width: 3,
         height: 2,
         population: -16,
         culture: -4,
         tier2Product: 75,
         key: "elf06"
      },
      "elf07":
      {
         name: "Crystal Manufactory 7 (Elf)",
         raceKey: Race.ELF,
         level: 7,
         width: 3,
         height: 3,
         population: -111,
         culture: -29,
         tier2Product: 132,
         key: "elf07"
      },
      "elf08":
      {
         name: "Crystal Manufactory 8 (Elf)",
         raceKey: Race.ELF,
         level: 8,
         width: 3,
         height: 3,
         population: -40,
         culture: -7,
         tier2Product: 148,
         key: "elf08"
      },
      "elf09":
      {
         name: "Crystal Manufactory 9 (Elf)",
         raceKey: Race.ELF,
         level: 9,
         width: 3,
         height: 3,
         population: -41,
         culture: -9,
         tier2Product: 163,
         key: "elf09"
      },
      "elf10":
      {
         name: "Crystal Manufactory 10 (Elf)",
         raceKey: Race.ELF,
         level: 10,
         width: 3,
         height: 3,
         population: -51,
         culture: -10,
         tier2Product: 179,
         key: "elf10"
      },
      "elf11":
      {
         name: "Crystal Manufactory 11 (Elf)",
         raceKey: Race.ELF,
         level: 11,
         width: 4,
         height: 3,
         population: -217,
         culture: -47,
         tier2Product: 257,
         key: "elf11"
      },
      "elf12":
      {
         name: "Crystal Manufactory 12 (Elf)",
         raceKey: Race.ELF,
         level: 12,
         width: 4,
         height: 3,
         population: -110,
         culture: -15,
         tier2Product: 279,
         key: "elf12"
      },
      "elf13":
      {
         name: "Crystal Manufactory 13 (Elf)",
         raceKey: Race.ELF,
         level: 13,
         width: 4,
         height: 3,
         population: -112,
         culture: -18,
         tier2Product: 301,
         key: "elf13"
      },
      "elf14":
      {
         name: "Crystal Manufactory 14 (Elf)",
         raceKey: Race.ELF,
         level: 14,
         width: 4,
         height: 3,
         population: -114,
         culture: -20,
         tier2Product: 323,
         key: "elf14"
      },
      "elf15":
      {
         name: "Crystal Manufactory 15 (Elf)",
         raceKey: Race.ELF,
         level: 15,
         width: 4,
         height: 3,
         population: -143,
         culture: -22,
         tier2Product: 342,
         key: "elf15"
      },
      "elf16":
      {
         name: "Crystal Manufactory 16 (Elf)",
         raceKey: Race.ELF,
         level: 16,
         width: 4,
         height: 4,
         population: -436,
         culture: -159,
         tier2Product: 493,
         key: "elf16"
      },
      "elf17":
      {
         name: "Crystal Manufactory 17 (Elf)",
         raceKey: Race.ELF,
         level: 17,
         width: 4,
         height: 4,
         population: -236,
         culture: -68,
         tier2Product: 534,
         key: "elf17"
      },
      "elf18":
      {
         name: "Crystal Manufactory 18 (Elf)",
         raceKey: Race.ELF,
         level: 18,
         width: 4,
         height: 4,
         population: -272,
         culture: -80,
         tier2Product: 574,
         key: "elf18"
      },
      "elf19":
      {
         name: "Crystal Manufactory 19 (Elf)",
         raceKey: Race.ELF,
         level: 19,
         width: 4,
         height: 4,
         population: -313,
         culture: -95,
         tier2Product: 618,
         key: "elf19"
      },
      "elf20":
      {
         name: "Crystal Manufactory 20 (Elf)",
         raceKey: Race.ELF,
         level: 20,
         width: 4,
         height: 5,
         population: -1007,
         culture: -294,
         tier2Product: 835,
         key: "elf20"
      },
      "elf21":
      {
         name: "Crystal Manufactory 21 (Elf)",
         raceKey: Race.ELF,
         level: 21,
         width: 4,
         height: 5,
         population: -516,
         culture: -165,
         tier2Product: 901,
         key: "elf21"
      },
      "elf22":
      {
         name: "Crystal Manufactory 22 (Elf)",
         raceKey: Race.ELF,
         level: 22,
         width: 4,
         height: 5,
         population: -596,
         culture: -194,
         tier2Product: 973,
         key: "elf22"
      },
      "elf23":
      {
         name: "Crystal Manufactory 23 (Elf)",
         raceKey: Race.ELF,
         level: 23,
         width: 4,
         height: 5,
         population: -687,
         culture: -230,
         tier2Product: 1048,
         key: "elf23"
      },
      "human01":
      {
         name: "Crystal Manufactory 1 (Human)",
         raceKey: Race.HUMAN,
         level: 1,
         width: 3,
         height: 2,
         population: -80,
         tier2Product: 28,
         key: "human01"
      },
      "human02":
      {
         name: "Crystal Manufactory 2 (Human)",
         raceKey: Race.HUMAN,
         level: 2,
         width: 3,
         height: 2,
         population: -9,
         culture: -9,
         tier2Product: 38,
         key: "human02"
      },
      "human03":
      {
         name: "Crystal Manufactory 3 (Human)",
         raceKey: Race.HUMAN,
         level: 3,
         width: 3,
         height: 2,
         population: -9,
         culture: -9,
         tier2Product: 47,
         key: "human03"
      },
      "human04":
      {
         name: "Crystal Manufactory 4 (Human)",
         raceKey: Race.HUMAN,
         level: 4,
         width: 3,
         height: 2,
         population: -11,
         culture: -12,
         tier2Product: 56,
         key: "human04"
      },
      "human05":
      {
         name: "Crystal Manufactory 5 (Human)",
         raceKey: Race.HUMAN,
         level: 5,
         width: 3,
         height: 3,
         population: -73,
         culture: -33,
         tier2Product: 100,
         key: "human05"
      },
      "human06":
      {
         name: "Crystal Manufactory 6 (Human)",
         raceKey: Race.HUMAN,
         level: 6,
         width: 3,
         height: 3,
         population: -25,
         culture: -7,
         tier2Product: 116,
         key: "human06"
      },
      "human07":
      {
         name: "Crystal Manufactory 7 (Human)",
         raceKey: Race.HUMAN,
         level: 7,
         width: 3,
         height: 3,
         population: -31,
         culture: -8,
         tier2Product: 132,
         key: "human07"
      },
      "human08":
      {
         name: "Crystal Manufactory 8 (Human)",
         raceKey: Race.HUMAN,
         level: 8,
         width: 3,
         height: 3,
         population: -28,
         culture: -8,
         tier2Product: 148,
         key: "human08"
      },
      "human09":
      {
         name: "Crystal Manufactory 9 (Human)",
         raceKey: Race.HUMAN,
         level: 9,
         width: 4,
         height: 3,
         population: -149,
         culture: -42,
         tier2Product: 217,
         key: "human09"
      },
      "human10":
      {
         name: "Crystal Manufactory 10 (Human)",
         raceKey: Race.HUMAN,
         level: 10,
         width: 4,
         height: 3,
         population: -73,
         culture: -14,
         tier2Product: 235,
         key: "human10"
      },
      "human11":
      {
         name: "Crystal Manufactory 11 (Human)",
         raceKey: Race.HUMAN,
         level: 11,
         width: 4,
         height: 3,
         population: -75,
         culture: -15,
         tier2Product: 257,
         key: "human11"
      },
      "human12":
      {
         name: "Crystal Manufactory 12 (Human)",
         raceKey: Race.HUMAN,
         level: 12,
         width: 4,
         height: 3,
         population: -78,
         culture: -18,
         tier2Product: 279,
         key: "human12"
      },
      "human13":
      {
         name: "Crystal Manufactory 13 (Human)",
         raceKey: Race.HUMAN,
         level: 13,
         width: 4,
         height: 3,
         population: -96,
         culture: -19,
         tier2Product: 301,
         key: "human13"
      },
      "human14":
      {
         name: "Crystal Manufactory 14 (Human)",
         raceKey: Race.HUMAN,
         level: 14,
         width: 4,
         height: 3,
         population: -115,
         culture: -22,
         tier2Product: 323,
         key: "human14"
      },
      "human15":
      {
         name: "Crystal Manufactory 15 (Human)",
         raceKey: Race.HUMAN,
         level: 15,
         width: 4,
         height: 3,
         population: -134,
         culture: -24,
         tier2Product: 342,
         key: "human15"
      },
      "human16":
      {
         name: "Crystal Manufactory 16 (Human)",
         raceKey: Race.HUMAN,
         level: 16,
         width: 4,
         height: 4,
         population: -531,
         culture: -138,
         tier2Product: 493,
         key: "human16"
      },
      "human17":
      {
         name: "Crystal Manufactory 17 (Human)",
         raceKey: Race.HUMAN,
         level: 17,
         width: 4,
         height: 4,
         population: -233,
         culture: -68,
         tier2Product: 534,
         key: "human17"
      },
      "human18":
      {
         name: "Crystal Manufactory 18 (Human)",
         raceKey: Race.HUMAN,
         level: 18,
         width: 4,
         height: 4,
         population: -270,
         culture: -80,
         tier2Product: 574,
         key: "human18"
      },
      "human19":
      {
         name: "Crystal Manufactory 19 (Human)",
         raceKey: Race.HUMAN,
         level: 19,
         width: 4,
         height: 4,
         population: -310,
         culture: -95,
         tier2Product: 618,
         key: "human19"
      },
      "human20":
      {
         name: "Crystal Manufactory 20 (Human)",
         raceKey: Race.HUMAN,
         level: 20,
         width: 4,
         height: 5,
         population: -1030,
         culture: -294,
         tier2Product: 835,
         key: "human20"
      },
      "human21":
      {
         name: "Crystal Manufactory 21 (Human)",
         raceKey: Race.HUMAN,
         level: 21,
         width: 4,
         height: 5,
         population: -516,
         culture: -165,
         tier2Product: 901,
         key: "human21"
      },
      "human22":
      {
         name: "Crystal Manufactory 22 (Human)",
         raceKey: Race.HUMAN,
         level: 22,
         width: 4,
         height: 5,
         population: -596,
         culture: -194,
         tier2Product: 973,
         key: "human22"
      },
      "human23":
      {
         name: "Crystal Manufactory 23 (Human)",
         raceKey: Race.HUMAN,
         level: 23,
         width: 4,
         height: 5,
         population: -687,
         culture: -230,
         tier2Product: 1048,
         key: "human23"
      },
   },
};

CrystalManufactory.keys = function()
{
   return Object.keys(CrystalManufactory.properties);
};

CrystalManufactory.values = function()
{
   return Object.values(CrystalManufactory.properties);
};

// Supplementary data.
CrystalManufactory.properties[CrystalManufactory.ELF_01].coinMap = createTimeMap(-720, -1280, -2240, -3280);
CrystalManufactory.properties[CrystalManufactory.ELF_01].suppliesMap = createTimeMap(-72, -128, -224, -328);
CrystalManufactory.properties[CrystalManufactory.ELF_01].tier2ProductMap = createTimeMap(29, 51, 88, 129);
CrystalManufactory.properties[CrystalManufactory.ELF_02].coinMap = createTimeMap(-960, -1760, -3040, -4400);
CrystalManufactory.properties[CrystalManufactory.ELF_02].suppliesMap = createTimeMap(-96, -176, -304, -440);
CrystalManufactory.properties[CrystalManufactory.ELF_02].tier2ProductMap = createTimeMap(38, 70, 120, 173);
CrystalManufactory.properties[CrystalManufactory.ELF_03].coinMap = createTimeMap(-1200, -2160, -3760, -5520);
CrystalManufactory.properties[CrystalManufactory.ELF_03].suppliesMap = createTimeMap(-120, -216, -376, -552);
CrystalManufactory.properties[CrystalManufactory.ELF_03].tier2ProductMap = createTimeMap(48, 85, 148, 217);
CrystalManufactory.properties[CrystalManufactory.ELF_04].coinMap = createTimeMap(-1440, -2640, -4480, -6640);
CrystalManufactory.properties[CrystalManufactory.ELF_04].suppliesMap = createTimeMap(-144, -264, -448, -664);
CrystalManufactory.properties[CrystalManufactory.ELF_04].tier2ProductMap = createTimeMap(57, 104, 176, 261);
CrystalManufactory.properties[CrystalManufactory.ELF_05].coinMap = createTimeMap(-1680, -3040, -5280, -7680);
CrystalManufactory.properties[CrystalManufactory.ELF_05].suppliesMap = createTimeMap(-168, -304, -528, -768);
CrystalManufactory.properties[CrystalManufactory.ELF_05].tier2ProductMap = createTimeMap(66, 120, 208, 302);
CrystalManufactory.properties[CrystalManufactory.ELF_06].coinMap = createTimeMap(-1920, -3520, -6000, -8800);
CrystalManufactory.properties[CrystalManufactory.ELF_06].suppliesMap = createTimeMap(-192, -352, -600, -880);
CrystalManufactory.properties[CrystalManufactory.ELF_06].tier2ProductMap = createTimeMap(79, 145, 246, 361);
CrystalManufactory.properties[CrystalManufactory.ELF_07].coinMap = createTimeMap(-3360, -6160, -10600, -15400);
CrystalManufactory.properties[CrystalManufactory.ELF_07].suppliesMap = createTimeMap(-336, -616, -1060, -1540);
CrystalManufactory.properties[CrystalManufactory.ELF_07].tier2ProductMap = createTimeMap(138, 253, 433, 634);
CrystalManufactory.properties[CrystalManufactory.ELF_08].coinMap = createTimeMap(-3760, -6880, -11800, -17300);
CrystalManufactory.properties[CrystalManufactory.ELF_08].suppliesMap = createTimeMap(-376, -688, -1180, -1730);
CrystalManufactory.properties[CrystalManufactory.ELF_08].tier2ProductMap = createTimeMap(148, 271, 465, 679);
CrystalManufactory.properties[CrystalManufactory.ELF_10].coinMap = createTimeMap(-4560, -8320, -14300, -21000);
CrystalManufactory.properties[CrystalManufactory.ELF_10].suppliesMap = createTimeMap(-456, -832, -1430, -2100);
CrystalManufactory.properties[CrystalManufactory.ELF_10].tier2ProductMap = createTimeMap(179, 327, 563, 823);

CrystalManufactory.properties[CrystalManufactory.HUMAN_01].coinMap = createTimeMap(-720, -1280, -2240, -3280);
CrystalManufactory.properties[CrystalManufactory.HUMAN_01].suppliesMap = createTimeMap(-72, -128, -224, -328);
CrystalManufactory.properties[CrystalManufactory.HUMAN_01].tier2ProductMap = createTimeMap(29, 51, 88, 129);
CrystalManufactory.properties[CrystalManufactory.HUMAN_02].coinMap = createTimeMap(-960, -1760, -3040, -4400);
CrystalManufactory.properties[CrystalManufactory.HUMAN_02].suppliesMap = createTimeMap(-96, -176, -304, -440);
CrystalManufactory.properties[CrystalManufactory.HUMAN_02].tier2ProductMap = createTimeMap(38, 70, 120, 173);
CrystalManufactory.properties[CrystalManufactory.HUMAN_03].coinMap = createTimeMap(-1200, -2160, -3760, -5520);
CrystalManufactory.properties[CrystalManufactory.HUMAN_03].suppliesMap = createTimeMap(-120, -216, -376, -552);
CrystalManufactory.properties[CrystalManufactory.HUMAN_03].tier2ProductMap = createTimeMap(48, 85, 148, 217);
CrystalManufactory.properties[CrystalManufactory.HUMAN_04].coinMap = createTimeMap(-1440, -2640, -4480, -6640);
CrystalManufactory.properties[CrystalManufactory.HUMAN_04].suppliesMap = createTimeMap(-144, -264, -448, -664);
CrystalManufactory.properties[CrystalManufactory.HUMAN_04].tier2ProductMap = createTimeMap(52, 95, 161, 238);
CrystalManufactory.properties[CrystalManufactory.HUMAN_05].coinMap = createTimeMap(-2560, -4720, -8000, -11800);
CrystalManufactory.properties[CrystalManufactory.HUMAN_05].suppliesMap = createTimeMap(-256, -472, -800, -1180);
CrystalManufactory.properties[CrystalManufactory.HUMAN_05].tier2ProductMap = createTimeMap(101, 186, 314, 462);
CrystalManufactory.properties[CrystalManufactory.HUMAN_06].coinMap = createTimeMap(-2960, -5440, -9280, -13600);
CrystalManufactory.properties[CrystalManufactory.HUMAN_06].suppliesMap = createTimeMap(-296, -544, -928, -1360);
CrystalManufactory.properties[CrystalManufactory.HUMAN_06].tier2ProductMap = createTimeMap(117, 214, 365, 534);
CrystalManufactory.properties[CrystalManufactory.HUMAN_07].coinMap = createTimeMap(-3360, -6160, -10600, -15400);
CrystalManufactory.properties[CrystalManufactory.HUMAN_07].suppliesMap = createTimeMap(-336, -616, -1060, -1540);
CrystalManufactory.properties[CrystalManufactory.HUMAN_07].tier2ProductMap = createTimeMap(132, 242, 415, 607);
CrystalManufactory.properties[CrystalManufactory.HUMAN_08].coinMap = createTimeMap(-3760, -6880, -11800, -17300);
CrystalManufactory.properties[CrystalManufactory.HUMAN_08].suppliesMap = createTimeMap(-376, -688, -1180, -1730);
CrystalManufactory.properties[CrystalManufactory.HUMAN_08].tier2ProductMap = createTimeMap(148, 271, 465, 679);

CrystalManufactory.keys().forEach(function(buildingKey)
{
   const building = CrystalManufactory.properties[buildingKey];
   building.typeKey = BuildingType.CRYSTAL_MANUFACTORY;
   building.race = Race.properties[building.raceKey];
   building.type = BuildingType.properties[building.typeKey];
});

function createTimeMap(value3, value9, value24, value48)
{
   const answer = {};

   answer[TimeSpan.THREE_HOURS] = value3;
   answer[TimeSpan.NINE_HOURS] = value9;
   answer[TimeSpan.ONE_DAY] = value24;
   answer[TimeSpan.TWO_DAYS] = value48;

   return answer;
}

if (Object.freeze)
{
   Object.freeze(CrystalManufactory);
}

export default CrystalManufactory;