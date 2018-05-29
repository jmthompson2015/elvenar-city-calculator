import BuildingType from "./BuildingType.js";
import Race from "./Race.js";
import TimeSpan from "./TimeSpan.js";

const SteelManufactory = {
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
         name: "Steel Manufactory 1 (Elf)",
         raceKey: Race.ELF,
         level: 1,
         width: 2,
         height: 2,
         population: -36,
         tier1Product: 19,
         key: "elf01"
      },
      "elf02":
      {
         name: "Steel Manufactory 2 (Elf)",
         raceKey: Race.ELF,
         level: 2,
         width: 2,
         height: 2,
         population: -4,
         culture: -5,
         tier1Product: 25,
         key: "elf02"
      },
      "elf03":
      {
         name: "Steel Manufactory 3 (Elf)",
         raceKey: Race.ELF,
         level: 3,
         width: 2,
         height: 2,
         population: -4,
         culture: -4,
         tier1Product: 31,
         key: "elf03"
      },
      "elf04":
      {
         name: "Steel Manufactory 4 (Elf)",
         raceKey: Race.ELF,
         level: 4,
         width: 2,
         height: 2,
         population: -5,
         culture: -7,
         tier1Product: 38,
         key: "elf04"
      },
      "elf05":
      {
         name: "Steel Manufactory 5 (Elf)",
         raceKey: Race.ELF,
         level: 5,
         width: 2,
         height: 3,
         population: -33,
         culture: -17,
         tier1Product: 66,
         key: "elf05"
      },
      "elf06":
      {
         name: "Steel Manufactory 6 (Elf)",
         raceKey: Race.ELF,
         level: 6,
         width: 2,
         height: 3,
         population: -9,
         culture: -4,
         tier1Product: 75,
         key: "elf06"
      },
      "elf07":
      {
         name: "Steel Manufactory 7 (Elf)",
         raceKey: Race.ELF,
         level: 7,
         width: 2,
         height: 3,
         population: -14,
         culture: -4,
         tier1Product: 88,
         key: "elf07"
      },
      "elf08":
      {
         name: "Steel Manufactory 8 (Elf)",
         raceKey: Race.ELF,
         level: 8,
         width: 2,
         height: 3,
         population: -15,
         culture: -5,
         tier1Product: 97,
         key: "elf08"
      },
      "elf09":
      {
         name: "Steel Manufactory 9 (Elf)",
         raceKey: Race.ELF,
         level: 9,
         width: 3,
         height: 3,
         population: -84,
         culture: -30,
         tier1Product: 163,
         key: "elf09"
      },
      "elf10":
      {
         name: "Steel Manufactory 10 (Elf)",
         raceKey: Race.ELF,
         level: 10,
         width: 3,
         height: 3,
         population: -30,
         culture: -9,
         tier1Product: 179,
         key: "elf10"
      },
      "elf11":
      {
         name: "Steel Manufactory 11 (Elf)",
         raceKey: Race.ELF,
         level: 11,
         width: 3,
         height: 3,
         population: -36,
         culture: -9,
         tier1Product: 195,
         key: "elf11"
      },
      "elf12":
      {
         name: "Steel Manufactory 12 (Elf)",
         raceKey: Race.ELF,
         level: 12,
         width: 3,
         height: 3,
         population: -49,
         culture: -10,
         tier1Product: 210,
         key: "elf12"
      },
      "elf13":
      {
         name: "Steel Manufactory 13 (Elf)",
         raceKey: Race.ELF,
         level: 13,
         width: 3,
         height: 3,
         population: -49,
         culture: -12,
         tier1Product: 226,
         key: "elf13"
      },
      "elf14":
      {
         name: "Steel Manufactory 14 (Elf)",
         raceKey: Race.ELF,
         level: 14,
         width: 3,
         height: 3,
         population: -50,
         culture: -13,
         tier1Product: 242,
         key: "elf14"
      },
      "elf15":
      {
         name: "Steel Manufactory 15 (Elf)",
         raceKey: Race.ELF,
         level: 15,
         width: 3,
         height: 3,
         population: -62,
         culture: -14,
         tier1Product: 257,
         key: "elf15"
      },
      "elf16":
      {
         name: "Steel Manufactory 16 (Elf)",
         raceKey: Race.ELF,
         level: 16,
         width: 3,
         height: 5,
         population: -444,
         culture: -135,
         tier1Product: 446,
         key: "elf16"
      },
      "elf17":
      {
         name: "Steel Manufactory 17 (Elf)",
         raceKey: Race.ELF,
         level: 17,
         width: 3,
         height: 5,
         population: -141,
         culture: -50,
         tier1Product: 480,
         key: "elf17"
      },
      "elf18":
      {
         name: "Steel Manufactory 18 (Elf)",
         raceKey: Race.ELF,
         level: 18,
         width: 3,
         height: 5,
         population: -164,
         culture: -59,
         tier1Product: 518,
         key: "elf18"
      },
      "elf19":
      {
         name: "Steel Manufactory 19 (Elf)",
         raceKey: Race.ELF,
         level: 19,
         width: 3,
         height: 5,
         population: -189,
         culture: -70,
         tier1Product: 559,
         key: "elf19"
      },
      "elf20":
      {
         name: "Steel Manufactory 20 (Elf)",
         raceKey: Race.ELF,
         level: 20,
         width: 3,
         height: 6,
         population: -742,
         culture: -131,
         tier1Product: 725,
         key: "elf20"
      },
      "elf21":
      {
         name: "Steel Manufactory 21 (Elf)",
         raceKey: Race.ELF,
         level: 21,
         width: 3,
         height: 6,
         population: -332,
         culture: -106,
         tier1Product: 781,
         key: "elf21"
      },
      "elf22":
      {
         name: "Steel Manufactory 22 (Elf)",
         raceKey: Race.ELF,
         level: 22,
         width: 3,
         height: 6,
         population: -383,
         culture: -125,
         tier1Product: 841,
         key: "elf22"
      },
      "elf23":
      {
         name: "Steel Manufactory 23 (Elf)",
         raceKey: Race.ELF,
         level: 23,
         width: 3,
         height: 6,
         population: -442,
         culture: -148,
         tier1Product: 910,
         key: "elf23"
      },
      "human01":
      {
         name: "Steel Manufactory 1 (Human)",
         raceKey: Race.HUMAN,
         level: 1,
         width: 2,
         height: 2,
         population: -38,
         tier1Product: 19,
         key: "human01"
      },
      "human02":
      {
         name: "Steel Manufactory 2 (Human)",
         raceKey: Race.HUMAN,
         level: 2,
         width: 2,
         height: 2,
         population: -4,
         culture: -4,
         tier1Product: 25,
         key: "human02"
      },
      "human03":
      {
         name: "Steel Manufactory 3 (Human)",
         raceKey: Race.HUMAN,
         level: 3,
         width: 2,
         height: 2,
         population: -5,
         culture: -4,
         tier1Product: 31,
         key: "human03"
      },
      "human04":
      {
         name: "Steel Manufactory 4 (Human)",
         raceKey: Race.HUMAN,
         level: 4,
         width: 2,
         height: 2,
         population: -5,
         culture: -6,
         tier1Product: 38,
         key: "human04"
      },
      "human05":
      {
         name: "Steel Manufactory 5 (Human)",
         raceKey: Race.HUMAN,
         level: 5,
         width: 2,
         height: 2,
         population: -6,
         culture: -6,
         tier1Product: 44,
         key: "human05"
      },
      "human06":
      {
         name: "Steel Manufactory 6 (Human)",
         raceKey: Race.HUMAN,
         level: 6,
         width: 2,
         height: 2,
         population: -8,
         culture: -2,
         tier1Product: 50,
         key: "human06"
      },
      "human07":
      {
         name: "Steel Manufactory 7 (Human)",
         raceKey: Race.HUMAN,
         level: 7,
         width: 3,
         height: 3,
         population: -104,
         culture: -33,
         tier1Product: 132,
         key: "human07"
      },
      "human08":
      {
         name: "Steel Manufactory 8 (Human)",
         raceKey: Race.HUMAN,
         level: 8,
         width: 3,
         height: 3,
         population: -20,
         culture: -7,
         tier1Product: 148,
         key: "human08"
      },
      "human09":
      {
         name: "Steel Manufactory 9 (Human)",
         raceKey: Race.HUMAN,
         level: 9,
         width: 3,
         height: 3,
         population: -32,
         culture: -6,
         tier1Product: 163,
         key: "human09"
      },
      "human10":
      {
         name: "Steel Manufactory 10 (Human)",
         raceKey: Race.HUMAN,
         level: 10,
         width: 3,
         height: 3,
         population: -40,
         culture: -8,
         tier1Product: 179,
         key: "human10"
      },
      "human11":
      {
         name: "Steel Manufactory 11 (Human)",
         raceKey: Race.HUMAN,
         level: 11,
         width: 4,
         height: 4,
         population: -275,
         culture: -74,
         tier1Product: 345,
         key: "human11"
      },
      "human12":
      {
         name: "Steel Manufactory 12 (Human)",
         raceKey: Race.HUMAN,
         level: 12,
         width: 4,
         height: 4,
         population: -73,
         culture: -17,
         tier1Product: 373,
         key: "human12"
      },
      "human13":
      {
         name: "Steel Manufactory 13 (Human)",
         raceKey: Race.HUMAN,
         level: 13,
         width: 4,
         height: 4,
         population: -91,
         culture: -18,
         tier1Product: 402,
         key: "human13"
      },
      "human14":
      {
         name: "Steel Manufactory 14 (Human)",
         raceKey: Race.HUMAN,
         level: 14,
         width: 4,
         height: 4,
         population: -110,
         culture: -21,
         tier1Product: 430,
         key: "human14"
      },
      "human15":
      {
         name: "Steel Manufactory 15 (Human)",
         raceKey: Race.HUMAN,
         level: 15,
         width: 4,
         height: 4,
         population: -128,
         culture: -23,
         tier1Product: 458,
         key: "human15"
      },
      "human16":
      {
         name: "Steel Manufactory 16 (Human)",
         raceKey: Race.HUMAN,
         level: 16,
         width: 3,
         height: 5,
         population: -77,
         culture: -24,
         tier1Product: 468,
         key: "human16"
      },
      "human17":
      {
         name: "Steel Manufactory 17 (Human)",
         raceKey: Race.HUMAN,
         level: 17,
         width: 3,
         height: 5,
         population: -156,
         culture: -45,
         tier1Product: 480,
         key: "human17"
      },
      "human18":
      {
         name: "Steel Manufactory 18 (Human)",
         raceKey: Race.HUMAN,
         level: 18,
         width: 3,
         height: 5,
         population: -180,
         culture: -54,
         tier1Product: 518,
         key: "human18"
      },
      "human19":
      {
         name: "Steel Manufactory 19 (Human)",
         raceKey: Race.HUMAN,
         level: 19,
         width: 3,
         height: 5,
         population: -208,
         culture: -64,
         tier1Product: 559,
         key: "human19"
      },
      "human20":
      {
         name: "Steel Manufactory 20 (Human)",
         raceKey: Race.HUMAN,
         level: 20,
         width: 3,
         height: 6,
         population: -600,
         culture: -172,
         tier1Product: 725,
         key: "human20"
      },
      "human21":
      {
         name: "Steel Manufactory 21 (Human)",
         raceKey: Race.HUMAN,
         level: 21,
         width: 3,
         height: 6,
         population: -332,
         culture: -106,
         tier1Product: 781,
         key: "human21"
      },
      "human22":
      {
         name: "Steel Manufactory 22 (Human)",
         raceKey: Race.HUMAN,
         level: 22,
         width: 3,
         height: 6,
         population: -383,
         culture: -125,
         tier1Product: 841,
         key: "human22"
      },
      "human23":
      {
         name: "Steel Manufactory 23 (Human)",
         raceKey: Race.HUMAN,
         level: 23,
         width: 3,
         height: 6,
         population: -442,
         culture: -148,
         tier1Product: 910,
         key: "human23"
      },
   },
};

SteelManufactory.keys = function()
{
   return Object.keys(SteelManufactory.properties);
};

SteelManufactory.values = function()
{
   return Object.values(SteelManufactory.properties);
};

// Supplementary data.
SteelManufactory.properties[SteelManufactory.ELF_01].coinMap = createTimeMap(-120, -220, -380, -560);
SteelManufactory.properties[SteelManufactory.ELF_01].suppliesMap = createTimeMap(-12, -22, -38, -56);
SteelManufactory.properties[SteelManufactory.ELF_01].tier1ProductMap = createTimeMap(20, 37, 63, 92);
SteelManufactory.properties[SteelManufactory.ELF_02].coinMap = createTimeMap(-160, -300, -500, -740);
SteelManufactory.properties[SteelManufactory.ELF_02].suppliesMap = createTimeMap(-16, -30, -50, -74);
SteelManufactory.properties[SteelManufactory.ELF_02].tier1ProductMap = createTimeMap(27, 50, 82, 122);
SteelManufactory.properties[SteelManufactory.ELF_03].coinMap = createTimeMap(-200, -360, -620, -920);
SteelManufactory.properties[SteelManufactory.ELF_03].suppliesMap = createTimeMap(-20, -36, -62, -92);
SteelManufactory.properties[SteelManufactory.ELF_03].tier1ProductMap = createTimeMap(33, 60, 102, 151);
SteelManufactory.properties[SteelManufactory.ELF_04].coinMap = createTimeMap(-240, -440, -760, -1100);
SteelManufactory.properties[SteelManufactory.ELF_04].suppliesMap = createTimeMap(-24, -44, -76, -110);
SteelManufactory.properties[SteelManufactory.ELF_04].tier1ProductMap = createTimeMap(40, 73, 125, 181);
SteelManufactory.properties[SteelManufactory.ELF_05].coinMap = createTimeMap(-420, -760, -1320, -1920);
SteelManufactory.properties[SteelManufactory.ELF_05].suppliesMap = createTimeMap(-42, -76, -132, -192);
SteelManufactory.properties[SteelManufactory.ELF_05].tier1ProductMap = createTimeMap(69, 125, 217, 315);
SteelManufactory.properties[SteelManufactory.ELF_06].coinMap = createTimeMap(-480, -880, -1500, -2200);
SteelManufactory.properties[SteelManufactory.ELF_06].suppliesMap = createTimeMap(-48, -88, -150, -220);
SteelManufactory.properties[SteelManufactory.ELF_06].tier1ProductMap = createTimeMap(79, 145, 246, 361);
SteelManufactory.properties[SteelManufactory.ELF_07].coinMap = createTimeMap(-560, -1020, -1760, -2580);
SteelManufactory.properties[SteelManufactory.ELF_07].suppliesMap = createTimeMap(-56, -102, -176, -258);
SteelManufactory.properties[SteelManufactory.ELF_07].tier1ProductMap = createTimeMap(92, 168, 289, 424);
SteelManufactory.properties[SteelManufactory.ELF_08].coinMap = createTimeMap(-620, -1140, -1940, -2840);
SteelManufactory.properties[SteelManufactory.ELF_08].suppliesMap = createTimeMap(-62, -114, -194, -284);
SteelManufactory.properties[SteelManufactory.ELF_08].tier1ProductMap = createTimeMap(98, 179, 305, 446);

SteelManufactory.properties[SteelManufactory.HUMAN_01].coinMap = createTimeMap(-120, -220, -380, -560);
SteelManufactory.properties[SteelManufactory.HUMAN_01].suppliesMap = createTimeMap(-12, -22, -38, -56);
SteelManufactory.properties[SteelManufactory.HUMAN_01].tier1ProductMap = createTimeMap(19, 35, 60, 88);
SteelManufactory.properties[SteelManufactory.HUMAN_02].coinMap = createTimeMap(-160, -300, -500, -740);
SteelManufactory.properties[SteelManufactory.HUMAN_02].suppliesMap = createTimeMap(-16, -30, -50, -74);
SteelManufactory.properties[SteelManufactory.HUMAN_02].tier1ProductMap = createTimeMap(26, 48, 79, 117);
SteelManufactory.properties[SteelManufactory.HUMAN_03].coinMap = createTimeMap(-200, -360, -620, -920);
SteelManufactory.properties[SteelManufactory.HUMAN_03].suppliesMap = createTimeMap(-20, -36, -62, -92);
SteelManufactory.properties[SteelManufactory.HUMAN_03].tier1ProductMap = createTimeMap(32, 57, 98, 145);
SteelManufactory.properties[SteelManufactory.HUMAN_04].coinMap = createTimeMap(-240, -440, -760, -1100);
SteelManufactory.properties[SteelManufactory.HUMAN_04].suppliesMap = createTimeMap(-24, -44, -76, -110);
SteelManufactory.properties[SteelManufactory.HUMAN_04].tier1ProductMap = createTimeMap(38, 70, 120, 173);
SteelManufactory.properties[SteelManufactory.HUMAN_05].coinMap = createTimeMap(-280, -520, -880, -1280);
SteelManufactory.properties[SteelManufactory.HUMAN_05].suppliesMap = createTimeMap(-28, -52, -88, -128);
SteelManufactory.properties[SteelManufactory.HUMAN_05].tier1ProductMap = createTimeMap(44, 82, 139, 201);
SteelManufactory.properties[SteelManufactory.HUMAN_06].coinMap = createTimeMap(-320, -580, -1000, -1480);
SteelManufactory.properties[SteelManufactory.HUMAN_06].suppliesMap = createTimeMap(-32, -58, -100, -148);
SteelManufactory.properties[SteelManufactory.HUMAN_06].tier1ProductMap = createTimeMap(51, 92, 157, 233);
SteelManufactory.properties[SteelManufactory.HUMAN_07].coinMap = createTimeMap(-840, -1540, -2640, -3860);
SteelManufactory.properties[SteelManufactory.HUMAN_07].suppliesMap = createTimeMap(-84, -154, -264, -386);
SteelManufactory.properties[SteelManufactory.HUMAN_07].tier1ProductMap = createTimeMap(132, 242, 415, 607);
SteelManufactory.properties[SteelManufactory.HUMAN_08].coinMap = createTimeMap(-940, -1720, -2960, -4320);
SteelManufactory.properties[SteelManufactory.HUMAN_08].suppliesMap = createTimeMap(-94, -172, -296, -432);
SteelManufactory.properties[SteelManufactory.HUMAN_08].tier1ProductMap = createTimeMap(148, 271, 465, 679);
SteelManufactory.properties[SteelManufactory.HUMAN_09].coinMap = createTimeMap(-1040, -1900, -3260, -4780);
SteelManufactory.properties[SteelManufactory.HUMAN_09].suppliesMap = createTimeMap(-104, -190, -326, -478);
SteelManufactory.properties[SteelManufactory.HUMAN_09].tier1ProductMap = createTimeMap(148, 271, 465, 679);
SteelManufactory.properties[SteelManufactory.HUMAN_10].coinMap = createTimeMap(-1140, -2080, -3580, -5240);
SteelManufactory.properties[SteelManufactory.HUMAN_10].suppliesMap = createTimeMap(-114, -208, -358, -524);
SteelManufactory.properties[SteelManufactory.HUMAN_10].tier1ProductMap = createTimeMap(179, 327, 563, 823);

SteelManufactory.keys().forEach(function(buildingKey)
{
   const building = SteelManufactory.properties[buildingKey];
   building.typeKey = BuildingType.STEEL_MANUFACTORY;
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
   Object.freeze(SteelManufactory);
}

export default SteelManufactory;