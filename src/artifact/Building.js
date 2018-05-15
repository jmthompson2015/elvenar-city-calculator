import InputValidator from "../utility/InputValidator.js";

import BuildingType from "./BuildingType.js";
import Race from "./Race.js";

const Building = {
   BUILDERS_HUT_ELF_01: "buildersHutElf01",
   BUILDERS_HUT_ELF_02: "buildersHutElf02",
   BUILDERS_HUT_ELF_03: "buildersHutElf03",
   BUILDERS_HUT_ELF_04: "buildersHutElf04",
   BUILDERS_HUT_ELF_05: "buildersHutElf05",
   BUILDERS_HUT_HUMAN_01: "buildersHutHuman01",
   BUILDERS_HUT_HUMAN_02: "buildersHutHuman02",
   BUILDERS_HUT_HUMAN_03: "buildersHutHuman03",
   BUILDERS_HUT_HUMAN_04: "buildersHutHuman04",
   BUILDERS_HUT_HUMAN_05: "buildersHutHuman05",
   ELIXIR_MANUFACTORY_ELF_01: "elixirManufactoryElf01",
   ELIXIR_MANUFACTORY_ELF_02: "elixirManufactoryElf02",
   ELIXIR_MANUFACTORY_ELF_03: "elixirManufactoryElf03",
   ELIXIR_MANUFACTORY_ELF_04: "elixirManufactoryElf04",
   ELIXIR_MANUFACTORY_ELF_05: "elixirManufactoryElf05",
   ELIXIR_MANUFACTORY_ELF_06: "elixirManufactoryElf06",
   ELIXIR_MANUFACTORY_ELF_07: "elixirManufactoryElf07",
   ELIXIR_MANUFACTORY_ELF_08: "elixirManufactoryElf08",
   ELIXIR_MANUFACTORY_ELF_09: "elixirManufactoryElf09",
   ELIXIR_MANUFACTORY_ELF_10: "elixirManufactoryElf10",
   ELIXIR_MANUFACTORY_ELF_11: "elixirManufactoryElf11",
   ELIXIR_MANUFACTORY_ELF_12: "elixirManufactoryElf12",
   ELIXIR_MANUFACTORY_ELF_13: "elixirManufactoryElf13",
   ELIXIR_MANUFACTORY_ELF_14: "elixirManufactoryElf14",
   ELIXIR_MANUFACTORY_ELF_15: "elixirManufactoryElf15",
   ELIXIR_MANUFACTORY_ELF_16: "elixirManufactoryElf16",
   ELIXIR_MANUFACTORY_ELF_17: "elixirManufactoryElf17",
   ELIXIR_MANUFACTORY_ELF_18: "elixirManufactoryElf18",
   ELIXIR_MANUFACTORY_ELF_19: "elixirManufactoryElf19",
   ELIXIR_MANUFACTORY_ELF_20: "elixirManufactoryElf20",
   ELIXIR_MANUFACTORY_ELF_21: "elixirManufactoryElf21",
   ELIXIR_MANUFACTORY_ELF_22: "elixirManufactoryElf22",
   ELIXIR_MANUFACTORY_ELF_23: "elixirManufactoryElf23",
   ELIXIR_MANUFACTORY_HUMAN_01: "elixirManufactoryHuman01",
   ELIXIR_MANUFACTORY_HUMAN_02: "elixirManufactoryHuman02",
   ELIXIR_MANUFACTORY_HUMAN_03: "elixirManufactoryHuman03",
   ELIXIR_MANUFACTORY_HUMAN_04: "elixirManufactoryHuman04",
   ELIXIR_MANUFACTORY_HUMAN_05: "elixirManufactoryHuman05",
   ELIXIR_MANUFACTORY_HUMAN_06: "elixirManufactoryHuman06",
   ELIXIR_MANUFACTORY_HUMAN_07: "elixirManufactoryHuman07",
   ELIXIR_MANUFACTORY_HUMAN_08: "elixirManufactoryHuman08",
   ELIXIR_MANUFACTORY_HUMAN_09: "elixirManufactoryHuman09",
   ELIXIR_MANUFACTORY_HUMAN_10: "elixirManufactoryHuman10",
   ELIXIR_MANUFACTORY_HUMAN_11: "elixirManufactoryHuman11",
   ELIXIR_MANUFACTORY_HUMAN_12: "elixirManufactoryHuman12",
   ELIXIR_MANUFACTORY_HUMAN_13: "elixirManufactoryHuman13",
   ELIXIR_MANUFACTORY_HUMAN_14: "elixirManufactoryHuman14",
   ELIXIR_MANUFACTORY_HUMAN_15: "elixirManufactoryHuman15",
   ELIXIR_MANUFACTORY_HUMAN_16: "elixirManufactoryHuman16",
   ELIXIR_MANUFACTORY_HUMAN_17: "elixirManufactoryHuman17",
   ELIXIR_MANUFACTORY_HUMAN_18: "elixirManufactoryHuman18",
   ELIXIR_MANUFACTORY_HUMAN_19: "elixirManufactoryHuman19",
   ELIXIR_MANUFACTORY_HUMAN_20: "elixirManufactoryHuman20",
   ELIXIR_MANUFACTORY_HUMAN_21: "elixirManufactoryHuman21",
   ELIXIR_MANUFACTORY_HUMAN_22: "elixirManufactoryHuman22",
   ELIXIR_MANUFACTORY_HUMAN_23: "elixirManufactoryHuman23",
   MAGIC_ACADEMY_ELF_01: "magicAcademyElf01",
   MAGIC_ACADEMY_ELF_02: "magicAcademyElf02",
   MAGIC_ACADEMY_ELF_03: "magicAcademyElf03",
   MAGIC_ACADEMY_ELF_04: "magicAcademyElf04",
   MAGIC_ACADEMY_ELF_05: "magicAcademyElf05",
   MAGIC_ACADEMY_HUMAN_01: "magicAcademyHuman01",
   MAGIC_ACADEMY_HUMAN_02: "magicAcademyHuman02",
   MAGIC_ACADEMY_HUMAN_03: "magicAcademyHuman03",
   MAGIC_ACADEMY_HUMAN_04: "magicAcademyHuman04",
   MAGIC_ACADEMY_HUMAN_05: "magicAcademyHuman05",
   MAIN_HALL_ELF_01: "mainHallElf01",
   MAIN_HALL_ELF_02: "mainHallElf02",
   MAIN_HALL_ELF_03: "mainHallElf03",
   MAIN_HALL_ELF_04: "mainHallElf04",
   MAIN_HALL_ELF_05: "mainHallElf05",
   MAIN_HALL_ELF_06: "mainHallElf06",
   MAIN_HALL_ELF_07: "mainHallElf07",
   MAIN_HALL_ELF_08: "mainHallElf08",
   MAIN_HALL_ELF_09: "mainHallElf09",
   MAIN_HALL_ELF_10: "mainHallElf10",
   MAIN_HALL_HUMAN_01: "mainHallHuman01",
   MAIN_HALL_HUMAN_02: "mainHallHuman02",
   MAIN_HALL_HUMAN_03: "mainHallHuman03",
   MAIN_HALL_HUMAN_04: "mainHallHuman04",
   MAIN_HALL_HUMAN_05: "mainHallHuman05",
   MAIN_HALL_HUMAN_06: "mainHallHuman06",
   MAIN_HALL_HUMAN_07: "mainHallHuman07",
   MAIN_HALL_HUMAN_08: "mainHallHuman08",
   MAIN_HALL_HUMAN_09: "mainHallHuman09",
   MAIN_HALL_HUMAN_10: "mainHallHuman10",
   MARBLE_MANUFACTORY_ELF_01: "marbleManufactoryElf01",
   MARBLE_MANUFACTORY_ELF_02: "marbleManufactoryElf02",
   MARBLE_MANUFACTORY_ELF_03: "marbleManufactoryElf03",
   MARBLE_MANUFACTORY_ELF_04: "marbleManufactoryElf04",
   MARBLE_MANUFACTORY_ELF_05: "marbleManufactoryElf05",
   MARBLE_MANUFACTORY_ELF_06: "marbleManufactoryElf06",
   MARBLE_MANUFACTORY_ELF_07: "marbleManufactoryElf07",
   MARBLE_MANUFACTORY_ELF_08: "marbleManufactoryElf08",
   MARBLE_MANUFACTORY_ELF_09: "marbleManufactoryElf09",
   MARBLE_MANUFACTORY_ELF_10: "marbleManufactoryElf10",
   MARBLE_MANUFACTORY_HUMAN_01: "marbleManufactoryHuman01",
   MARBLE_MANUFACTORY_HUMAN_02: "marbleManufactoryHuman02",
   MARBLE_MANUFACTORY_HUMAN_03: "marbleManufactoryHuman03",
   MARBLE_MANUFACTORY_HUMAN_04: "marbleManufactoryHuman04",
   MARBLE_MANUFACTORY_HUMAN_05: "marbleManufactoryHuman05",
   MARBLE_MANUFACTORY_HUMAN_06: "marbleManufactoryHuman06",
   MARBLE_MANUFACTORY_HUMAN_07: "marbleManufactoryHuman07",
   MARBLE_MANUFACTORY_HUMAN_08: "marbleManufactoryHuman08",
   MARBLE_MANUFACTORY_HUMAN_09: "marbleManufactoryHuman09",
   MARBLE_MANUFACTORY_HUMAN_10: "marbleManufactoryHuman10",
   RESIDENCE_ELF_01: "residenceElf01",
   RESIDENCE_ELF_02: "residenceElf02",
   RESIDENCE_ELF_03: "residenceElf03",
   RESIDENCE_ELF_04: "residenceElf04",
   RESIDENCE_ELF_05: "residenceElf05",
   RESIDENCE_ELF_06: "residenceElf06",
   RESIDENCE_ELF_07: "residenceElf07",
   RESIDENCE_ELF_08: "residenceElf08",
   RESIDENCE_ELF_09: "residenceElf09",
   RESIDENCE_ELF_10: "residenceElf10",
   RESIDENCE_HUMAN_01: "residenceHuman01",
   RESIDENCE_HUMAN_02: "residenceHuman02",
   RESIDENCE_HUMAN_03: "residenceHuman03",
   RESIDENCE_HUMAN_04: "residenceHuman04",
   RESIDENCE_HUMAN_05: "residenceHuman05",
   RESIDENCE_HUMAN_06: "residenceHuman06",
   RESIDENCE_HUMAN_07: "residenceHuman07",
   RESIDENCE_HUMAN_08: "residenceHuman08",
   RESIDENCE_HUMAN_09: "residenceHuman09",
   RESIDENCE_HUMAN_10: "residenceHuman10",
   TRADER_ELF_01: "traderElf01",
   TRADER_ELF_02: "traderElf02",
   TRADER_ELF_03: "traderElf03",
   TRADER_HUMAN_01: "traderHuman01",
   TRADER_HUMAN_02: "traderHuman02",
   TRADER_HUMAN_03: "traderHuman03",
   WORKSHOP_ELF_01: "workshopElf01",
   WORKSHOP_ELF_02: "workshopElf02",
   WORKSHOP_ELF_03: "workshopElf03",
   WORKSHOP_ELF_04: "workshopElf04",
   WORKSHOP_ELF_05: "workshopElf05",
   WORKSHOP_ELF_06: "workshopElf06",
   WORKSHOP_ELF_07: "workshopElf07",
   WORKSHOP_ELF_08: "workshopElf08",
   WORKSHOP_ELF_09: "workshopElf09",
   WORKSHOP_ELF_10: "workshopElf10",
   WORKSHOP_HUMAN_01: "workshopHuman01",
   WORKSHOP_HUMAN_02: "workshopHuman02",
   WORKSHOP_HUMAN_03: "workshopHuman03",
   WORKSHOP_HUMAN_04: "workshopHuman04",
   WORKSHOP_HUMAN_05: "workshopHuman05",
   WORKSHOP_HUMAN_06: "workshopHuman06",
   WORKSHOP_HUMAN_07: "workshopHuman07",
   WORKSHOP_HUMAN_08: "workshopHuman08",
   WORKSHOP_HUMAN_09: "workshopHuman09",
   WORKSHOP_HUMAN_10: "workshopHuman10",

   properties:
   {
      "buildersHutElf01":
      {
         name: "Builder's Hut 1 (Elf)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 3,
         population: 0,
         culture: 0,
         key: "buildersHutElf01",
      },
      "buildersHutElf02":
      {
         name: "Builder's Hut 2 (Elf)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.ELF,
         level: 2,
         width: 3,
         height: 3,
         population: 0,
         culture: 0,
         key: "buildersHutElf02",
      },
      "buildersHutElf03":
      {
         name: "Builder's Hut 3 (Elf)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.ELF,
         level: 3,
         width: 3,
         height: 3,
         population: 0,
         culture: 0,
         key: "buildersHutElf03",
      },
      "buildersHutElf04":
      {
         name: "Builder's Hut 4 (Elf)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.ELF,
         level: 4,
         width: 3,
         height: 3,
         population: 0,
         culture: 0,
         key: "buildersHutElf04",
      },
      "buildersHutElf05":
      {
         name: "Builder's Hut 5 (Elf)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.ELF,
         level: 5,
         width: 3,
         height: 3,
         population: 0,
         culture: 0,
         key: "buildersHutElf05",
      },
      "buildersHutHuman01":
      {
         name: "Builder's Hut 1 (Human)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.HUMAN,
         level: 1,
         width: 2,
         height: 3,
         population: 0,
         culture: 0,
         key: "buildersHutHuman01",
      },
      "buildersHutHuman02":
      {
         name: "Builder's Hut 2 (Human)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.HUMAN,
         level: 2,
         width: 2,
         height: 3,
         population: 0,
         culture: 0,
         key: "buildersHutHuman02",
      },
      "buildersHutHuman03":
      {
         name: "Builder's Hut 3 (Human)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.HUMAN,
         level: 3,
         width: 2,
         height: 3,
         population: 0,
         culture: 0,
         key: "buildersHutHuman03",
      },
      "buildersHutHuman04":
      {
         name: "Builder's Hut 4 (Human)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.HUMAN,
         level: 4,
         width: 2,
         height: 3,
         population: 0,
         culture: 0,
         key: "buildersHutHuman04",
      },
      "buildersHutHuman05":
      {
         name: "Builder's Hut 5 (Human)",
         typeKey: BuildingType.BUILDERS_HUT,
         raceKey: Race.HUMAN,
         level: 5,
         width: 2,
         height: 3,
         population: 0,
         culture: 0,
         key: "buildersHutHuman05",
      },
      "elixirManufactoryElf01":
      {
         name: "Elixir Manufactory 1 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 1,
         width: 4,
         height: 3,
         population: -211,
         culture: 0,
         key: "elixirManufactoryElf01"
      },
      "elixirManufactoryElf02":
      {
         name: "Elixir Manufactory 2 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 2,
         width: 4,
         height: 3,
         population: -24,
         culture: -19,
         key: "elixirManufactoryElf02"
      },
      "elixirManufactoryElf03":
      {
         name: "Elixir Manufactory 3 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 3,
         width: 4,
         height: 3,
         population: -26,
         culture: -18,
         key: "elixirManufactoryElf03"
      },
      "elixirManufactoryElf04":
      {
         name: "Elixir Manufactory 4 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 4,
         width: 4,
         height: 3,
         population: -29,
         culture: -24,
         key: "elixirManufactoryElf04"
      },
      "elixirManufactoryElf05":
      {
         name: "Elixir Manufactory 5 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 5,
         width: 4,
         height: 4,
         population: -139,
         culture: -55,
         key: "elixirManufactoryElf05"
      },
      "elixirManufactoryElf06":
      {
         name: "Elixir Manufactory 6 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 6,
         width: 4,
         height: 4,
         population: -48,
         culture: -13,
         key: "elixirManufactoryElf06"
      },
      "elixirManufactoryElf07":
      {
         name: "Elixir Manufactory 7 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 7,
         width: 4,
         height: 4,
         population: -68,
         culture: -14,
         key: "elixirManufactoryElf07"
      },
      "elixirManufactoryElf08":
      {
         name: "Elixir Manufactory 8 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 8,
         width: 4,
         height: 4,
         population: -81,
         culture: -16,
         key: "elixirManufactoryElf08"
      },
      "elixirManufactoryElf09":
      {
         name: "Elixir Manufactory 9 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 9,
         width: 4,
         height: 5,
         population: -260,
         culture: -62,
         key: "elixirManufactoryElf09"
      },
      "elixirManufactoryElf10":
      {
         name: "Elixir Manufactory 10 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 10,
         width: 4,
         height: 5,
         population: -131,
         culture: -25,
         key: "elixirManufactoryElf10"
      },
      "elixirManufactoryElf11":
      {
         name: "Elixir Manufactory 11 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 11,
         width: 4,
         height: 5,
         population: -157,
         culture: -27,
         key: "elixirManufactoryElf11"
      },
      "elixirManufactoryElf12":
      {
         name: "Elixir Manufactory 12 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 12,
         width: 4,
         height: 5,
         population: -210,
         culture: -31,
         key: "elixirManufactoryElf12"
      },
      "elixirManufactoryElf13":
      {
         name: "Elixir Manufactory 13 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 13,
         width: 4,
         height: 5,
         population: -214,
         culture: -33,
         key: "elixirManufactoryElf13"
      },
      "elixirManufactoryElf14":
      {
         name: "Elixir Manufactory 14 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 14,
         width: 4,
         height: 5,
         population: -218,
         culture: -38,
         key: "elixirManufactoryElf14"
      },
      "elixirManufactoryElf15":
      {
         name: "Elixir Manufactory 15 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 15,
         width: 4,
         height: 5,
         population: -271,
         culture: -42,
         key: "elixirManufactoryElf15"
      },
      "elixirManufactoryElf16":
      {
         name: "Elixir Manufactory 16 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 16,
         width: 4,
         height: 5,
         population: -81,
         culture: -123,
         key: "elixirManufactoryElf16"
      },
      "elixirManufactoryElf17":
      {
         name: "Elixir Manufactory 17 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 17,
         width: 4,
         height: 5,
         population: -333,
         culture: -97,
         key: "elixirManufactoryElf17"
      },
      "elixirManufactoryElf18":
      {
         name: "Elixir Manufactory 18 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 18,
         width: 4,
         height: 5,
         population: -384,
         culture: -114,
         key: "elixirManufactoryElf18"
      },
      "elixirManufactoryElf19":
      {
         name: "Elixir Manufactory 19 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 19,
         width: 4,
         height: 5,
         population: -443,
         culture: -135,
         key: "elixirManufactoryElf19"
      },
      "elixirManufactoryElf20":
      {
         name: "Elixir Manufactory 20 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 20,
         width: 6,
         height: 4,
         population: -1280,
         culture: -369,
         key: "elixirManufactoryElf20"
      },
      "elixirManufactoryElf21":
      {
         name: "Elixir Manufactory 21 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 21,
         width: 6,
         height: 4,
         population: -708,
         culture: -226,
         key: "elixirManufactoryElf21"
      },
      "elixirManufactoryElf22":
      {
         name: "Elixir Manufactory 22 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 22,
         width: 6,
         height: 4,
         population: -817,
         culture: -267,
         key: "elixirManufactoryElf22"
      },
      "elixirManufactoryElf23":
      {
         name: "Elixir Manufactory 23 (Elf)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.ELF,
         level: 23,
         width: 6,
         height: 4,
         population: -943,
         culture: -314,
         key: "elixirManufactoryElf23"
      },
      "elixirManufactoryHuman01":
      {
         name: "Elixir Manufactory 1 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 1,
         width: 3,
         height: 3,
         population: -123,
         culture: 0,
         key: "elixirManufactoryHuman01"
      },
      "elixirManufactoryHuman02":
      {
         name: "Elixir Manufactory 2 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 2,
         width: 3,
         height: 3,
         population: -14,
         culture: -17,
         key: "elixirManufactoryHuman02"
      },
      "elixirManufactoryHuman03":
      {
         name: "Elixir Manufactory 3 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 3,
         width: 3,
         height: 3,
         population: -15,
         culture: -17,
         key: "elixirManufactoryHuman03"
      },
      "elixirManufactoryHuman04":
      {
         name: "Elixir Manufactory 4 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 4,
         width: 3,
         height: 4,
         population: -73,
         culture: -41,
         key: "elixirManufactoryHuman04"
      },
      "elixirManufactoryHuman05":
      {
         name: "Elixir Manufactory 5 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 5,
         width: 3,
         height: 4,
         population: -25,
         culture: -30,
         key: "elixirManufactoryHuman05"
      },
      "elixirManufactoryHuman06":
      {
         name: "Elixir Manufactory 6 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 6,
         width: 3,
         height: 4,
         population: -34,
         culture: -12,
         key: "elixirManufactoryHuman06"
      },
      "elixirManufactoryHuman07":
      {
         name: "Elixir Manufactory 7 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 7,
         width: 3,
         height: 4,
         population: -42,
         culture: -13,
         key: "elixirManufactoryHuman07"
      },
      "elixirManufactoryHuman08":
      {
         name: "Elixir Manufactory 8 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 8,
         width: 4,
         height: 4,
         population: -161,
         culture: -62,
         key: "elixirManufactoryHuman08"
      },
      "elixirManufactoryHuman09":
      {
         name: "Elixir Manufactory 9 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 9,
         width: 4,
         height: 4,
         population: -82,
         culture: -22,
         key: "elixirManufactoryHuman09"
      },
      "elixirManufactoryHuman10":
      {
         name: "Elixir Manufactory 10 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 10,
         width: 4,
         height: 4,
         population: -101,
         culture: -24,
         key: "elixirManufactoryHuman10"
      },
      "elixirManufactoryHuman11":
      {
         name: "Elixir Manufactory 11 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 11,
         width: 4,
         height: 4,
         population: -103,
         culture: -26,
         key: "elixirManufactoryHuman11"
      },
      "elixirManufactoryHuman12":
      {
         name: "Elixir Manufactory 12 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 12,
         width: 4,
         height: 4,
         population: -106,
         culture: -29,
         key: "elixirManufactoryHuman12"
      },
      "elixirManufactoryHuman13":
      {
         name: "Elixir Manufactory 13 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 13,
         width: 4,
         height: 4,
         population: -131,
         culture: -33,
         key: "elixirManufactoryHuman13"
      },
      "elixirManufactoryHuman14":
      {
         name: "Elixir Manufactory 14 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 14,
         width: 4,
         height: 4,
         population: -158,
         culture: -36,
         key: "elixirManufactoryHuman14"
      },
      "elixirManufactoryHuman15":
      {
         name: "Elixir Manufactory 15 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 15,
         width: 4,
         height: 4,
         population: -185,
         culture: -40,
         key: "elixirManufactoryHuman15"
      },
      "elixirManufactoryHuman16":
      {
         name: "Elixir Manufactory 16 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 16,
         width: 4,
         height: 5,
         population: -815,
         culture: -138,
         key: "elixirManufactoryHuman16"
      },
      "elixirManufactoryHuman17":
      {
         name: "Elixir Manufactory 17 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 17,
         width: 4,
         height: 5,
         population: -333,
         culture: -97,
         key: "elixirManufactoryHuman17"
      },
      "elixirManufactoryHuman18":
      {
         name: "Elixir Manufactory 18 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 18,
         width: 4,
         height: 5,
         population: -384,
         culture: -114,
         key: "elixirManufactoryHuman18"
      },
      "elixirManufactoryHuman19":
      {
         name: "Elixir Manufactory 19 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 19,
         width: 4,
         height: 5,
         population: -443,
         culture: -135,
         key: "elixirManufactoryHuman19"
      },
      "elixirManufactoryHuman20":
      {
         name: "Elixir Manufactory 20 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 20,
         width: 6,
         height: 4,
         population: -1280,
         culture: -369,
         key: "elixirManufactoryHuman20"
      },
      "elixirManufactoryHuman21":
      {
         name: "Elixir Manufactory 21 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 21,
         width: 6,
         height: 4,
         population: -708,
         culture: -226,
         key: "elixirManufactoryHuman21"
      },
      "elixirManufactoryHuman22":
      {
         name: "Elixir Manufactory 22 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 22,
         width: 6,
         height: 4,
         population: -817,
         culture: -267,
         key: "elixirManufactoryHuman22"
      },
      "elixirManufactoryHuman23":
      {
         name: "Elixir Manufactory 23 (Human)",
         typeKey: BuildingType.ELIXIR_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 23,
         width: 6,
         height: 4,
         population: -943,
         culture: -314,
         key: "elixirManufactoryHuman23"
      },
      "magicAcademyElf01":
      {
         name: "Magic Academy 1 (Elf)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.ELF,
         level: 1,
         width: 5,
         height: 5,
         key: "magicAcademyElf01",
      },
      "magicAcademyElf02":
      {
         name: "Magic Academy 2 (Elf)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.ELF,
         level: 2,
         width: 5,
         height: 5,
         key: "magicAcademyElf02",
      },
      "magicAcademyElf03":
      {
         name: "Magic Academy 3 (Elf)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.ELF,
         level: 3,
         width: 5,
         height: 5,
         key: "magicAcademyElf03",
      },
      "magicAcademyElf04":
      {
         name: "Magic Academy 4 (Elf)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.ELF,
         level: 4,
         width: 5,
         height: 5,
         key: "magicAcademyElf04",
      },
      "magicAcademyElf05":
      {
         name: "Magic Academy 5 (Elf)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.ELF,
         level: 5,
         width: 5,
         height: 5,
         key: "magicAcademyElf05",
      },
      "magicAcademyHuman01":
      {
         name: "Magic Academy 1 (Human)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.HUMAN,
         level: 1,
         width: 5,
         height: 4,
         key: "magicAcademyHuman01",
      },
      "magicAcademyHuman02":
      {
         name: "Magic Academy 2 (Human)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.HUMAN,
         level: 2,
         width: 5,
         height: 4,
         key: "magicAcademyHuman02",
      },
      "magicAcademyHuman03":
      {
         name: "Magic Academy 3 (Human)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.HUMAN,
         level: 3,
         width: 5,
         height: 4,
         key: "magicAcademyHuman03",
      },
      "magicAcademyHuman04":
      {
         name: "Magic Academy 4 (Human)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.HUMAN,
         level: 4,
         width: 5,
         height: 4,
         key: "magicAcademyHuman04",
      },
      "magicAcademyHuman05":
      {
         name: "Magic Academy 5 (Human)",
         typeKey: BuildingType.MAGIC_ACADEMY,
         raceKey: Race.HUMAN,
         level: 5,
         width: 5,
         height: 4,
         key: "magicAcademyHuman05",
      },
      "mainHallElf01":
      {
         name: "Main Hall 1 (Elf)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.ELF,
         level: 1,
         width: 6,
         height: 6,
         population: 0,
         culture: 0,
         key: "mainHallElf01",
      },
      "mainHallElf02":
      {
         name: "Main Hall 2 (Elf)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.ELF,
         level: 2,
         width: 6,
         height: 6,
         population: -34,
         culture: -8,
         key: "mainHallElf02",
      },
      "mainHallElf03":
      {
         name: "Main Hall 3 (Elf)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.ELF,
         level: 3,
         width: 6,
         height: 6,
         population: -24,
         culture: -22,
         key: "mainHallElf03",
      },
      "mainHallElf04":
      {
         name: "Main Hall 4 (Elf)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.ELF,
         level: 4,
         width: 6,
         height: 6,
         population: -33,
         culture: -45,
         key: "mainHallElf04",
      },
      "mainHallElf05":
      {
         name: "Main Hall 5 (Elf)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.ELF,
         level: 5,
         width: 6,
         height: 6,
         population: -44,
         culture: -78,
         key: "mainHallElf05",
      },
      "mainHallElf06":
      {
         name: "Main Hall 6 (Elf)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.ELF,
         level: 6,
         width: 6,
         height: 6,
         population: -49,
         culture: -65,
         key: "mainHallElf06",
      },
      "mainHallElf07":
      {
         name: "Main Hall 7 (Elf)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.ELF,
         level: 7,
         width: 6,
         height: 6,
         population: -68,
         culture: -79,
         key: "mainHallElf07",
      },
      "mainHallElf08":
      {
         name: "Main Hall 8 (Elf)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.ELF,
         level: 8,
         width: 6,
         height: 6,
         population: -85,
         culture: -93,
         key: "mainHallElf08",
      },
      "mainHallElf09":
      {
         name: "Main Hall 9 (Elf)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.ELF,
         level: 9,
         width: 6,
         height: 6,
         population: -97,
         culture: -107,
         key: "mainHallElf09",
      },
      "mainHallElf10":
      {
         name: "Main Hall 10 (Elf)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.ELF,
         level: 10,
         width: 6,
         height: 6,
         population: -127,
         culture: -122,
         key: "mainHallElf10",
      },
      "mainHallHuman01":
      {
         name: "Main Hall 1 (Human)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.HUMAN,
         level: 1,
         width: 6,
         height: 7,
         population: 0,
         culture: 0,
         key: "mainHallHuman01",
      },
      "mainHallHuman02":
      {
         name: "Main Hall 2 (Human)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.HUMAN,
         level: 2,
         width: 6,
         height: 7,
         population: -31,
         culture: -8,
         key: "mainHallHuman02",
      },
      "mainHallHuman03":
      {
         name: "Main Hall 3 (Human)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.HUMAN,
         level: 3,
         width: 6,
         height: 7,
         population: -24,
         culture: -22,
         key: "mainHallHuman03",
      },
      "mainHallHuman04":
      {
         name: "Main Hall 4 (Human)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.HUMAN,
         level: 4,
         width: 6,
         height: 7,
         population: -34,
         culture: -45,
         key: "mainHallHuman04",
      },
      "mainHallHuman05":
      {
         name: "Main Hall 5 (Human)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.HUMAN,
         level: 5,
         width: 6,
         height: 7,
         population: -37,
         culture: -78,
         key: "mainHallHuman05",
      },
      "mainHallHuman06":
      {
         name: "Main Hall 6 (Human)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.HUMAN,
         level: 6,
         width: 6,
         height: 7,
         population: -53,
         culture: -65,
         key: "mainHallHuman06",
      },
      "mainHallHuman07":
      {
         name: "Main Hall 7 (Human)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.HUMAN,
         level: 7,
         width: 6,
         height: 7,
         population: -67,
         culture: -79,
         key: "mainHallHuman07",
      },
      "mainHallHuman08":
      {
         name: "Main Hall 8 (Human)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.HUMAN,
         level: 8,
         width: 6,
         height: 7,
         population: -75,
         culture: -93,
         key: "mainHallHuman08",
      },
      "mainHallHuman09":
      {
         name: "Main Hall 9 (Human)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.HUMAN,
         level: 9,
         width: 6,
         height: 7,
         population: -107,
         culture: -107,
         key: "mainHallHuman09",
      },
      "mainHallHuman10":
      {
         name: "Main Hall 10 (Human)",
         typeKey: BuildingType.MAIN_HALL,
         raceKey: Race.HUMAN,
         level: 10,
         width: 6,
         height: 7,
         population: -137,
         culture: -122,
         key: "mainHallHuman10",
      },
      "marbleManufactoryElf01":
      {
         name: "Marble Manufactory 1 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 1,
         width: 1,
         height: 2,
         population: -20,
         culture: 0,
         marble: 9, // per day
         key: "marbleManufactoryElf01",
      },
      "marbleManufactoryElf02":
      {
         name: "Marble Manufactory 2 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 2,
         width: 1,
         height: 2,
         population: -2,
         culture: -2,
         marble: 13, // per day
         key: "marbleManufactoryElf02",
      },
      "marbleManufactoryElf03":
      {
         name: "Marble Manufactory 3 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 3,
         width: 1,
         height: 2,
         population: -3,
         culture: -2,
         marble: 16, // per day
         key: "marbleManufactoryElf03",
      },
      "marbleManufactoryElf04":
      {
         name: "Marble Manufactory 4 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 4,
         width: 1,
         height: 2,
         population: -2,
         culture: -3,
         marble: 19, // per day
         key: "marbleManufactoryElf04",
      },
      "marbleManufactoryElf05":
      {
         name: "Marble Manufactory 5 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 5,
         width: 1,
         height: 2,
         population: -3,
         culture: -3,
         marble: 22, // per day
         key: "marbleManufactoryElf05",
      },
      "marbleManufactoryElf06":
      {
         name: "Marble Manufactory 6 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 6,
         width: 2,
         height: 2,
         population: -38,
         culture: -12,
         marble: 50, // per day
         key: "marbleManufactoryElf06",
      },
      "marbleManufactoryElf07":
      {
         name: "Marble Manufactory 7 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 7,
         width: 2,
         height: 2,
         population: -9,
         culture: -3,
         marble: 56, // per day
         key: "marbleManufactoryElf07",
      },
      "marbleManufactoryElf08":
      {
         name: "Marble Manufactory 8 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 8,
         width: 2,
         height: 2,
         population: -12,
         culture: -3,
         marble: 66, // per day
         key: "marbleManufactoryElf08",
      },
      "marbleManufactoryElf09":
      {
         name: "Marble Manufactory 9 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 9,
         width: 2,
         height: 2,
         population: -12,
         culture: -3,
         marble: 72, // per day
         key: "marbleManufactoryElf09",
      },
      "marbleManufactoryElf10":
      {
         name: "Marble Manufactory 10 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 10,
         width: 3,
         height: 2,
         population: -72,
         culture: -20,
         marble: 119, // per day
         key: "marbleManufactoryElf10",
      },
      "marbleManufactoryHuman01":
      {
         name: "Marble Manufactory 1 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 1,
         width: 2,
         height: 1,
         population: -21,
         culture: 0,
         marble: 9, // per day
         key: "marbleManufactoryHuman01",
      },
      "marbleManufactoryHuman02":
      {
         name: "Marble Manufactory 2 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 2,
         width: 2,
         height: 1,
         population: -2,
         culture: -2,
         marble: 13, // per day
         key: "marbleManufactoryHuman02",
      },
      "marbleManufactoryHuman03":
      {
         name: "Marble Manufactory 3 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 3,
         width: 2,
         height: 1,
         population: -3,
         culture: -2,
         marble: 16, // per day
         key: "marbleManufactoryHuman03",
      },
      "marbleManufactoryHuman04":
      {
         name: "Marble Manufactory 4 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 4,
         width: 2,
         height: 1,
         population: -3,
         culture: -2,
         marble: 19, // per day
         key: "marbleManufactoryHuman04",
      },
      "marbleManufactoryHuman05":
      {
         name: "Marble Manufactory 5 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 5,
         width: 3,
         height: 2,
         population: -67,
         culture: -21,
         marble: 66, // per day
         key: "marbleManufactoryHuman05",
      },
      "marbleManufactoryHuman06":
      {
         name: "Marble Manufactory 6 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 6,
         width: 3,
         height: 2,
         population: -12,
         culture: -3,
         marble: 75, // per day
         key: "marbleManufactoryHuman06",
      },
      "marbleManufactoryHuman07":
      {
         name: "Marble Manufactory 7 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 7,
         width: 3,
         height: 2,
         population: -17,
         culture: -3,
         marble: 88, // per day
         key: "marbleManufactoryHuman07",
      },
      "marbleManufactoryHuman08":
      {
         name: "Marble Manufactory 8 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 8,
         width: 3,
         height: 2,
         population: -14,
         culture: -4,
         marble: 97, // per day
         key: "marbleManufactoryHuman08",
      },
      "marbleManufactoryHuman09":
      {
         name: "Marble Manufactory 9 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 9,
         width: 4,
         height: 3,
         population: -187,
         culture: -45,
         marble: 217, // per day
         key: "marbleManufactoryHuman09",
      },
      "marbleManufactoryHuman10":
      {
         name: "Marble Manufactory 10 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 10,
         width: 4,
         height: 3,
         population: -58,
         culture: -9,
         marble: 235, // per day
         key: "marbleManufactoryHuman10",
      },
      "residenceElf01":
      {
         name: "Residence 1 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 1,
         width: 2,
         height: 2,
         culture: 0,
         population: 31,
         coin: 80, // per hour
         key: "residenceElf01",
      },
      "residenceElf02":
      {
         name: "Residence 2 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 2,
         width: 2,
         height: 2,
         culture: -3,
         population: 4,
         coin: 118, // per hour
         key: "residenceElf02",
      },
      "residenceElf03":
      {
         name: "Residence 3 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 3,
         width: 2,
         height: 2,
         culture: -4,
         population: 5,
         coin: 148, // per hour
         key: "residenceElf03",
      },
      "residenceElf04":
      {
         name: "Residence 4 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 4,
         width: 2,
         height: 3,
         culture: -12,
         population: 28,
         coin: 261, // per hour
         key: "residenceElf04",
      },
      "residenceElf05":
      {
         name: "Residence 5 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 5,
         width: 2,
         height: 3,
         culture: -11,
         population: 10,
         coin: 314, // per hour
         key: "residenceElf05",
      },
      "residenceElf06":
      {
         name: "Residence 6 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 6,
         width: 2,
         height: 3,
         culture: -6,
         population: 10,
         coin: 373, // per hour
         key: "residenceElf06",
      },
      "residenceElf07":
      {
         name: "Residence 7 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 7,
         width: 2,
         height: 3,
         culture: -4,
         population: 12,
         coin: 425, // per hour
         key: "residenceElf07",
      },
      "residenceElf08":
      {
         name: "Residence 8 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 8,
         width: 3,
         height: 3,
         culture: -27,
         population: 70,
         coin: 717, // per hour
         key: "residenceElf08",
      },
      "residenceElf09":
      {
         name: "Residence 9 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 9,
         width: 3,
         height: 3,
         culture: -7,
         population: 20,
         coin: 811, // per hour
         key: "residenceElf09",
      },
      "residenceElf10":
      {
         name: "Residence 10 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 10,
         width: 3,
         height: 3,
         culture: -9,
         population: 30,
         coin: 905, // per hour
         key: "residenceElf10",
      },
      "residenceHuman01":
      {
         name: "Residence 1 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 1,
         width: 2,
         height: 2,
         culture: 0,
         population: 31,
         coin: 88, // per hour
         key: "residenceHuman01",
      },
      "residenceHuman02":
      {
         name: "Residence 2 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 2,
         width: 2,
         height: 2,
         culture: -3,
         population: 4,
         coin: 127, // per hour
         key: "residenceHuman02",
      },
      "residenceHuman03":
      {
         name: "Residence 3 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 3,
         width: 2,
         height: 2,
         culture: -4,
         population: 5,
         coin: 155, // per hour
         key: "residenceHuman03",
      },
      "residenceHuman04":
      {
         name: "Residence 4 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 4,
         width: 2,
         height: 2,
         culture: -6,
         population: 6,
         coin: 184, // per hour
         key: "residenceHuman04",
      },
      "residenceHuman05":
      {
         name: "Residence 5 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 5,
         width: 3,
         height: 2,
         culture: -19,
         population: 32,
         coin: 328, // per hour
         key: "residenceHuman05",
      },
      "residenceHuman06":
      {
         name: "Residence 6 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 6,
         width: 3,
         height: 2,
         culture: -5,
         population: 10,
         coin: 373, // per hour
         key: "residenceHuman06",
      },
      "residenceHuman07":
      {
         name: "Residence 7 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 7,
         width: 3,
         height: 2,
         culture: -4,
         population: 12,
         coin: 437, // per hour
         key: "residenceHuman07",
      },
      "residenceHuman08":
      {
         name: "Residence 8 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 8,
         width: 3,
         height: 2,
         culture: -5,
         population: 10,
         coin: 482, // per hour
         key: "residenceHuman08",
      },
      "residenceHuman09":
      {
         name: "Residence 9 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 9,
         width: 4,
         height: 3,
         culture: -57,
         population: 150,
         coin: 1088, // per hour
         key: "residenceHuman09",
      },
      "residenceHuman10":
      {
         name: "Residence 10 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 10,
         width: 4,
         height: 3,
         culture: -9,
         population: 40,
         coin: 1157, // per hour
         key: "residenceHuman10",
      },
      "traderElf01":
      {
         name: "Trader 1 (Elf)",
         typeKey: BuildingType.TRADER,
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 4,
         culture: 0,
         population: -50,
         key: "traderElf01",
      },
      "traderElf02":
      {
         name: "Trader 2 (Elf)",
         typeKey: BuildingType.TRADER,
         raceKey: Race.ELF,
         level: 2,
         width: 4,
         height: 5,
         culture: -500,
         population: -450,
         key: "traderElf02",
      },
      "traderElf03":
      {
         name: "Trader 3 (Elf)",
         typeKey: BuildingType.TRADER,
         raceKey: Race.ELF,
         level: 3,
         width: 5,
         height: 5,
         culture: -750,
         population: -750,
         key: "traderElf03",
      },
      "traderHuman01":
      {
         name: "Trader 1 (Human)",
         typeKey: BuildingType.TRADER,
         raceKey: Race.HUMAN,
         level: 1,
         width: 4,
         height: 4,
         culture: 0,
         population: -50,
         key: "traderHuman01",
      },
      "traderHuman02":
      {
         name: "Trader 2 (Human)",
         typeKey: BuildingType.TRADER,
         raceKey: Race.HUMAN,
         level: 2,
         width: 4,
         height: 5,
         culture: -500,
         population: -450,
         key: "traderHuman02",
      },
      "traderHuman03":
      {
         name: "Trader 3 (Human)",
         typeKey: BuildingType.TRADER,
         raceKey: Race.HUMAN,
         level: 3,
         width: 5,
         height: 5,
         culture: -750,
         population: -750,
         key: "traderHuman03",
      },
      "workshopElf01":
      {
         name: "Workshop 1 (Elf)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.ELF,
         level: 1,
         width: 2,
         height: 2,
         population: -18,
         culture: 0,
         supplies: 29, // per hour
         key: "workshopElf01",
      },
      "workshopElf02":
      {
         name: "Workshop 2 (Elf)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.ELF,
         level: 2,
         width: 2,
         height: 2,
         population: -6,
         culture: -2,
         supplies: 53, // per hour
         key: "workshopElf02",
      },
      "workshopElf03":
      {
         name: "Workshop 3 (Elf)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.ELF,
         level: 3,
         width: 2,
         height: 2,
         population: -8,
         culture: -5,
         supplies: 74, // per hour
         key: "workshopElf03",
      },
      "workshopElf04":
      {
         name: "Workshop 4 (Elf)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.ELF,
         level: 4,
         width: 2,
         height: 2,
         population: -8,
         culture: -7,
         supplies: 94, // per hour
         key: "workshopElf04",
      },
      "workshopElf05":
      {
         name: "Workshop 5 (Elf)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.ELF,
         level: 5,
         width: 3,
         height: 2,
         population: -32,
         culture: -21,
         supplies: 169, // per hour
         key: "workshopElf05",
      },
      "workshopElf06":
      {
         name: "Workshop 6 (Elf)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.ELF,
         level: 6,
         width: 3,
         height: 2,
         population: -9,
         culture: -6,
         supplies: 196, // per hour
         key: "workshopElf06",
      },
      "workshopElf07":
      {
         name: "Workshop 7 (Elf)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.ELF,
         level: 7,
         width: 3,
         height: 2,
         population: -12,
         culture: -6,
         supplies: 223, // per hour
         key: "workshopElf07",
      },
      "workshopElf08":
      {
         name: "Workshop 8 (Elf)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.ELF,
         level: 8,
         width: 3,
         height: 2,
         population: -14,
         culture: -6,
         supplies: 249, // per hour
         key: "workshopElf08",
      },
      "workshopElf09":
      {
         name: "Workshop 9 (Elf)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.ELF,
         level: 9,
         width: 4,
         height: 3,
         population: -130,
         culture: -63,
         supplies: 547, // per hour
         key: "workshopElf09",
      },
      "workshopElf10":
      {
         name: "Workshop 10 (Elf)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.ELF,
         level: 10,
         width: 4,
         height: 3,
         population: -32,
         culture: -11,
         supplies: 596, // per hour
         key: "workshopElf10",
      },
      "workshopHuman01":
      {
         name: "Workshop 1 (Human)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.HUMAN,
         level: 1,
         width: 2,
         height: 2,
         population: -15,
         culture: 0,
         supplies: 29, // per hour
         key: "workshopHuman01",
      },
      "workshopHuman02":
      {
         name: "Workshop 2 (Human)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.HUMAN,
         level: 2,
         width: 2,
         height: 2,
         population: -7,
         culture: -2,
         supplies: 53, // per hour
         key: "workshopHuman02",
      },
      "workshopHuman03":
      {
         name: "Workshop 3 (Human)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.HUMAN,
         level: 3,
         width: 2,
         height: 2,
         population: -9,
         culture: -5,
         supplies: 74, // per hour
         key: "workshopHuman03",
      },
      "workshopHuman04":
      {
         name: "Workshop 4 (Human)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.HUMAN,
         level: 4,
         width: 2,
         height: 2,
         population: -8,
         culture: -7,
         supplies: 94, // per hour
         key: "workshopHuman04",
      },
      "workshopHuman05":
      {
         name: "Workshop 5 (Human)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.HUMAN,
         level: 5,
         width: 2,
         height: 2,
         population: -6,
         culture: -9,
         supplies: 113, // per hour
         key: "workshopHuman05",
      },
      "workshopHuman06":
      {
         name: "Workshop 6 (Human)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.HUMAN,
         level: 6,
         width: 2,
         height: 2,
         population: -8,
         culture: -5,
         supplies: 131, // per hour
         key: "workshopHuman06",
      },
      "workshopHuman07":
      {
         name: "Workshop 7 (Human)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.HUMAN,
         level: 7,
         width: 2,
         height: 3,
         population: -38,
         culture: -19,
         supplies: 223, // per hour
         key: "workshopHuman07",
      },
      "workshopHuman08":
      {
         name: "Workshop 8 (Human)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.HUMAN,
         level: 8,
         width: 2,
         height: 3,
         population: -11,
         culture: -6,
         supplies: 249, // per hour
         key: "workshopHuman08",
      },
      "workshopHuman09":
      {
         name: "Workshop 9 (Human)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.HUMAN,
         level: 9,
         width: 2,
         height: 3,
         population: -15,
         culture: -5,
         supplies: 274, // per hour
         key: "workshopHuman09",
      },
      "workshopHuman10":
      {
         name: "Workshop 10 (Human)",
         typeKey: BuildingType.WORKSHOP,
         raceKey: Race.HUMAN,
         level: 10,
         width: 2,
         height: 3,
         population: -19,
         culture: -5,
         supplies: 298, // per hour
         key: "workshopHuman10",
      },
   },
};

Building.keys = function()
{
   return Object.keys(Building.properties);
};

Building.values = function()
{
   return Object.values(Building.properties);
};

Building.keys().forEach(function(buildingKey)
{
   const building = Building.properties[buildingKey];
   building.race = Race.properties[building.raceKey];
   building.type = BuildingType.properties[building.typeKey];
});

Building.cumulativeCulture = function(buildingKey)
{
   InputValidator.validateIsString("buildingKey", buildingKey);

   return cumulative(buildingKey, "culture");
};

Building.cumulativePopulation = function(buildingKey)
{
   InputValidator.validateIsString("buildingKey", buildingKey);

   return cumulative(buildingKey, "population");
};

Building.find = function(raceKey, typeKey, level)
{
   InputValidator.validateIsString("raceKey", raceKey);
   InputValidator.validateIsString("typeKey", typeKey);
   InputValidator.validateIsNumber("level", level);

   let answer;
   const keys = Building.keys();

   keys.some(buildingKey =>
   {
      const building = Building.properties[buildingKey];
      if (building.raceKey === raceKey && building.typeKey === typeKey && building.level === level)
      {
         answer = building;
      }
      return answer !== undefined;
   });

   return answer;
};

Building.keysByCategory = function(raceKey, categoryKey)
{
   InputValidator.validateIsString("raceKey", raceKey);
   InputValidator.validateIsString("categoryKey", categoryKey);

   return Building.keys().filter(key =>
   {
      const building = Building.properties[key];
      return building.raceKey === raceKey && building.type.categoryKey === categoryKey;
   });
};

Building.keysByType = function(raceKey, typeKey)
{
   InputValidator.validateIsString("raceKey", raceKey);
   InputValidator.validateIsString("typeKey", typeKey);

   return Building.keys().filter(key =>
   {
      const building = Building.properties[key];
      return building.raceKey === raceKey && building.typeKey === typeKey;
   });
};

Building.maxLevel = function(raceKey, typeKey)
{
   InputValidator.validateIsString("raceKey", raceKey);
   InputValidator.validateIsString("typeKey", typeKey);

   return Building.keysByType(raceKey, typeKey).reduce((accumulator, key) =>
   {
      const building = Building.properties[key];
      return (building.level > accumulator ? building.level : accumulator);
   }, 0);
};

function cumulative(buildingKey, statKey)
{
   InputValidator.validateIsString("buildingKey", buildingKey);
   InputValidator.validateIsString("statKey", statKey);

   let answer = 0;
   const building = Building.properties[buildingKey];

   for (let i = 1; i <= building.level; i++)
   {
      const myBuilding = Building.find(building.raceKey, building.typeKey, i);
      answer += myBuilding[statKey];
   }

   return answer;
}

if (Object.freeze)
{
   Object.freeze(Building);
}

export default Building;