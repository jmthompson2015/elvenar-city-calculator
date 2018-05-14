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
         key: "residenceElf01",
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
         key: "residenceElf01",
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
   var building = Building.properties[buildingKey];
   building.race = Race.properties[building.raceKey];
   building.type = BuildingType.properties[building.typeKey];
});

Building.cumulativeCulture = function(buildingKey)
{
   return cumulative(buildingKey, "culture");
};

Building.cumulativePopulation = function(buildingKey)
{
   return cumulative(buildingKey, "population");
};

Building.find = function(raceKey, typeKey, level)
{
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

function cumulative(buildingKey, statKey)
{
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