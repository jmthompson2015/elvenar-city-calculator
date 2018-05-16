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
   CRYSTAL_MANUFACTORY_ELF_01: "crystalManufactoryElf01",
   CRYSTAL_MANUFACTORY_ELF_02: "crystalManufactoryElf02",
   CRYSTAL_MANUFACTORY_ELF_03: "crystalManufactoryElf03",
   CRYSTAL_MANUFACTORY_ELF_04: "crystalManufactoryElf04",
   CRYSTAL_MANUFACTORY_ELF_05: "crystalManufactoryElf05",
   CRYSTAL_MANUFACTORY_ELF_06: "crystalManufactoryElf06",
   CRYSTAL_MANUFACTORY_ELF_07: "crystalManufactoryElf07",
   CRYSTAL_MANUFACTORY_ELF_08: "crystalManufactoryElf08",
   CRYSTAL_MANUFACTORY_ELF_09: "crystalManufactoryElf09",
   CRYSTAL_MANUFACTORY_ELF_10: "crystalManufactoryElf10",
   CRYSTAL_MANUFACTORY_ELF_11: "crystalManufactoryElf11",
   CRYSTAL_MANUFACTORY_ELF_12: "crystalManufactoryElf12",
   CRYSTAL_MANUFACTORY_ELF_13: "crystalManufactoryElf13",
   CRYSTAL_MANUFACTORY_ELF_14: "crystalManufactoryElf14",
   CRYSTAL_MANUFACTORY_ELF_15: "crystalManufactoryElf15",
   CRYSTAL_MANUFACTORY_ELF_16: "crystalManufactoryElf16",
   CRYSTAL_MANUFACTORY_ELF_17: "crystalManufactoryElf17",
   CRYSTAL_MANUFACTORY_ELF_18: "crystalManufactoryElf18",
   CRYSTAL_MANUFACTORY_ELF_19: "crystalManufactoryElf19",
   CRYSTAL_MANUFACTORY_ELF_20: "crystalManufactoryElf20",
   CRYSTAL_MANUFACTORY_ELF_21: "crystalManufactoryElf21",
   CRYSTAL_MANUFACTORY_ELF_22: "crystalManufactoryElf22",
   CRYSTAL_MANUFACTORY_ELF_23: "crystalManufactoryElf23",
   CRYSTAL_MANUFACTORY_HUMAN_01: "crystalManufactoryHuman01",
   CRYSTAL_MANUFACTORY_HUMAN_02: "crystalManufactoryHuman02",
   CRYSTAL_MANUFACTORY_HUMAN_03: "crystalManufactoryHuman03",
   CRYSTAL_MANUFACTORY_HUMAN_04: "crystalManufactoryHuman04",
   CRYSTAL_MANUFACTORY_HUMAN_05: "crystalManufactoryHuman05",
   CRYSTAL_MANUFACTORY_HUMAN_06: "crystalManufactoryHuman06",
   CRYSTAL_MANUFACTORY_HUMAN_07: "crystalManufactoryHuman07",
   CRYSTAL_MANUFACTORY_HUMAN_08: "crystalManufactoryHuman08",
   CRYSTAL_MANUFACTORY_HUMAN_09: "crystalManufactoryHuman09",
   CRYSTAL_MANUFACTORY_HUMAN_10: "crystalManufactoryHuman10",
   CRYSTAL_MANUFACTORY_HUMAN_11: "crystalManufactoryHuman11",
   CRYSTAL_MANUFACTORY_HUMAN_12: "crystalManufactoryHuman12",
   CRYSTAL_MANUFACTORY_HUMAN_13: "crystalManufactoryHuman13",
   CRYSTAL_MANUFACTORY_HUMAN_14: "crystalManufactoryHuman14",
   CRYSTAL_MANUFACTORY_HUMAN_15: "crystalManufactoryHuman15",
   CRYSTAL_MANUFACTORY_HUMAN_16: "crystalManufactoryHuman16",
   CRYSTAL_MANUFACTORY_HUMAN_17: "crystalManufactoryHuman17",
   CRYSTAL_MANUFACTORY_HUMAN_18: "crystalManufactoryHuman18",
   CRYSTAL_MANUFACTORY_HUMAN_19: "crystalManufactoryHuman19",
   CRYSTAL_MANUFACTORY_HUMAN_20: "crystalManufactoryHuman20",
   CRYSTAL_MANUFACTORY_HUMAN_21: "crystalManufactoryHuman21",
   CRYSTAL_MANUFACTORY_HUMAN_22: "crystalManufactoryHuman22",
   CRYSTAL_MANUFACTORY_HUMAN_23: "crystalManufactoryHuman23",
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
   GEMS_MANUFACTORY_ELF_01: "gemsManufactoryElf01",
   GEMS_MANUFACTORY_ELF_02: "gemsManufactoryElf02",
   GEMS_MANUFACTORY_ELF_03: "gemsManufactoryElf03",
   GEMS_MANUFACTORY_ELF_04: "gemsManufactoryElf04",
   GEMS_MANUFACTORY_ELF_05: "gemsManufactoryElf05",
   GEMS_MANUFACTORY_ELF_06: "gemsManufactoryElf06",
   GEMS_MANUFACTORY_ELF_07: "gemsManufactoryElf07",
   GEMS_MANUFACTORY_ELF_08: "gemsManufactoryElf08",
   GEMS_MANUFACTORY_ELF_09: "gemsManufactoryElf09",
   GEMS_MANUFACTORY_ELF_10: "gemsManufactoryElf10",
   GEMS_MANUFACTORY_ELF_11: "gemsManufactoryElf11",
   GEMS_MANUFACTORY_ELF_12: "gemsManufactoryElf12",
   GEMS_MANUFACTORY_ELF_13: "gemsManufactoryElf13",
   GEMS_MANUFACTORY_ELF_14: "gemsManufactoryElf14",
   GEMS_MANUFACTORY_ELF_15: "gemsManufactoryElf15",
   GEMS_MANUFACTORY_ELF_16: "gemsManufactoryElf16",
   GEMS_MANUFACTORY_ELF_17: "gemsManufactoryElf17",
   GEMS_MANUFACTORY_ELF_18: "gemsManufactoryElf18",
   GEMS_MANUFACTORY_ELF_19: "gemsManufactoryElf19",
   GEMS_MANUFACTORY_ELF_20: "gemsManufactoryElf20",
   GEMS_MANUFACTORY_ELF_21: "gemsManufactoryElf21",
   GEMS_MANUFACTORY_ELF_22: "gemsManufactoryElf22",
   GEMS_MANUFACTORY_ELF_23: "gemsManufactoryElf23",
   GEMS_MANUFACTORY_HUMAN_01: "gemsManufactoryHuman01",
   GEMS_MANUFACTORY_HUMAN_02: "gemsManufactoryHuman02",
   GEMS_MANUFACTORY_HUMAN_03: "gemsManufactoryHuman03",
   GEMS_MANUFACTORY_HUMAN_04: "gemsManufactoryHuman04",
   GEMS_MANUFACTORY_HUMAN_05: "gemsManufactoryHuman05",
   GEMS_MANUFACTORY_HUMAN_06: "gemsManufactoryHuman06",
   GEMS_MANUFACTORY_HUMAN_07: "gemsManufactoryHuman07",
   GEMS_MANUFACTORY_HUMAN_08: "gemsManufactoryHuman08",
   GEMS_MANUFACTORY_HUMAN_09: "gemsManufactoryHuman09",
   GEMS_MANUFACTORY_HUMAN_10: "gemsManufactoryHuman10",
   GEMS_MANUFACTORY_HUMAN_11: "gemsManufactoryHuman11",
   GEMS_MANUFACTORY_HUMAN_12: "gemsManufactoryHuman12",
   GEMS_MANUFACTORY_HUMAN_13: "gemsManufactoryHuman13",
   GEMS_MANUFACTORY_HUMAN_14: "gemsManufactoryHuman14",
   GEMS_MANUFACTORY_HUMAN_15: "gemsManufactoryHuman15",
   GEMS_MANUFACTORY_HUMAN_16: "gemsManufactoryHuman16",
   GEMS_MANUFACTORY_HUMAN_17: "gemsManufactoryHuman17",
   GEMS_MANUFACTORY_HUMAN_18: "gemsManufactoryHuman18",
   GEMS_MANUFACTORY_HUMAN_19: "gemsManufactoryHuman19",
   GEMS_MANUFACTORY_HUMAN_20: "gemsManufactoryHuman20",
   GEMS_MANUFACTORY_HUMAN_21: "gemsManufactoryHuman21",
   GEMS_MANUFACTORY_HUMAN_22: "gemsManufactoryHuman22",
   GEMS_MANUFACTORY_HUMAN_23: "gemsManufactoryHuman23",
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
   MAGIC_DUST_MANUFACTORY_ELF_01: "magicDustManufactoryElf01",
   MAGIC_DUST_MANUFACTORY_ELF_02: "magicDustManufactoryElf02",
   MAGIC_DUST_MANUFACTORY_ELF_03: "magicDustManufactoryElf03",
   MAGIC_DUST_MANUFACTORY_ELF_04: "magicDustManufactoryElf04",
   MAGIC_DUST_MANUFACTORY_ELF_05: "magicDustManufactoryElf05",
   MAGIC_DUST_MANUFACTORY_ELF_06: "magicDustManufactoryElf06",
   MAGIC_DUST_MANUFACTORY_ELF_07: "magicDustManufactoryElf07",
   MAGIC_DUST_MANUFACTORY_ELF_08: "magicDustManufactoryElf08",
   MAGIC_DUST_MANUFACTORY_ELF_09: "magicDustManufactoryElf09",
   MAGIC_DUST_MANUFACTORY_ELF_10: "magicDustManufactoryElf10",
   MAGIC_DUST_MANUFACTORY_ELF_11: "magicDustManufactoryElf11",
   MAGIC_DUST_MANUFACTORY_ELF_12: "magicDustManufactoryElf12",
   MAGIC_DUST_MANUFACTORY_ELF_13: "magicDustManufactoryElf13",
   MAGIC_DUST_MANUFACTORY_ELF_14: "magicDustManufactoryElf14",
   MAGIC_DUST_MANUFACTORY_ELF_15: "magicDustManufactoryElf15",
   MAGIC_DUST_MANUFACTORY_ELF_16: "magicDustManufactoryElf16",
   MAGIC_DUST_MANUFACTORY_ELF_17: "magicDustManufactoryElf17",
   MAGIC_DUST_MANUFACTORY_ELF_18: "magicDustManufactoryElf18",
   MAGIC_DUST_MANUFACTORY_ELF_19: "magicDustManufactoryElf19",
   MAGIC_DUST_MANUFACTORY_ELF_20: "magicDustManufactoryElf20",
   MAGIC_DUST_MANUFACTORY_ELF_21: "magicDustManufactoryElf21",
   MAGIC_DUST_MANUFACTORY_ELF_22: "magicDustManufactoryElf22",
   MAGIC_DUST_MANUFACTORY_ELF_23: "magicDustManufactoryElf23",
   MAGIC_DUST_MANUFACTORY_HUMAN_01: "magicDustManufactoryHuman01",
   MAGIC_DUST_MANUFACTORY_HUMAN_02: "magicDustManufactoryHuman02",
   MAGIC_DUST_MANUFACTORY_HUMAN_03: "magicDustManufactoryHuman03",
   MAGIC_DUST_MANUFACTORY_HUMAN_04: "magicDustManufactoryHuman04",
   MAGIC_DUST_MANUFACTORY_HUMAN_05: "magicDustManufactoryHuman05",
   MAGIC_DUST_MANUFACTORY_HUMAN_06: "magicDustManufactoryHuman06",
   MAGIC_DUST_MANUFACTORY_HUMAN_07: "magicDustManufactoryHuman07",
   MAGIC_DUST_MANUFACTORY_HUMAN_08: "magicDustManufactoryHuman08",
   MAGIC_DUST_MANUFACTORY_HUMAN_09: "magicDustManufactoryHuman09",
   MAGIC_DUST_MANUFACTORY_HUMAN_10: "magicDustManufactoryHuman10",
   MAGIC_DUST_MANUFACTORY_HUMAN_11: "magicDustManufactoryHuman11",
   MAGIC_DUST_MANUFACTORY_HUMAN_12: "magicDustManufactoryHuman12",
   MAGIC_DUST_MANUFACTORY_HUMAN_13: "magicDustManufactoryHuman13",
   MAGIC_DUST_MANUFACTORY_HUMAN_14: "magicDustManufactoryHuman14",
   MAGIC_DUST_MANUFACTORY_HUMAN_15: "magicDustManufactoryHuman15",
   MAGIC_DUST_MANUFACTORY_HUMAN_16: "magicDustManufactoryHuman16",
   MAGIC_DUST_MANUFACTORY_HUMAN_17: "magicDustManufactoryHuman17",
   MAGIC_DUST_MANUFACTORY_HUMAN_18: "magicDustManufactoryHuman18",
   MAGIC_DUST_MANUFACTORY_HUMAN_19: "magicDustManufactoryHuman19",
   MAGIC_DUST_MANUFACTORY_HUMAN_20: "magicDustManufactoryHuman20",
   MAGIC_DUST_MANUFACTORY_HUMAN_21: "magicDustManufactoryHuman21",
   MAGIC_DUST_MANUFACTORY_HUMAN_22: "magicDustManufactoryHuman22",
   MAGIC_DUST_MANUFACTORY_HUMAN_23: "magicDustManufactoryHuman23",
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
   MARBLE_MANUFACTORY_ELF_11: "marbleManufactoryElf11",
   MARBLE_MANUFACTORY_ELF_12: "marbleManufactoryElf12",
   MARBLE_MANUFACTORY_ELF_13: "marbleManufactoryElf13",
   MARBLE_MANUFACTORY_ELF_14: "marbleManufactoryElf14",
   MARBLE_MANUFACTORY_ELF_15: "marbleManufactoryElf15",
   MARBLE_MANUFACTORY_ELF_16: "marbleManufactoryElf16",
   MARBLE_MANUFACTORY_ELF_17: "marbleManufactoryElf17",
   MARBLE_MANUFACTORY_ELF_18: "marbleManufactoryElf18",
   MARBLE_MANUFACTORY_ELF_19: "marbleManufactoryElf19",
   MARBLE_MANUFACTORY_ELF_20: "marbleManufactoryElf20",
   MARBLE_MANUFACTORY_ELF_21: "marbleManufactoryElf21",
   MARBLE_MANUFACTORY_ELF_22: "marbleManufactoryElf22",
   MARBLE_MANUFACTORY_ELF_23: "marbleManufactoryElf23",
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
   MARBLE_MANUFACTORY_HUMAN_11: "marbleManufactoryHuman11",
   MARBLE_MANUFACTORY_HUMAN_12: "marbleManufactoryHuman12",
   MARBLE_MANUFACTORY_HUMAN_13: "marbleManufactoryHuman13",
   MARBLE_MANUFACTORY_HUMAN_14: "marbleManufactoryHuman14",
   MARBLE_MANUFACTORY_HUMAN_15: "marbleManufactoryHuman15",
   MARBLE_MANUFACTORY_HUMAN_16: "marbleManufactoryHuman16",
   MARBLE_MANUFACTORY_HUMAN_17: "marbleManufactoryHuman17",
   MARBLE_MANUFACTORY_HUMAN_18: "marbleManufactoryHuman18",
   MARBLE_MANUFACTORY_HUMAN_19: "marbleManufactoryHuman19",
   MARBLE_MANUFACTORY_HUMAN_20: "marbleManufactoryHuman20",
   MARBLE_MANUFACTORY_HUMAN_21: "marbleManufactoryHuman21",
   MARBLE_MANUFACTORY_HUMAN_22: "marbleManufactoryHuman22",
   MARBLE_MANUFACTORY_HUMAN_23: "marbleManufactoryHuman23",
   PLANKS_MANUFACTORY_ELF_01: "planksManufactoryElf01",
   PLANKS_MANUFACTORY_ELF_02: "planksManufactoryElf02",
   PLANKS_MANUFACTORY_ELF_03: "planksManufactoryElf03",
   PLANKS_MANUFACTORY_ELF_04: "planksManufactoryElf04",
   PLANKS_MANUFACTORY_ELF_05: "planksManufactoryElf05",
   PLANKS_MANUFACTORY_ELF_06: "planksManufactoryElf06",
   PLANKS_MANUFACTORY_ELF_07: "planksManufactoryElf07",
   PLANKS_MANUFACTORY_ELF_08: "planksManufactoryElf08",
   PLANKS_MANUFACTORY_ELF_09: "planksManufactoryElf09",
   PLANKS_MANUFACTORY_ELF_10: "planksManufactoryElf10",
   PLANKS_MANUFACTORY_ELF_11: "planksManufactoryElf11",
   PLANKS_MANUFACTORY_ELF_12: "planksManufactoryElf12",
   PLANKS_MANUFACTORY_ELF_13: "planksManufactoryElf13",
   PLANKS_MANUFACTORY_ELF_14: "planksManufactoryElf14",
   PLANKS_MANUFACTORY_ELF_15: "planksManufactoryElf15",
   PLANKS_MANUFACTORY_ELF_16: "planksManufactoryElf16",
   PLANKS_MANUFACTORY_ELF_17: "planksManufactoryElf17",
   PLANKS_MANUFACTORY_ELF_18: "planksManufactoryElf18",
   PLANKS_MANUFACTORY_ELF_19: "planksManufactoryElf19",
   PLANKS_MANUFACTORY_ELF_20: "planksManufactoryElf20",
   PLANKS_MANUFACTORY_ELF_21: "planksManufactoryElf21",
   PLANKS_MANUFACTORY_ELF_22: "planksManufactoryElf22",
   PLANKS_MANUFACTORY_ELF_23: "planksManufactoryElf23",
   PLANKS_MANUFACTORY_HUMAN_01: "planksManufactoryHuman01",
   PLANKS_MANUFACTORY_HUMAN_02: "planksManufactoryHuman02",
   PLANKS_MANUFACTORY_HUMAN_03: "planksManufactoryHuman03",
   PLANKS_MANUFACTORY_HUMAN_04: "planksManufactoryHuman04",
   PLANKS_MANUFACTORY_HUMAN_05: "planksManufactoryHuman05",
   PLANKS_MANUFACTORY_HUMAN_06: "planksManufactoryHuman06",
   PLANKS_MANUFACTORY_HUMAN_07: "planksManufactoryHuman07",
   PLANKS_MANUFACTORY_HUMAN_08: "planksManufactoryHuman08",
   PLANKS_MANUFACTORY_HUMAN_09: "planksManufactoryHuman09",
   PLANKS_MANUFACTORY_HUMAN_10: "planksManufactoryHuman10",
   PLANKS_MANUFACTORY_HUMAN_11: "planksManufactoryHuman11",
   PLANKS_MANUFACTORY_HUMAN_12: "planksManufactoryHuman12",
   PLANKS_MANUFACTORY_HUMAN_13: "planksManufactoryHuman13",
   PLANKS_MANUFACTORY_HUMAN_14: "planksManufactoryHuman14",
   PLANKS_MANUFACTORY_HUMAN_15: "planksManufactoryHuman15",
   PLANKS_MANUFACTORY_HUMAN_16: "planksManufactoryHuman16",
   PLANKS_MANUFACTORY_HUMAN_17: "planksManufactoryHuman17",
   PLANKS_MANUFACTORY_HUMAN_18: "planksManufactoryHuman18",
   PLANKS_MANUFACTORY_HUMAN_19: "planksManufactoryHuman19",
   PLANKS_MANUFACTORY_HUMAN_20: "planksManufactoryHuman20",
   PLANKS_MANUFACTORY_HUMAN_21: "planksManufactoryHuman21",
   PLANKS_MANUFACTORY_HUMAN_22: "planksManufactoryHuman22",
   PLANKS_MANUFACTORY_HUMAN_23: "planksManufactoryHuman23",
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
   RESIDENCE_ELF_11: "residenceElf11",
   RESIDENCE_ELF_12: "residenceElf12",
   RESIDENCE_ELF_13: "residenceElf13",
   RESIDENCE_ELF_14: "residenceElf14",
   RESIDENCE_ELF_15: "residenceElf15",
   RESIDENCE_ELF_16: "residenceElf16",
   RESIDENCE_ELF_17: "residenceElf17",
   RESIDENCE_ELF_18: "residenceElf18",
   RESIDENCE_ELF_19: "residenceElf19",
   RESIDENCE_ELF_20: "residenceElf20",
   RESIDENCE_ELF_21: "residenceElf21",
   RESIDENCE_ELF_22: "residenceElf22",
   RESIDENCE_ELF_23: "residenceElf23",
   RESIDENCE_ELF_24: "residenceElf24",
   RESIDENCE_ELF_25: "residenceElf25",
   RESIDENCE_ELF_26: "residenceElf26",
   RESIDENCE_ELF_27: "residenceElf27",
   RESIDENCE_ELF_28: "residenceElf28",
   RESIDENCE_ELF_29: "residenceElf29",
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
   RESIDENCE_HUMAN_11: "residenceHuman11",
   RESIDENCE_HUMAN_12: "residenceHuman12",
   RESIDENCE_HUMAN_13: "residenceHuman13",
   RESIDENCE_HUMAN_14: "residenceHuman14",
   RESIDENCE_HUMAN_15: "residenceHuman15",
   RESIDENCE_HUMAN_16: "residenceHuman16",
   RESIDENCE_HUMAN_17: "residenceHuman17",
   RESIDENCE_HUMAN_18: "residenceHuman18",
   RESIDENCE_HUMAN_19: "residenceHuman19",
   RESIDENCE_HUMAN_20: "residenceHuman20",
   RESIDENCE_HUMAN_21: "residenceHuman21",
   RESIDENCE_HUMAN_22: "residenceHuman22",
   RESIDENCE_HUMAN_23: "residenceHuman23",
   RESIDENCE_HUMAN_24: "residenceHuman24",
   RESIDENCE_HUMAN_25: "residenceHuman25",
   RESIDENCE_HUMAN_26: "residenceHuman26",
   RESIDENCE_HUMAN_27: "residenceHuman27",
   RESIDENCE_HUMAN_28: "residenceHuman28",
   RESIDENCE_HUMAN_29: "residenceHuman29",
   SCROLLS_MANUFACTORY_ELF_01: "scrollsManufactoryElf01",
   SCROLLS_MANUFACTORY_ELF_02: "scrollsManufactoryElf02",
   SCROLLS_MANUFACTORY_ELF_03: "scrollsManufactoryElf03",
   SCROLLS_MANUFACTORY_ELF_04: "scrollsManufactoryElf04",
   SCROLLS_MANUFACTORY_ELF_05: "scrollsManufactoryElf05",
   SCROLLS_MANUFACTORY_ELF_06: "scrollsManufactoryElf06",
   SCROLLS_MANUFACTORY_ELF_07: "scrollsManufactoryElf07",
   SCROLLS_MANUFACTORY_ELF_08: "scrollsManufactoryElf08",
   SCROLLS_MANUFACTORY_ELF_09: "scrollsManufactoryElf09",
   SCROLLS_MANUFACTORY_ELF_10: "scrollsManufactoryElf10",
   SCROLLS_MANUFACTORY_ELF_11: "scrollsManufactoryElf11",
   SCROLLS_MANUFACTORY_ELF_12: "scrollsManufactoryElf12",
   SCROLLS_MANUFACTORY_ELF_13: "scrollsManufactoryElf13",
   SCROLLS_MANUFACTORY_ELF_14: "scrollsManufactoryElf14",
   SCROLLS_MANUFACTORY_ELF_15: "scrollsManufactoryElf15",
   SCROLLS_MANUFACTORY_ELF_16: "scrollsManufactoryElf16",
   SCROLLS_MANUFACTORY_ELF_17: "scrollsManufactoryElf17",
   SCROLLS_MANUFACTORY_ELF_18: "scrollsManufactoryElf18",
   SCROLLS_MANUFACTORY_ELF_19: "scrollsManufactoryElf19",
   SCROLLS_MANUFACTORY_ELF_20: "scrollsManufactoryElf20",
   SCROLLS_MANUFACTORY_ELF_21: "scrollsManufactoryElf21",
   SCROLLS_MANUFACTORY_ELF_22: "scrollsManufactoryElf22",
   SCROLLS_MANUFACTORY_ELF_23: "scrollsManufactoryElf23",
   SCROLLS_MANUFACTORY_HUMAN_01: "scrollsManufactoryHuman01",
   SCROLLS_MANUFACTORY_HUMAN_02: "scrollsManufactoryHuman02",
   SCROLLS_MANUFACTORY_HUMAN_03: "scrollsManufactoryHuman03",
   SCROLLS_MANUFACTORY_HUMAN_04: "scrollsManufactoryHuman04",
   SCROLLS_MANUFACTORY_HUMAN_05: "scrollsManufactoryHuman05",
   SCROLLS_MANUFACTORY_HUMAN_06: "scrollsManufactoryHuman06",
   SCROLLS_MANUFACTORY_HUMAN_07: "scrollsManufactoryHuman07",
   SCROLLS_MANUFACTORY_HUMAN_08: "scrollsManufactoryHuman08",
   SCROLLS_MANUFACTORY_HUMAN_09: "scrollsManufactoryHuman09",
   SCROLLS_MANUFACTORY_HUMAN_10: "scrollsManufactoryHuman10",
   SCROLLS_MANUFACTORY_HUMAN_11: "scrollsManufactoryHuman11",
   SCROLLS_MANUFACTORY_HUMAN_12: "scrollsManufactoryHuman12",
   SCROLLS_MANUFACTORY_HUMAN_13: "scrollsManufactoryHuman13",
   SCROLLS_MANUFACTORY_HUMAN_14: "scrollsManufactoryHuman14",
   SCROLLS_MANUFACTORY_HUMAN_15: "scrollsManufactoryHuman15",
   SCROLLS_MANUFACTORY_HUMAN_16: "scrollsManufactoryHuman16",
   SCROLLS_MANUFACTORY_HUMAN_17: "scrollsManufactoryHuman17",
   SCROLLS_MANUFACTORY_HUMAN_18: "scrollsManufactoryHuman18",
   SCROLLS_MANUFACTORY_HUMAN_19: "scrollsManufactoryHuman19",
   SCROLLS_MANUFACTORY_HUMAN_20: "scrollsManufactoryHuman20",
   SCROLLS_MANUFACTORY_HUMAN_21: "scrollsManufactoryHuman21",
   SCROLLS_MANUFACTORY_HUMAN_22: "scrollsManufactoryHuman22",
   SCROLLS_MANUFACTORY_HUMAN_23: "scrollsManufactoryHuman23",
   SILK_MANUFACTORY_ELF_01: "silkManufactoryElf01",
   SILK_MANUFACTORY_ELF_02: "silkManufactoryElf02",
   SILK_MANUFACTORY_ELF_03: "silkManufactoryElf03",
   SILK_MANUFACTORY_ELF_04: "silkManufactoryElf04",
   SILK_MANUFACTORY_ELF_05: "silkManufactoryElf05",
   SILK_MANUFACTORY_ELF_06: "silkManufactoryElf06",
   SILK_MANUFACTORY_ELF_07: "silkManufactoryElf07",
   SILK_MANUFACTORY_ELF_08: "silkManufactoryElf08",
   SILK_MANUFACTORY_ELF_09: "silkManufactoryElf09",
   SILK_MANUFACTORY_ELF_10: "silkManufactoryElf10",
   SILK_MANUFACTORY_ELF_11: "silkManufactoryElf11",
   SILK_MANUFACTORY_ELF_12: "silkManufactoryElf12",
   SILK_MANUFACTORY_ELF_13: "silkManufactoryElf13",
   SILK_MANUFACTORY_ELF_14: "silkManufactoryElf14",
   SILK_MANUFACTORY_ELF_15: "silkManufactoryElf15",
   SILK_MANUFACTORY_ELF_16: "silkManufactoryElf16",
   SILK_MANUFACTORY_ELF_17: "silkManufactoryElf17",
   SILK_MANUFACTORY_ELF_18: "silkManufactoryElf18",
   SILK_MANUFACTORY_ELF_19: "silkManufactoryElf19",
   SILK_MANUFACTORY_ELF_20: "silkManufactoryElf20",
   SILK_MANUFACTORY_ELF_21: "silkManufactoryElf21",
   SILK_MANUFACTORY_ELF_22: "silkManufactoryElf22",
   SILK_MANUFACTORY_ELF_23: "silkManufactoryElf23",
   SILK_MANUFACTORY_HUMAN_01: "silkManufactoryHuman01",
   SILK_MANUFACTORY_HUMAN_02: "silkManufactoryHuman02",
   SILK_MANUFACTORY_HUMAN_03: "silkManufactoryHuman03",
   SILK_MANUFACTORY_HUMAN_04: "silkManufactoryHuman04",
   SILK_MANUFACTORY_HUMAN_05: "silkManufactoryHuman05",
   SILK_MANUFACTORY_HUMAN_06: "silkManufactoryHuman06",
   SILK_MANUFACTORY_HUMAN_07: "silkManufactoryHuman07",
   SILK_MANUFACTORY_HUMAN_08: "silkManufactoryHuman08",
   SILK_MANUFACTORY_HUMAN_09: "silkManufactoryHuman09",
   SILK_MANUFACTORY_HUMAN_10: "silkManufactoryHuman10",
   SILK_MANUFACTORY_HUMAN_11: "silkManufactoryHuman11",
   SILK_MANUFACTORY_HUMAN_12: "silkManufactoryHuman12",
   SILK_MANUFACTORY_HUMAN_13: "silkManufactoryHuman13",
   SILK_MANUFACTORY_HUMAN_14: "silkManufactoryHuman14",
   SILK_MANUFACTORY_HUMAN_15: "silkManufactoryHuman15",
   SILK_MANUFACTORY_HUMAN_16: "silkManufactoryHuman16",
   SILK_MANUFACTORY_HUMAN_17: "silkManufactoryHuman17",
   SILK_MANUFACTORY_HUMAN_18: "silkManufactoryHuman18",
   SILK_MANUFACTORY_HUMAN_19: "silkManufactoryHuman19",
   SILK_MANUFACTORY_HUMAN_20: "silkManufactoryHuman20",
   SILK_MANUFACTORY_HUMAN_21: "silkManufactoryHuman21",
   SILK_MANUFACTORY_HUMAN_22: "silkManufactoryHuman22",
   SILK_MANUFACTORY_HUMAN_23: "silkManufactoryHuman23",
   STEEL_MANUFACTORY_ELF_01: "steelManufactoryElf01",
   STEEL_MANUFACTORY_ELF_02: "steelManufactoryElf02",
   STEEL_MANUFACTORY_ELF_03: "steelManufactoryElf03",
   STEEL_MANUFACTORY_ELF_04: "steelManufactoryElf04",
   STEEL_MANUFACTORY_ELF_05: "steelManufactoryElf05",
   STEEL_MANUFACTORY_ELF_06: "steelManufactoryElf06",
   STEEL_MANUFACTORY_ELF_07: "steelManufactoryElf07",
   STEEL_MANUFACTORY_ELF_08: "steelManufactoryElf08",
   STEEL_MANUFACTORY_ELF_09: "steelManufactoryElf09",
   STEEL_MANUFACTORY_ELF_10: "steelManufactoryElf10",
   STEEL_MANUFACTORY_ELF_11: "steelManufactoryElf11",
   STEEL_MANUFACTORY_ELF_12: "steelManufactoryElf12",
   STEEL_MANUFACTORY_ELF_13: "steelManufactoryElf13",
   STEEL_MANUFACTORY_ELF_14: "steelManufactoryElf14",
   STEEL_MANUFACTORY_ELF_15: "steelManufactoryElf15",
   STEEL_MANUFACTORY_ELF_16: "steelManufactoryElf16",
   STEEL_MANUFACTORY_ELF_17: "steelManufactoryElf17",
   STEEL_MANUFACTORY_ELF_18: "steelManufactoryElf18",
   STEEL_MANUFACTORY_ELF_19: "steelManufactoryElf19",
   STEEL_MANUFACTORY_ELF_20: "steelManufactoryElf20",
   STEEL_MANUFACTORY_ELF_21: "steelManufactoryElf21",
   STEEL_MANUFACTORY_ELF_22: "steelManufactoryElf22",
   STEEL_MANUFACTORY_ELF_23: "steelManufactoryElf23",
   STEEL_MANUFACTORY_HUMAN_01: "steelManufactoryHuman01",
   STEEL_MANUFACTORY_HUMAN_02: "steelManufactoryHuman02",
   STEEL_MANUFACTORY_HUMAN_03: "steelManufactoryHuman03",
   STEEL_MANUFACTORY_HUMAN_04: "steelManufactoryHuman04",
   STEEL_MANUFACTORY_HUMAN_05: "steelManufactoryHuman05",
   STEEL_MANUFACTORY_HUMAN_06: "steelManufactoryHuman06",
   STEEL_MANUFACTORY_HUMAN_07: "steelManufactoryHuman07",
   STEEL_MANUFACTORY_HUMAN_08: "steelManufactoryHuman08",
   STEEL_MANUFACTORY_HUMAN_09: "steelManufactoryHuman09",
   STEEL_MANUFACTORY_HUMAN_10: "steelManufactoryHuman10",
   STEEL_MANUFACTORY_HUMAN_11: "steelManufactoryHuman11",
   STEEL_MANUFACTORY_HUMAN_12: "steelManufactoryHuman12",
   STEEL_MANUFACTORY_HUMAN_13: "steelManufactoryHuman13",
   STEEL_MANUFACTORY_HUMAN_14: "steelManufactoryHuman14",
   STEEL_MANUFACTORY_HUMAN_15: "steelManufactoryHuman15",
   STEEL_MANUFACTORY_HUMAN_16: "steelManufactoryHuman16",
   STEEL_MANUFACTORY_HUMAN_17: "steelManufactoryHuman17",
   STEEL_MANUFACTORY_HUMAN_18: "steelManufactoryHuman18",
   STEEL_MANUFACTORY_HUMAN_19: "steelManufactoryHuman19",
   STEEL_MANUFACTORY_HUMAN_20: "steelManufactoryHuman20",
   STEEL_MANUFACTORY_HUMAN_21: "steelManufactoryHuman21",
   STEEL_MANUFACTORY_HUMAN_22: "steelManufactoryHuman22",
   STEEL_MANUFACTORY_HUMAN_23: "steelManufactoryHuman23",
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
      "crystalManufactoryElf01":
      {
         name: "Crystal Manufactory 1 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 2,
         population: -92,
         culture: 0,
         product: 28,
         key: "crystalManufactoryElf01"
      },
      "crystalManufactoryElf02":
      {
         name: "Crystal Manufactory 2 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 2,
         width: 3,
         height: 2,
         population: -11,
         culture: -8,
         product: 38,
         key: "crystalManufactoryElf02"
      },
      "crystalManufactoryElf03":
      {
         name: "Crystal Manufactory 3 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 3,
         width: 3,
         height: 2,
         population: -11,
         culture: -8,
         product: 47,
         key: "crystalManufactoryElf03"
      },
      "crystalManufactoryElf04":
      {
         name: "Crystal Manufactory 4 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 4,
         width: 3,
         height: 2,
         population: -13,
         culture: -11,
         product: 56,
         key: "crystalManufactoryElf04"
      },
      "crystalManufactoryElf05":
      {
         name: "Crystal Manufactory 5 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 5,
         width: 3,
         height: 2,
         population: -14,
         culture: -11,
         product: 66,
         key: "crystalManufactoryElf05"
      },
      "crystalManufactoryElf06":
      {
         name: "Crystal Manufactory 6 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 6,
         width: 3,
         height: 2,
         population: -16,
         culture: -4,
         product: 75,
         key: "crystalManufactoryElf06"
      },
      "crystalManufactoryElf07":
      {
         name: "Crystal Manufactory 7 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 7,
         width: 3,
         height: 3,
         population: -111,
         culture: -29,
         product: 132,
         key: "crystalManufactoryElf07"
      },
      "crystalManufactoryElf08":
      {
         name: "Crystal Manufactory 8 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 8,
         width: 3,
         height: 3,
         population: -40,
         culture: -7,
         product: 148,
         key: "crystalManufactoryElf08"
      },
      "crystalManufactoryElf09":
      {
         name: "Crystal Manufactory 9 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 9,
         width: 3,
         height: 3,
         population: -41,
         culture: -9,
         product: 163,
         key: "crystalManufactoryElf09"
      },
      "crystalManufactoryElf10":
      {
         name: "Crystal Manufactory 10 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 10,
         width: 3,
         height: 3,
         population: -51,
         culture: -10,
         product: 179,
         key: "crystalManufactoryElf10"
      },
      "crystalManufactoryElf11":
      {
         name: "Crystal Manufactory 11 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 11,
         width: 4,
         height: 3,
         population: -217,
         culture: -47,
         product: 257,
         key: "crystalManufactoryElf11"
      },
      "crystalManufactoryElf12":
      {
         name: "Crystal Manufactory 12 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 12,
         width: 4,
         height: 3,
         population: -110,
         culture: -15,
         product: 279,
         key: "crystalManufactoryElf12"
      },
      "crystalManufactoryElf13":
      {
         name: "Crystal Manufactory 13 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 13,
         width: 4,
         height: 3,
         population: -112,
         culture: -18,
         product: 301,
         key: "crystalManufactoryElf13"
      },
      "crystalManufactoryElf14":
      {
         name: "Crystal Manufactory 14 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 14,
         width: 4,
         height: 3,
         population: -114,
         culture: -20,
         product: 323,
         key: "crystalManufactoryElf14"
      },
      "crystalManufactoryElf15":
      {
         name: "Crystal Manufactory 15 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 15,
         width: 4,
         height: 3,
         population: -143,
         culture: -22,
         product: 342,
         key: "crystalManufactoryElf15"
      },
      "crystalManufactoryElf16":
      {
         name: "Crystal Manufactory 16 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 16,
         width: 4,
         height: 4,
         population: -436,
         culture: -159,
         product: 493,
         key: "crystalManufactoryElf16"
      },
      "crystalManufactoryElf17":
      {
         name: "Crystal Manufactory 17 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 17,
         width: 4,
         height: 4,
         population: -236,
         culture: -68,
         product: 534,
         key: "crystalManufactoryElf17"
      },
      "crystalManufactoryElf18":
      {
         name: "Crystal Manufactory 18 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 18,
         width: 4,
         height: 4,
         population: -272,
         culture: -80,
         product: 574,
         key: "crystalManufactoryElf18"
      },
      "crystalManufactoryElf19":
      {
         name: "Crystal Manufactory 19 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 19,
         width: 4,
         height: 4,
         population: -313,
         culture: -95,
         product: 618,
         key: "crystalManufactoryElf19"
      },
      "crystalManufactoryElf20":
      {
         name: "Crystal Manufactory 20 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 20,
         width: 4,
         height: 5,
         population: -1007,
         culture: -294,
         product: 835,
         key: "crystalManufactoryElf20"
      },
      "crystalManufactoryElf21":
      {
         name: "Crystal Manufactory 21 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 21,
         width: 4,
         height: 5,
         population: -516,
         culture: -165,
         product: 901,
         key: "crystalManufactoryElf21"
      },
      "crystalManufactoryElf22":
      {
         name: "Crystal Manufactory 22 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 22,
         width: 4,
         height: 5,
         population: -596,
         culture: -194,
         product: 973,
         key: "crystalManufactoryElf22"
      },
      "crystalManufactoryElf23":
      {
         name: "Crystal Manufactory 23 (Elf)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 23,
         width: 4,
         height: 5,
         population: -687,
         culture: -230,
         product: 1,
         key: "crystalManufactoryElf23"
      },
      "crystalManufactoryHuman01":
      {
         name: "Crystal Manufactory 1 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 1,
         width: 3,
         height: 2,
         population: -80,
         culture: 0,
         product: 28,
         key: "crystalManufactoryHuman01"
      },
      "crystalManufactoryHuman02":
      {
         name: "Crystal Manufactory 2 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 2,
         width: 3,
         height: 2,
         population: -9,
         culture: -9,
         product: 38,
         key: "crystalManufactoryHuman02"
      },
      "crystalManufactoryHuman03":
      {
         name: "Crystal Manufactory 3 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 3,
         width: 3,
         height: 2,
         population: -9,
         culture: -9,
         product: 47,
         key: "crystalManufactoryHuman03"
      },
      "crystalManufactoryHuman04":
      {
         name: "Crystal Manufactory 4 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 4,
         width: 3,
         height: 2,
         population: -11,
         culture: -12,
         product: 56,
         key: "crystalManufactoryHuman04"
      },
      "crystalManufactoryHuman05":
      {
         name: "Crystal Manufactory 5 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 5,
         width: 3,
         height: 3,
         population: -73,
         culture: -33,
         product: 100,
         key: "crystalManufactoryHuman05"
      },
      "crystalManufactoryHuman06":
      {
         name: "Crystal Manufactory 6 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 6,
         width: 3,
         height: 3,
         population: -25,
         culture: -7,
         product: 116,
         key: "crystalManufactoryHuman06"
      },
      "crystalManufactoryHuman07":
      {
         name: "Crystal Manufactory 7 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 7,
         width: 3,
         height: 3,
         population: -31,
         culture: -8,
         product: 132,
         key: "crystalManufactoryHuman07"
      },
      "crystalManufactoryHuman08":
      {
         name: "Crystal Manufactory 8 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 8,
         width: 3,
         height: 3,
         population: -28,
         culture: -8,
         product: 148,
         key: "crystalManufactoryHuman08"
      },
      "crystalManufactoryHuman09":
      {
         name: "Crystal Manufactory 9 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 9,
         width: 4,
         height: 3,
         population: -149,
         culture: -42,
         product: 217,
         key: "crystalManufactoryHuman09"
      },
      "crystalManufactoryHuman10":
      {
         name: "Crystal Manufactory 10 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 10,
         width: 4,
         height: 3,
         population: -73,
         culture: -14,
         product: 235,
         key: "crystalManufactoryHuman10"
      },
      "crystalManufactoryHuman11":
      {
         name: "Crystal Manufactory 11 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 11,
         width: 4,
         height: 3,
         population: -75,
         culture: -15,
         product: 257,
         key: "crystalManufactoryHuman11"
      },
      "crystalManufactoryHuman12":
      {
         name: "Crystal Manufactory 12 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 12,
         width: 4,
         height: 3,
         population: -78,
         culture: -18,
         product: 279,
         key: "crystalManufactoryHuman12"
      },
      "crystalManufactoryHuman13":
      {
         name: "Crystal Manufactory 13 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 13,
         width: 4,
         height: 3,
         population: -96,
         culture: -19,
         product: 301,
         key: "crystalManufactoryHuman13"
      },
      "crystalManufactoryHuman14":
      {
         name: "Crystal Manufactory 14 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 14,
         width: 4,
         height: 3,
         population: -115,
         culture: -22,
         product: 323,
         key: "crystalManufactoryHuman14"
      },
      "crystalManufactoryHuman15":
      {
         name: "Crystal Manufactory 15 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 15,
         width: 4,
         height: 3,
         population: -134,
         culture: -24,
         product: 342,
         key: "crystalManufactoryHuman15"
      },
      "crystalManufactoryHuman16":
      {
         name: "Crystal Manufactory 16 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 16,
         width: 4,
         height: 4,
         population: -531,
         culture: -138,
         product: 493,
         key: "crystalManufactoryHuman16"
      },
      "crystalManufactoryHuman17":
      {
         name: "Crystal Manufactory 17 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 17,
         width: 4,
         height: 4,
         population: -233,
         culture: -68,
         product: 534,
         key: "crystalManufactoryHuman17"
      },
      "crystalManufactoryHuman18":
      {
         name: "Crystal Manufactory 18 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 18,
         width: 4,
         height: 4,
         population: -270,
         culture: -80,
         product: 574,
         key: "crystalManufactoryHuman18"
      },
      "crystalManufactoryHuman19":
      {
         name: "Crystal Manufactory 19 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 19,
         width: 4,
         height: 4,
         population: -310,
         culture: -95,
         product: 618,
         key: "crystalManufactoryHuman19"
      },
      "crystalManufactoryHuman20":
      {
         name: "Crystal Manufactory 20 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 20,
         width: 4,
         height: 5,
         population: -1030,
         culture: -294,
         product: 835,
         key: "crystalManufactoryHuman20"
      },
      "crystalManufactoryHuman21":
      {
         name: "Crystal Manufactory 21 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 21,
         width: 4,
         height: 5,
         population: -516,
         culture: -165,
         product: 901,
         key: "crystalManufactoryHuman21"
      },
      "crystalManufactoryHuman22":
      {
         name: "Crystal Manufactory 22 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 22,
         width: 4,
         height: 5,
         population: -596,
         culture: -194,
         product: 973,
         key: "crystalManufactoryHuman22"
      },
      "crystalManufactoryHuman23":
      {
         name: "Crystal Manufactory 23 (Human)",
         typeKey: BuildingType.CRYSTAL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 23,
         width: 4,
         height: 5,
         population: -687,
         culture: -230,
         product: 1,
         key: "crystalManufactoryHuman23"
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
         product: 56,
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
         product: 75,
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
         product: 91,
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
         product: 113,
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
         product: 176,
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
         product: 204,
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
         product: 232,
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
         product: 260,
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
         product: 361,
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
         product: 395,
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
         product: 430,
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
         product: 464,
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
         product: 502,
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
         product: 537,
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
         product: 571,
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
         product: 618,
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
         product: 665,
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
         product: 719,
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
         product: 775,
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
         product: 1,
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
         product: 1,
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
         product: 1,
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
         product: 1,
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
         product: 41,
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
         product: 56,
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
         product: 69,
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
         product: 113,
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
         product: 132,
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
         product: 154,
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
         product: 173,
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
         product: 260,
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
         product: 289,
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
         product: 317,
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
         product: 345,
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
         product: 373,
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
         product: 402,
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
         product: 430,
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
         product: 458,
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
         product: 618,
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
         product: 665,
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
         product: 719,
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
         product: 775,
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
         product: 1,
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
         product: 1,
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
         product: 1,
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
         product: 1,
         key: "elixirManufactoryHuman23"
      },
      "gemsManufactoryElf01":
      {
         name: "Gems Manufactory 1 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 4,
         population: -173,
         culture: 0,
         product: 56,
         key: "gemsManufactoryElf01"
      },
      "gemsManufactoryElf02":
      {
         name: "Gems Manufactory 2 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 2,
         width: 3,
         height: 4,
         population: -19,
         culture: -23,
         product: 75,
         key: "gemsManufactoryElf02"
      },
      "gemsManufactoryElf03":
      {
         name: "Gems Manufactory 3 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 3,
         width: 3,
         height: 4,
         population: -21,
         culture: -22,
         product: 91,
         key: "gemsManufactoryElf03"
      },
      "gemsManufactoryElf04":
      {
         name: "Gems Manufactory 4 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 4,
         width: 4,
         height: 4,
         population: -103,
         culture: -54,
         product: 151,
         key: "gemsManufactoryElf04"
      },
      "gemsManufactoryElf05":
      {
         name: "Gems Manufactory 5 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 5,
         width: 4,
         height: 4,
         population: -35,
         culture: -43,
         product: 176,
         key: "gemsManufactoryElf05"
      },
      "gemsManufactoryElf06":
      {
         name: "Gems Manufactory 6 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 6,
         width: 4,
         height: 4,
         population: -39,
         culture: -16,
         product: 204,
         key: "gemsManufactoryElf06"
      },
      "gemsManufactoryElf07":
      {
         name: "Gems Manufactory 7 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 7,
         width: 4,
         height: 4,
         population: -56,
         culture: -17,
         product: 232,
         key: "gemsManufactoryElf07"
      },
      "gemsManufactoryElf08":
      {
         name: "Gems Manufactory 8 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 8,
         width: 4,
         height: 5,
         population: -194,
         culture: -69,
         product: 323,
         key: "gemsManufactoryElf08"
      },
      "gemsManufactoryElf09":
      {
         name: "Gems Manufactory 9 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 9,
         width: 4,
         height: 5,
         population: -85,
         culture: -27,
         product: 361,
         key: "gemsManufactoryElf09"
      },
      "gemsManufactoryElf10":
      {
         name: "Gems Manufactory 10 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 10,
         width: 4,
         height: 5,
         population: -107,
         culture: -30,
         product: 395,
         key: "gemsManufactoryElf10"
      },
      "gemsManufactoryElf11":
      {
         name: "Gems Manufactory 11 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 11,
         width: 4,
         height: 5,
         population: -129,
         culture: -33,
         product: 430,
         key: "gemsManufactoryElf11"
      },
      "gemsManufactoryElf12":
      {
         name: "Gems Manufactory 12 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 12,
         width: 4,
         height: 5,
         population: -172,
         culture: -37,
         product: 464,
         key: "gemsManufactoryElf12"
      },
      "gemsManufactoryElf13":
      {
         name: "Gems Manufactory 13 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 13,
         width: 4,
         height: 5,
         population: -174,
         culture: -41,
         product: 502,
         key: "gemsManufactoryElf13"
      },
      "gemsManufactoryElf14":
      {
         name: "Gems Manufactory 14 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 14,
         width: 4,
         height: 5,
         population: -179,
         culture: -46,
         product: 537,
         key: "gemsManufactoryElf14"
      },
      "gemsManufactoryElf15":
      {
         name: "Gems Manufactory 15 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 15,
         width: 4,
         height: 5,
         population: -222,
         culture: -51,
         product: 571,
         key: "gemsManufactoryElf15"
      },
      "gemsManufactoryElf16":
      {
         name: "Gems Manufactory 16 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 16,
         width: 5,
         height: 4,
         population: -460,
         culture: -31,
         product: 618,
         key: "gemsManufactoryElf16"
      },
      "gemsManufactoryElf17":
      {
         name: "Gems Manufactory 17 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 17,
         width: 5,
         height: 4,
         population: -333,
         culture: -97,
         product: 665,
         key: "gemsManufactoryElf17"
      },
      "gemsManufactoryElf18":
      {
         name: "Gems Manufactory 18 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 18,
         width: 5,
         height: 4,
         population: -384,
         culture: -114,
         product: 719,
         key: "gemsManufactoryElf18"
      },
      "gemsManufactoryElf19":
      {
         name: "Gems Manufactory 19 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 19,
         width: 5,
         height: 4,
         population: -443,
         culture: -135,
         product: 775,
         key: "gemsManufactoryElf19"
      },
      "gemsManufactoryElf20":
      {
         name: "Gems Manufactory 20 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 20,
         width: 4,
         height: 6,
         population: -1280,
         culture: -369,
         product: 1,
         key: "gemsManufactoryElf20"
      },
      "gemsManufactoryElf21":
      {
         name: "Gems Manufactory 21 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 21,
         width: 4,
         height: 6,
         population: -708,
         culture: -226,
         product: 1,
         key: "gemsManufactoryElf21"
      },
      "gemsManufactoryElf22":
      {
         name: "Gems Manufactory 22 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 22,
         width: 4,
         height: 6,
         population: -817,
         culture: -267,
         product: 1,
         key: "gemsManufactoryElf22"
      },
      "gemsManufactoryElf23":
      {
         name: "Gems Manufactory 23 (Elf)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 23,
         width: 4,
         height: 6,
         population: -943,
         culture: -314,
         product: 1,
         key: "gemsManufactoryElf23"
      },
      "gemsManufactoryHuman01":
      {
         name: "Gems Manufactory 1 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 1,
         width: 3,
         height: 4,
         population: -182,
         culture: 0,
         product: 56,
         key: "gemsManufactoryHuman01"
      },
      "gemsManufactoryHuman02":
      {
         name: "Gems Manufactory 2 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 2,
         width: 3,
         height: 4,
         population: -21,
         culture: -21,
         product: 75,
         key: "gemsManufactoryHuman02"
      },
      "gemsManufactoryHuman03":
      {
         name: "Gems Manufactory 3 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 3,
         width: 3,
         height: 4,
         population: -22,
         culture: -20,
         product: 91,
         key: "gemsManufactoryHuman03"
      },
      "gemsManufactoryHuman04":
      {
         name: "Gems Manufactory 4 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 4,
         width: 3,
         height: 4,
         population: -25,
         culture: -27,
         product: 113,
         key: "gemsManufactoryHuman04"
      },
      "gemsManufactoryHuman05":
      {
         name: "Gems Manufactory 5 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 5,
         width: 4,
         height: 4,
         population: -120,
         culture: -60,
         product: 176,
         key: "gemsManufactoryHuman05"
      },
      "gemsManufactoryHuman06":
      {
         name: "Gems Manufactory 6 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 6,
         width: 4,
         height: 4,
         population: -50,
         culture: -14,
         product: 204,
         key: "gemsManufactoryHuman06"
      },
      "gemsManufactoryHuman07":
      {
         name: "Gems Manufactory 7 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 7,
         width: 4,
         height: 4,
         population: -63,
         culture: -15,
         product: 232,
         key: "gemsManufactoryHuman07"
      },
      "gemsManufactoryHuman08":
      {
         name: "Gems Manufactory 8 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 8,
         width: 4,
         height: 4,
         population: -58,
         culture: -18,
         product: 260,
         key: "gemsManufactoryHuman08"
      },
      "gemsManufactoryHuman09":
      {
         name: "Gems Manufactory 9 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 9,
         width: 4,
         height: 5,
         population: -249,
         culture: -68,
         product: 361,
         key: "gemsManufactoryHuman09"
      },
      "gemsManufactoryHuman10":
      {
         name: "Gems Manufactory 10 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 10,
         width: 4,
         height: 5,
         population: -140,
         culture: -27,
         product: 395,
         key: "gemsManufactoryHuman10"
      },
      "gemsManufactoryHuman11":
      {
         name: "Gems Manufactory 11 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 11,
         width: 4,
         height: 5,
         population: -143,
         culture: -30,
         product: 430,
         key: "gemsManufactoryHuman11"
      },
      "gemsManufactoryHuman12":
      {
         name: "Gems Manufactory 12 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 12,
         width: 4,
         height: 5,
         population: -148,
         culture: -33,
         product: 464,
         key: "gemsManufactoryHuman12"
      },
      "gemsManufactoryHuman13":
      {
         name: "Gems Manufactory 13 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 13,
         width: 4,
         height: 5,
         population: -182,
         culture: -37,
         product: 502,
         key: "gemsManufactoryHuman13"
      },
      "gemsManufactoryHuman14":
      {
         name: "Gems Manufactory 14 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 14,
         width: 4,
         height: 5,
         population: -219,
         culture: -42,
         product: 537,
         key: "gemsManufactoryHuman14"
      },
      "gemsManufactoryHuman15":
      {
         name: "Gems Manufactory 15 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 15,
         width: 4,
         height: 5,
         population: -257,
         culture: -45,
         product: 571,
         key: "gemsManufactoryHuman15"
      },
      "gemsManufactoryHuman16":
      {
         name: "Gems Manufactory 16 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 16,
         width: 5,
         height: 4,
         population: -289,
         culture: -83,
         product: 618,
         key: "gemsManufactoryHuman16"
      },
      "gemsManufactoryHuman17":
      {
         name: "Gems Manufactory 17 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 17,
         width: 5,
         height: 4,
         population: -333,
         culture: -97,
         product: 665,
         key: "gemsManufactoryHuman17"
      },
      "gemsManufactoryHuman18":
      {
         name: "Gems Manufactory 18 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 18,
         width: 5,
         height: 4,
         population: -384,
         culture: -114,
         product: 719,
         key: "gemsManufactoryHuman18"
      },
      "gemsManufactoryHuman19":
      {
         name: "Gems Manufactory 19 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 19,
         width: 5,
         height: 4,
         population: -443,
         culture: -135,
         product: 775,
         key: "gemsManufactoryHuman19"
      },
      "gemsManufactoryHuman20":
      {
         name: "Gems Manufactory 20 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 20,
         width: 4,
         height: 6,
         population: -1280,
         culture: -369,
         product: 1,
         key: "gemsManufactoryHuman20"
      },
      "gemsManufactoryHuman21":
      {
         name: "Gems Manufactory 21 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 21,
         width: 4,
         height: 6,
         population: -708,
         culture: -226,
         product: 1,
         key: "gemsManufactoryHuman21"
      },
      "gemsManufactoryHuman22":
      {
         name: "Gems Manufactory 22 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 22,
         width: 4,
         height: 6,
         population: -817,
         culture: -267,
         product: 1,
         key: "gemsManufactoryHuman22"
      },
      "gemsManufactoryHuman23":
      {
         name: "Gems Manufactory 23 (Human)",
         typeKey: BuildingType.GEMS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 23,
         width: 4,
         height: 6,
         population: -943,
         culture: -314,
         product: 1,
         key: "gemsManufactoryHuman23"
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
      "magicDustManufactoryElf01":
      {
         name: "Magic Dust Manufactory 1 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 1,
         width: 4,
         height: 3,
         population: -192,
         culture: 0,
         product: 56,
         key: "magicDustManufactoryElf01"
      },
      "magicDustManufactoryElf02":
      {
         name: "Magic Dust Manufactory 2 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 2,
         width: 4,
         height: 3,
         population: -21,
         culture: -21,
         product: 75,
         key: "magicDustManufactoryElf02"
      },
      "magicDustManufactoryElf03":
      {
         name: "Magic Dust Manufactory 3 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 3,
         width: 4,
         height: 3,
         population: -24,
         culture: -20,
         product: 91,
         key: "magicDustManufactoryElf03"
      },
      "magicDustManufactoryElf04":
      {
         name: "Magic Dust Manufactory 4 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 4,
         width: 4,
         height: 4,
         population: -114,
         culture: -49,
         product: 151,
         key: "magicDustManufactoryElf04"
      },
      "magicDustManufactoryElf05":
      {
         name: "Magic Dust Manufactory 5 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 5,
         width: 4,
         height: 4,
         population: -39,
         culture: -39,
         product: 176,
         key: "magicDustManufactoryElf05"
      },
      "magicDustManufactoryElf06":
      {
         name: "Magic Dust Manufactory 6 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 6,
         width: 4,
         height: 4,
         population: -44,
         culture: -14,
         product: 204,
         key: "magicDustManufactoryElf06"
      },
      "magicDustManufactoryElf07":
      {
         name: "Magic Dust Manufactory 7 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 7,
         width: 4,
         height: 4,
         population: -62,
         culture: -16,
         product: 232,
         key: "magicDustManufactoryElf07"
      },
      "magicDustManufactoryElf08":
      {
         name: "Magic Dust Manufactory 8 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 8,
         width: 5,
         height: 4,
         population: -215,
         culture: -62,
         product: 323,
         key: "magicDustManufactoryElf08"
      },
      "magicDustManufactoryElf09":
      {
         name: "Magic Dust Manufactory 9 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 9,
         width: 5,
         height: 4,
         population: -94,
         culture: -25,
         product: 361,
         key: "magicDustManufactoryElf09"
      },
      "magicDustManufactoryElf10":
      {
         name: "Magic Dust Manufactory 10 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 10,
         width: 5,
         height: 4,
         population: -120,
         culture: -27,
         product: 395,
         key: "magicDustManufactoryElf10"
      },
      "magicDustManufactoryElf11":
      {
         name: "Magic Dust Manufactory 11 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 11,
         width: 5,
         height: 4,
         population: -143,
         culture: -31,
         product: 430,
         key: "magicDustManufactoryElf11"
      },
      "magicDustManufactoryElf12":
      {
         name: "Magic Dust Manufactory 12 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 12,
         width: 5,
         height: 4,
         population: -190,
         culture: -33,
         product: 464,
         key: "magicDustManufactoryElf12"
      },
      "magicDustManufactoryElf13":
      {
         name: "Magic Dust Manufactory 13 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 13,
         width: 5,
         height: 4,
         population: -195,
         culture: -38,
         product: 502,
         key: "magicDustManufactoryElf13"
      },
      "magicDustManufactoryElf14":
      {
         name: "Magic Dust Manufactory 14 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 14,
         width: 5,
         height: 4,
         population: -198,
         culture: -42,
         product: 537,
         key: "magicDustManufactoryElf14"
      },
      "magicDustManufactoryElf15":
      {
         name: "Magic Dust Manufactory 15 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 15,
         width: 5,
         height: 4,
         population: -246,
         culture: -46,
         product: 571,
         key: "magicDustManufactoryElf15"
      },
      "magicDustManufactoryElf16":
      {
         name: "Magic Dust Manufactory 16 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 16,
         width: 5,
         height: 4,
         population: -271,
         culture: -77,
         product: 618,
         key: "magicDustManufactoryElf16"
      },
      "magicDustManufactoryElf17":
      {
         name: "Magic Dust Manufactory 17 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 17,
         width: 5,
         height: 4,
         population: -333,
         culture: -97,
         product: 665,
         key: "magicDustManufactoryElf17"
      },
      "magicDustManufactoryElf18":
      {
         name: "Magic Dust Manufactory 18 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 18,
         width: 5,
         height: 4,
         population: -384,
         culture: -114,
         product: 719,
         key: "magicDustManufactoryElf18"
      },
      "magicDustManufactoryElf19":
      {
         name: "Magic Dust Manufactory 19 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 19,
         width: 5,
         height: 4,
         population: -443,
         culture: -135,
         product: 775,
         key: "magicDustManufactoryElf19"
      },
      "magicDustManufactoryElf20":
      {
         name: "Magic Dust Manufactory 20 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 20,
         width: 4,
         height: 6,
         population: -1280,
         culture: -369,
         product: 1,
         key: "magicDustManufactoryElf20"
      },
      "magicDustManufactoryElf21":
      {
         name: "Magic Dust Manufactory 21 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 21,
         width: 4,
         height: 6,
         population: -708,
         culture: -226,
         product: 1,
         key: "magicDustManufactoryElf21"
      },
      "magicDustManufactoryElf22":
      {
         name: "Magic Dust Manufactory 22 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 22,
         width: 4,
         height: 6,
         population: -817,
         culture: -267,
         product: 1,
         key: "magicDustManufactoryElf22"
      },
      "magicDustManufactoryElf23":
      {
         name: "Magic Dust Manufactory 23 (Elf)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.ELF,
         level: 23,
         width: 4,
         height: 6,
         population: -943,
         culture: -314,
         product: 1,
         key: "magicDustManufactoryElf23"
      },
      "magicDustManufactoryHuman01":
      {
         name: "Magic Dust Manufactory 1 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 1,
         width: 3,
         height: 2,
         population: -100,
         culture: 0,
         product: 28,
         key: "magicDustManufactoryHuman01"
      },
      "magicDustManufactoryHuman02":
      {
         name: "Magic Dust Manufactory 2 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 2,
         width: 3,
         height: 2,
         population: -11,
         culture: -9,
         product: 38,
         key: "magicDustManufactoryHuman02"
      },
      "magicDustManufactoryHuman03":
      {
         name: "Magic Dust Manufactory 3 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 3,
         width: 3,
         height: 2,
         population: -13,
         culture: -9,
         product: 47,
         key: "magicDustManufactoryHuman03"
      },
      "magicDustManufactoryHuman04":
      {
         name: "Magic Dust Manufactory 4 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 4,
         width: 4,
         height: 3,
         population: -151,
         culture: -43,
         product: 113,
         key: "magicDustManufactoryHuman04"
      },
      "magicDustManufactoryHuman05":
      {
         name: "Magic Dust Manufactory 5 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 5,
         width: 4,
         height: 3,
         population: -31,
         culture: -25,
         product: 132,
         key: "magicDustManufactoryHuman05"
      },
      "magicDustManufactoryHuman06":
      {
         name: "Magic Dust Manufactory 6 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 6,
         width: 4,
         height: 3,
         population: -41,
         culture: -10,
         product: 154,
         key: "magicDustManufactoryHuman06"
      },
      "magicDustManufactoryHuman07":
      {
         name: "Magic Dust Manufactory 7 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 7,
         width: 4,
         height: 3,
         population: -52,
         culture: -10,
         product: 173,
         key: "magicDustManufactoryHuman07"
      },
      "magicDustManufactoryHuman08":
      {
         name: "Magic Dust Manufactory 8 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 8,
         width: 5,
         height: 4,
         population: -344,
         culture: -91,
         product: 323,
         key: "magicDustManufactoryHuman08"
      },
      "magicDustManufactoryHuman09":
      {
         name: "Magic Dust Manufactory 9 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 9,
         width: 5,
         height: 4,
         population: -126,
         culture: -22,
         product: 361,
         key: "magicDustManufactoryHuman09"
      },
      "magicDustManufactoryHuman10":
      {
         name: "Magic Dust Manufactory 10 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 10,
         width: 5,
         height: 4,
         population: -154,
         culture: -24,
         product: 395,
         key: "magicDustManufactoryHuman10"
      },
      "magicDustManufactoryHuman11":
      {
         name: "Magic Dust Manufactory 11 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 11,
         width: 5,
         height: 4,
         population: -157,
         culture: -27,
         product: 430,
         key: "magicDustManufactoryHuman11"
      },
      "magicDustManufactoryHuman12":
      {
         name: "Magic Dust Manufactory 12 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 12,
         width: 5,
         height: 4,
         population: -163,
         culture: -30,
         product: 464,
         key: "magicDustManufactoryHuman12"
      },
      "magicDustManufactoryHuman13":
      {
         name: "Magic Dust Manufactory 13 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 13,
         width: 5,
         height: 4,
         population: -200,
         culture: -33,
         product: 502,
         key: "magicDustManufactoryHuman13"
      },
      "magicDustManufactoryHuman14":
      {
         name: "Magic Dust Manufactory 14 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 14,
         width: 5,
         height: 4,
         population: -241,
         culture: -37,
         product: 537,
         key: "magicDustManufactoryHuman14"
      },
      "magicDustManufactoryHuman15":
      {
         name: "Magic Dust Manufactory 15 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 15,
         width: 5,
         height: 4,
         population: -283,
         culture: -42,
         product: 571,
         key: "magicDustManufactoryHuman15"
      },
      "magicDustManufactoryHuman16":
      {
         name: "Magic Dust Manufactory 16 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 16,
         width: 5,
         height: 4,
         population: -101,
         culture: -128,
         product: 618,
         key: "magicDustManufactoryHuman16"
      },
      "magicDustManufactoryHuman17":
      {
         name: "Magic Dust Manufactory 17 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 17,
         width: 5,
         height: 4,
         population: -333,
         culture: -97,
         product: 665,
         key: "magicDustManufactoryHuman17"
      },
      "magicDustManufactoryHuman18":
      {
         name: "Magic Dust Manufactory 18 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 18,
         width: 5,
         height: 4,
         population: -384,
         culture: -114,
         product: 719,
         key: "magicDustManufactoryHuman18"
      },
      "magicDustManufactoryHuman19":
      {
         name: "Magic Dust Manufactory 19 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 19,
         width: 5,
         height: 4,
         population: -443,
         culture: -135,
         product: 775,
         key: "magicDustManufactoryHuman19"
      },
      "magicDustManufactoryHuman20":
      {
         name: "Magic Dust Manufactory 20 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 20,
         width: 4,
         height: 6,
         population: -1280,
         culture: -369,
         product: 1,
         key: "magicDustManufactoryHuman20"
      },
      "magicDustManufactoryHuman21":
      {
         name: "Magic Dust Manufactory 21 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 21,
         width: 4,
         height: 6,
         population: -708,
         culture: -226,
         product: 1,
         key: "magicDustManufactoryHuman21"
      },
      "magicDustManufactoryHuman22":
      {
         name: "Magic Dust Manufactory 22 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 22,
         width: 4,
         height: 6,
         population: -817,
         culture: -267,
         product: 1,
         key: "magicDustManufactoryHuman22"
      },
      "magicDustManufactoryHuman23":
      {
         name: "Magic Dust Manufactory 23 (Human)",
         typeKey: BuildingType.MAGIC_DUST_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 23,
         width: 4,
         height: 6,
         population: -943,
         culture: -314,
         product: 1,
         key: "magicDustManufactoryHuman23"
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
         product: 9,
         key: "marbleManufactoryElf01"
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
         product: 13,
         key: "marbleManufactoryElf02"
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
         product: 16,
         key: "marbleManufactoryElf03"
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
         product: 19,
         key: "marbleManufactoryElf04"
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
         product: 22,
         key: "marbleManufactoryElf05"
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
         product: 50,
         key: "marbleManufactoryElf06"
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
         product: 56,
         key: "marbleManufactoryElf07"
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
         product: 66,
         key: "marbleManufactoryElf08"
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
         product: 72,
         key: "marbleManufactoryElf09"
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
         product: 119,
         key: "marbleManufactoryElf10"
      },
      "marbleManufactoryElf11":
      {
         name: "Marble Manufactory 11 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 11,
         width: 3,
         height: 2,
         population: -27,
         culture: -6,
         product: 129,
         key: "marbleManufactoryElf11"
      },
      "marbleManufactoryElf12":
      {
         name: "Marble Manufactory 12 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 12,
         width: 3,
         height: 2,
         population: -36,
         culture: -6,
         product: 138,
         key: "marbleManufactoryElf12"
      },
      "marbleManufactoryElf13":
      {
         name: "Marble Manufactory 13 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 13,
         width: 3,
         height: 2,
         population: -36,
         culture: -7,
         product: 151,
         key: "marbleManufactoryElf13"
      },
      "marbleManufactoryElf14":
      {
         name: "Marble Manufactory 14 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 14,
         width: 3,
         height: 2,
         population: -38,
         culture: -8,
         product: 160,
         key: "marbleManufactoryElf14"
      },
      "marbleManufactoryElf15":
      {
         name: "Marble Manufactory 15 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 15,
         width: 3,
         height: 2,
         population: -46,
         culture: -9,
         product: 173,
         key: "marbleManufactoryElf15"
      },
      "marbleManufactoryElf16":
      {
         name: "Marble Manufactory 16 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 16,
         width: 2,
         height: 5,
         population: -328,
         culture: -82,
         product: 298,
         key: "marbleManufactoryElf16"
      },
      "marbleManufactoryElf17":
      {
         name: "Marble Manufactory 17 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 17,
         width: 2,
         height: 5,
         population: -105,
         culture: -30,
         product: 320,
         key: "marbleManufactoryElf17"
      },
      "marbleManufactoryElf18":
      {
         name: "Marble Manufactory 18 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 18,
         width: 2,
         height: 5,
         population: -122,
         culture: -36,
         product: 345,
         key: "marbleManufactoryElf18"
      },
      "marbleManufactoryElf19":
      {
         name: "Marble Manufactory 19 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 19,
         width: 2,
         height: 5,
         population: -139,
         culture: -42,
         product: 373,
         key: "marbleManufactoryElf19"
      },
      "marbleManufactoryElf20":
      {
         name: "Marble Manufactory 20 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 20,
         width: 6,
         height: 3,
         population: -1110,
         culture: -311,
         product: 725,
         key: "marbleManufactoryElf20"
      },
      "marbleManufactoryElf21":
      {
         name: "Marble Manufactory 21 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 21,
         width: 6,
         height: 3,
         population: -332,
         culture: -106,
         product: 781,
         key: "marbleManufactoryElf21"
      },
      "marbleManufactoryElf22":
      {
         name: "Marble Manufactory 22 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 22,
         width: 6,
         height: 3,
         population: -383,
         culture: -125,
         product: 841,
         key: "marbleManufactoryElf22"
      },
      "marbleManufactoryElf23":
      {
         name: "Marble Manufactory 23 (Elf)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.ELF,
         level: 23,
         width: 6,
         height: 3,
         population: -442,
         culture: -148,
         product: 910,
         key: "marbleManufactoryElf23"
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
         product: 9,
         key: "marbleManufactoryHuman01"
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
         product: 13,
         key: "marbleManufactoryHuman02"
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
         product: 16,
         key: "marbleManufactoryHuman03"
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
         product: 19,
         key: "marbleManufactoryHuman04"
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
         product: 66,
         key: "marbleManufactoryHuman05"
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
         product: 75,
         key: "marbleManufactoryHuman06"
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
         product: 88,
         key: "marbleManufactoryHuman07"
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
         product: 97,
         key: "marbleManufactoryHuman08"
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
         product: 217,
         key: "marbleManufactoryHuman09"
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
         product: 235,
         key: "marbleManufactoryHuman10"
      },
      "marbleManufactoryHuman11":
      {
         name: "Marble Manufactory 11 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 11,
         width: 4,
         height: 3,
         population: -59,
         culture: -10,
         product: 257,
         key: "marbleManufactoryHuman11"
      },
      "marbleManufactoryHuman12":
      {
         name: "Marble Manufactory 12 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 12,
         width: 4,
         height: 3,
         population: -61,
         culture: -11,
         product: 279,
         key: "marbleManufactoryHuman12"
      },
      "marbleManufactoryHuman13":
      {
         name: "Marble Manufactory 13 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 13,
         width: 4,
         height: 3,
         population: -75,
         culture: -13,
         product: 301,
         key: "marbleManufactoryHuman13"
      },
      "marbleManufactoryHuman14":
      {
         name: "Marble Manufactory 14 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 14,
         width: 4,
         height: 3,
         population: -90,
         culture: -14,
         product: 323,
         key: "marbleManufactoryHuman14"
      },
      "marbleManufactoryHuman15":
      {
         name: "Marble Manufactory 15 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 15,
         width: 4,
         height: 3,
         population: -106,
         culture: -15,
         product: 342,
         key: "marbleManufactoryHuman15"
      },
      "marbleManufactoryHuman16":
      {
         name: "Marble Manufactory 16 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 16,
         width: 5,
         height: 3,
         population: -343,
         culture: -74,
         product: 446,
         key: "marbleManufactoryHuman16"
      },
      "marbleManufactoryHuman17":
      {
         name: "Marble Manufactory 17 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 17,
         width: 5,
         height: 3,
         population: -171,
         culture: -41,
         product: 480,
         key: "marbleManufactoryHuman17"
      },
      "marbleManufactoryHuman18":
      {
         name: "Marble Manufactory 18 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 18,
         width: 5,
         height: 3,
         population: -199,
         culture: -48,
         product: 518,
         key: "marbleManufactoryHuman18"
      },
      "marbleManufactoryHuman19":
      {
         name: "Marble Manufactory 19 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 19,
         width: 5,
         height: 3,
         population: -228,
         culture: -57,
         product: 559,
         key: "marbleManufactoryHuman19"
      },
      "marbleManufactoryHuman20":
      {
         name: "Marble Manufactory 20 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 20,
         width: 6,
         height: 3,
         population: -444,
         culture: -214,
         product: 725,
         key: "marbleManufactoryHuman20"
      },
      "marbleManufactoryHuman21":
      {
         name: "Marble Manufactory 21 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 21,
         width: 6,
         height: 3,
         population: -332,
         culture: -106,
         product: 781,
         key: "marbleManufactoryHuman21"
      },
      "marbleManufactoryHuman22":
      {
         name: "Marble Manufactory 22 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 22,
         width: 6,
         height: 3,
         population: -383,
         culture: -125,
         product: 841,
         key: "marbleManufactoryHuman22"
      },
      "marbleManufactoryHuman23":
      {
         name: "Marble Manufactory 23 (Human)",
         typeKey: BuildingType.MARBLE_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 23,
         width: 6,
         height: 3,
         population: -442,
         culture: -148,
         product: 910,
         key: "marbleManufactoryHuman23"
      },
      "planksManufactoryElf01":
      {
         name: "Planks Manufactory 1 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 1,
         width: 2,
         height: 1,
         population: -22,
         culture: 0,
         product: 9,
         key: "planksManufactoryElf01"
      },
      "planksManufactoryElf02":
      {
         name: "Planks Manufactory 2 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 2,
         width: 2,
         height: 1,
         population: -2,
         culture: -2,
         product: 13,
         key: "planksManufactoryElf02"
      },
      "planksManufactoryElf03":
      {
         name: "Planks Manufactory 3 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 3,
         width: 2,
         height: 1,
         population: -3,
         culture: -2,
         product: 16,
         key: "planksManufactoryElf03"
      },
      "planksManufactoryElf04":
      {
         name: "Planks Manufactory 4 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 4,
         width: 2,
         height: 1,
         population: -3,
         culture: -2,
         product: 19,
         key: "planksManufactoryElf04"
      },
      "planksManufactoryElf05":
      {
         name: "Planks Manufactory 5 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 5,
         width: 2,
         height: 1,
         population: -4,
         culture: -3,
         product: 22,
         key: "planksManufactoryElf05"
      },
      "planksManufactoryElf06":
      {
         name: "Planks Manufactory 6 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 6,
         width: 2,
         height: 1,
         population: -3,
         culture: -1,
         product: 25,
         key: "planksManufactoryElf06"
      },
      "planksManufactoryElf07":
      {
         name: "Planks Manufactory 7 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 7,
         width: 2,
         height: 2,
         population: -48,
         culture: -12,
         product: 56,
         key: "planksManufactoryElf07"
      },
      "planksManufactoryElf08":
      {
         name: "Planks Manufactory 8 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 8,
         width: 2,
         height: 2,
         population: -13,
         culture: -3,
         product: 66,
         key: "planksManufactoryElf08"
      },
      "planksManufactoryElf09":
      {
         name: "Planks Manufactory 9 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 9,
         width: 2,
         height: 2,
         population: -13,
         culture: -3,
         product: 72,
         key: "planksManufactoryElf09"
      },
      "planksManufactoryElf10":
      {
         name: "Planks Manufactory 10 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 10,
         width: 2,
         height: 2,
         population: -16,
         culture: -3,
         product: 78,
         key: "planksManufactoryElf10"
      },
      "planksManufactoryElf11":
      {
         name: "Planks Manufactory 11 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 11,
         width: 3,
         height: 2,
         population: -93,
         culture: -20,
         product: 129,
         key: "planksManufactoryElf11"
      },
      "planksManufactoryElf12":
      {
         name: "Planks Manufactory 12 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 12,
         width: 3,
         height: 2,
         population: -40,
         culture: -6,
         product: 138,
         key: "planksManufactoryElf12"
      },
      "planksManufactoryElf13":
      {
         name: "Planks Manufactory 13 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 13,
         width: 3,
         height: 2,
         population: -40,
         culture: -6,
         product: 151,
         key: "planksManufactoryElf13"
      },
      "planksManufactoryElf14":
      {
         name: "Planks Manufactory 14 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 14,
         width: 3,
         height: 2,
         population: -40,
         culture: -7,
         product: 160,
         key: "planksManufactoryElf14"
      },
      "planksManufactoryElf15":
      {
         name: "Planks Manufactory 15 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 15,
         width: 3,
         height: 2,
         population: -51,
         culture: -8,
         product: 173,
         key: "planksManufactoryElf15"
      },
      "planksManufactoryElf16":
      {
         name: "Planks Manufactory 16 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 16,
         width: 5,
         height: 2,
         population: -361,
         culture: -74,
         product: 298,
         key: "planksManufactoryElf16"
      },
      "planksManufactoryElf17":
      {
         name: "Planks Manufactory 17 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 17,
         width: 5,
         height: 2,
         population: -116,
         culture: -27,
         product: 320,
         key: "planksManufactoryElf17"
      },
      "planksManufactoryElf18":
      {
         name: "Planks Manufactory 18 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 18,
         width: 5,
         height: 2,
         population: -134,
         culture: -32,
         product: 345,
         key: "planksManufactoryElf18"
      },
      "planksManufactoryElf19":
      {
         name: "Planks Manufactory 19 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 19,
         width: 5,
         height: 2,
         population: -154,
         culture: -38,
         product: 373,
         key: "planksManufactoryElf19"
      },
      "planksManufactoryElf20":
      {
         name: "Planks Manufactory 20 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 20,
         width: 6,
         height: 3,
         population: -1004,
         culture: -339,
         product: 725,
         key: "planksManufactoryElf20"
      },
      "planksManufactoryElf21":
      {
         name: "Planks Manufactory 21 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 21,
         width: 6,
         height: 3,
         population: -332,
         culture: -106,
         product: 781,
         key: "planksManufactoryElf21"
      },
      "planksManufactoryElf22":
      {
         name: "Planks Manufactory 22 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 22,
         width: 6,
         height: 3,
         population: -383,
         culture: -125,
         product: 841,
         key: "planksManufactoryElf22"
      },
      "planksManufactoryElf23":
      {
         name: "Planks Manufactory 23 (Elf)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 23,
         width: 6,
         height: 3,
         population: -442,
         culture: -148,
         product: 910,
         key: "planksManufactoryElf23"
      },
      "planksManufactoryHuman01":
      {
         name: "Planks Manufactory 1 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 1,
         width: 2,
         height: 2,
         population: -34,
         culture: 0,
         product: 19,
         key: "planksManufactoryHuman01"
      },
      "planksManufactoryHuman02":
      {
         name: "Planks Manufactory 2 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 2,
         width: 2,
         height: 2,
         population: -4,
         culture: -5,
         product: 25,
         key: "planksManufactoryHuman02"
      },
      "planksManufactoryHuman03":
      {
         name: "Planks Manufactory 3 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 3,
         width: 2,
         height: 2,
         population: -4,
         culture: -4,
         product: 31,
         key: "planksManufactoryHuman03"
      },
      "planksManufactoryHuman04":
      {
         name: "Planks Manufactory 4 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 4,
         width: 2,
         height: 2,
         population: -5,
         culture: -7,
         product: 38,
         key: "planksManufactoryHuman04"
      },
      "planksManufactoryHuman05":
      {
         name: "Planks Manufactory 5 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 5,
         width: 2,
         height: 2,
         population: -5,
         culture: -6,
         product: 44,
         key: "planksManufactoryHuman05"
      },
      "planksManufactoryHuman06":
      {
         name: "Planks Manufactory 6 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 6,
         width: 3,
         height: 3,
         population: -81,
         culture: -33,
         product: 116,
         key: "planksManufactoryHuman06"
      },
      "planksManufactoryHuman07":
      {
         name: "Planks Manufactory 7 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 7,
         width: 3,
         height: 3,
         population: -20,
         culture: -6,
         product: 132,
         key: "planksManufactoryHuman07"
      },
      "planksManufactoryHuman08":
      {
         name: "Planks Manufactory 8 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 8,
         width: 3,
         height: 3,
         population: -18,
         culture: -7,
         product: 148,
         key: "planksManufactoryHuman08"
      },
      "planksManufactoryHuman09":
      {
         name: "Planks Manufactory 9 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 9,
         width: 3,
         height: 3,
         population: -29,
         culture: -7,
         product: 163,
         key: "planksManufactoryHuman09"
      },
      "planksManufactoryHuman10":
      {
         name: "Planks Manufactory 10 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 10,
         width: 4,
         height: 4,
         population: -218,
         culture: -73,
         product: 317,
         key: "planksManufactoryHuman10"
      },
      "planksManufactoryHuman11":
      {
         name: "Planks Manufactory 11 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 11,
         width: 4,
         height: 4,
         population: -65,
         culture: -17,
         product: 345,
         key: "planksManufactoryHuman11"
      },
      "planksManufactoryHuman12":
      {
         name: "Planks Manufactory 12 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 12,
         width: 4,
         height: 4,
         population: -66,
         culture: -18,
         product: 373,
         key: "planksManufactoryHuman12"
      },
      "planksManufactoryHuman13":
      {
         name: "Planks Manufactory 13 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 13,
         width: 4,
         height: 4,
         population: -82,
         culture: -21,
         product: 402,
         key: "planksManufactoryHuman13"
      },
      "planksManufactoryHuman14":
      {
         name: "Planks Manufactory 14 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 14,
         width: 4,
         height: 4,
         population: -99,
         culture: -22,
         product: 430,
         key: "planksManufactoryHuman14"
      },
      "planksManufactoryHuman15":
      {
         name: "Planks Manufactory 15 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 15,
         width: 4,
         height: 4,
         population: -115,
         culture: -25,
         product: 458,
         key: "planksManufactoryHuman15"
      },
      "planksManufactoryHuman16":
      {
         name: "Planks Manufactory 16 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 16,
         width: 3,
         height: 6,
         population: -252,
         culture: -83,
         product: 534,
         key: "planksManufactoryHuman16"
      },
      "planksManufactoryHuman17":
      {
         name: "Planks Manufactory 17 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 17,
         width: 3,
         height: 6,
         population: -169,
         culture: -60,
         product: 577,
         key: "planksManufactoryHuman17"
      },
      "planksManufactoryHuman18":
      {
         name: "Planks Manufactory 18 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 18,
         width: 3,
         height: 6,
         population: -195,
         culture: -71,
         product: 621,
         key: "planksManufactoryHuman18"
      },
      "planksManufactoryHuman19":
      {
         name: "Planks Manufactory 19 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 19,
         width: 3,
         height: 6,
         population: -224,
         culture: -84,
         product: 672,
         key: "planksManufactoryHuman19"
      },
      "planksManufactoryHuman20":
      {
         name: "Planks Manufactory 20 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 20,
         width: 6,
         height: 3,
         population: -475,
         culture: -39,
         product: 725,
         key: "planksManufactoryHuman20"
      },
      "planksManufactoryHuman21":
      {
         name: "Planks Manufactory 21 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 21,
         width: 6,
         height: 3,
         population: -332,
         culture: -106,
         product: 781,
         key: "planksManufactoryHuman21"
      },
      "planksManufactoryHuman22":
      {
         name: "Planks Manufactory 22 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 22,
         width: 6,
         height: 3,
         population: -383,
         culture: -125,
         product: 841,
         key: "planksManufactoryHuman22"
      },
      "planksManufactoryHuman23":
      {
         name: "Planks Manufactory 23 (Human)",
         typeKey: BuildingType.PLANKS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 23,
         width: 6,
         height: 3,
         population: -442,
         culture: -148,
         product: 910,
         key: "planksManufactoryHuman23"
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
         coin: 80,
         key: "residenceElf01"
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
         coin: 118,
         key: "residenceElf02"
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
         coin: 148,
         key: "residenceElf03"
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
         coin: 261,
         key: "residenceElf04"
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
         coin: 314,
         key: "residenceElf05"
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
         coin: 373,
         key: "residenceElf06"
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
         coin: 425,
         key: "residenceElf07"
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
         coin: 717,
         key: "residenceElf08"
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
         coin: 811,
         key: "residenceElf09"
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
         coin: 905,
         key: "residenceElf10"
      },
      "residenceElf11":
      {
         name: "Residence 11 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 11,
         width: 3,
         height: 3,
         culture: -7,
         population: 30,
         coin: 1000,
         key: "residenceElf11"
      },
      "residenceElf12":
      {
         name: "Residence 12 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 12,
         width: 3,
         height: 3,
         culture: -6,
         population: 40,
         coin: 1142,
         key: "residenceElf12"
      },
      "residenceElf13":
      {
         name: "Residence 13 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 13,
         width: 3,
         height: 3,
         culture: -7,
         population: 40,
         coin: 1272,
         key: "residenceElf13"
      },
      "residenceElf14":
      {
         name: "Residence 14 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 14,
         width: 3,
         height: 3,
         culture: -8,
         population: 40,
         coin: 1391,
         key: "residenceElf14"
      },
      "residenceElf15":
      {
         name: "Residence 15 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 15,
         width: 3,
         height: 3,
         culture: -7,
         population: 50,
         coin: 1500,
         key: "residenceElf15"
      },
      "residenceElf16":
      {
         name: "Residence 16 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 16,
         width: 2,
         height: 4,
         culture: -37,
         population: 20,
         coin: 1680,
         key: "residenceElf16"
      },
      "residenceElf17":
      {
         name: "Residence 17 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 17,
         width: 2,
         height: 4,
         culture: -17,
         population: 30,
         coin: 1769,
         key: "residenceElf17"
      },
      "residenceElf18":
      {
         name: "Residence 18 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 18,
         width: 2,
         height: 4,
         culture: -18,
         population: 40,
         coin: 1859,
         key: "residenceElf18"
      },
      "residenceElf19":
      {
         name: "Residence 19 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 19,
         width: 2,
         height: 4,
         culture: -20,
         population: 40,
         coin: 1957,
         key: "residenceElf19"
      },
      "residenceElf20":
      {
         name: "Residence 20 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 20,
         width: 4,
         height: 3,
         culture: -137,
         population: 200,
         coin: 3082,
         key: "residenceElf20"
      },
      "residenceElf21":
      {
         name: "Residence 21 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 21,
         width: 4,
         height: 3,
         culture: -35,
         population: 150,
         coin: 3246,
         key: "residenceElf21"
      },
      "residenceElf22":
      {
         name: "Residence 22 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 22,
         width: 4,
         height: 3,
         culture: -46,
         population: 190,
         coin: 3425,
         key: "residenceElf22"
      },
      "residenceElf23":
      {
         name: "Residence 23 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 23,
         width: 4,
         height: 3,
         culture: -47,
         population: 110,
         coin: 3612,
         key: "residenceElf23"
      },
      "residenceElf24":
      {
         name: "Residence 24 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 24,
         width: 3,
         height: 5,
         culture: -181,
         population: 450,
         coin: 4763,
         key: "residenceElf24"
      },
      "residenceElf25":
      {
         name: "Residence 25 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 25,
         width: 3,
         height: 5,
         culture: -68,
         population: 170,
         coin: 5023,
         key: "residenceElf25"
      },
      "residenceElf26":
      {
         name: "Residence 26 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 26,
         width: 3,
         height: 5,
         culture: -76,
         population: 180,
         coin: 5302,
         key: "residenceElf26"
      },
      "residenceElf27":
      {
         name: "Residence 27 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 27,
         width: 3,
         height: 5,
         culture: -83,
         population: 200,
         coin: 5611,
         key: "residenceElf27"
      },
      "residenceElf28":
      {
         name: "Residence 28 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 28,
         width: 4,
         height: 4,
         culture: -158,
         population: 400,
         coin: 6324,
         key: "residenceElf28"
      },
      "residenceElf29":
      {
         name: "Residence 29 (Elf)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.ELF,
         level: 29,
         width: 4,
         height: 4,
         culture: -108,
         population: 200,
         coin: 6631,
         key: "residenceElf29"
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
         coin: 88,
         key: "residenceHuman01"
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
         coin: 127,
         key: "residenceHuman02"
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
         coin: 155,
         key: "residenceHuman03"
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
         coin: 184,
         key: "residenceHuman04"
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
         coin: 328,
         key: "residenceHuman05"
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
         coin: 373,
         key: "residenceHuman06"
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
         coin: 437,
         key: "residenceHuman07"
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
         coin: 482,
         key: "residenceHuman08"
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
         coin: 1088,
         key: "residenceHuman09"
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
         coin: 1157,
         key: "residenceHuman10"
      },
      "residenceHuman11":
      {
         name: "Residence 11 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 11,
         width: 4,
         height: 3,
         culture: -9,
         population: 40,
         coin: 1300,
         key: "residenceHuman11"
      },
      "residenceHuman12":
      {
         name: "Residence 12 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 12,
         width: 4,
         height: 3,
         culture: -9,
         population: 40,
         coin: 1523,
         key: "residenceHuman12"
      },
      "residenceHuman13":
      {
         name: "Residence 13 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 13,
         width: 4,
         height: 3,
         culture: -9,
         population: 50,
         coin: 1636,
         key: "residenceHuman13"
      },
      "residenceHuman14":
      {
         name: "Residence 14 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 14,
         width: 4,
         height: 3,
         culture: -10,
         population: 60,
         coin: 1826,
         key: "residenceHuman14"
      },
      "residenceHuman15":
      {
         name: "Residence 15 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 15,
         width: 4,
         height: 3,
         culture: -9,
         population: 70,
         coin: 2083,
         key: "residenceHuman15"
      },
      "residenceHuman16":
      {
         name: "Residence 16 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 16,
         width: 5,
         height: 2,
         culture: -38,
         population: 20,
         coin: 2160,
         key: "residenceHuman16"
      },
      "residenceHuman17":
      {
         name: "Residence 17 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 17,
         width: 5,
         height: 2,
         culture: -21,
         population: 30,
         coin: 2230,
         key: "residenceHuman17"
      },
      "residenceHuman18":
      {
         name: "Residence 18 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 18,
         width: 5,
         height: 2,
         culture: -23,
         population: 30,
         coin: 2340,
         key: "residenceHuman18"
      },
      "residenceHuman19":
      {
         name: "Residence 19 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 19,
         width: 5,
         height: 2,
         culture: -25,
         population: 40,
         coin: 2457,
         key: "residenceHuman19"
      },
      "residenceHuman20":
      {
         name: "Residence 20 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 20,
         width: 4,
         height: 3,
         culture: -85,
         population: 70,
         coin: 3103,
         key: "residenceHuman20"
      },
      "residenceHuman21":
      {
         name: "Residence 21 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 21,
         width: 4,
         height: 3,
         culture: -34,
         population: 150,
         coin: 3266,
         key: "residenceHuman21"
      },
      "residenceHuman22":
      {
         name: "Residence 22 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 22,
         width: 4,
         height: 3,
         culture: -44,
         population: 190,
         coin: 3445,
         key: "residenceHuman22"
      },
      "residenceHuman23":
      {
         name: "Residence 23 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 23,
         width: 4,
         height: 3,
         culture: -47,
         population: 110,
         coin: 3631,
         key: "residenceHuman23"
      },
      "residenceHuman24":
      {
         name: "Residence 24 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 24,
         width: 3,
         height: 5,
         culture: -181,
         population: 450,
         coin: 4763,
         key: "residenceHuman24"
      },
      "residenceHuman25":
      {
         name: "Residence 25 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 25,
         width: 3,
         height: 5,
         culture: -68,
         population: 170,
         coin: 5023,
         key: "residenceHuman25"
      },
      "residenceHuman26":
      {
         name: "Residence 26 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 26,
         width: 3,
         height: 5,
         culture: -76,
         population: 180,
         coin: 5302,
         key: "residenceHuman26"
      },
      "residenceHuman27":
      {
         name: "Residence 27 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 27,
         width: 3,
         height: 5,
         culture: -83,
         population: 200,
         coin: 5611,
         key: "residenceHuman27"
      },
      "residenceHuman28":
      {
         name: "Residence 28 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 28,
         width: 4,
         height: 4,
         culture: -158,
         population: 400,
         coin: 6324,
         key: "residenceHuman28"
      },
      "residenceHuman29":
      {
         name: "Residence 29 (Human)",
         typeKey: BuildingType.RESIDENCE,
         raceKey: Race.HUMAN,
         level: 29,
         width: 4,
         height: 4,
         culture: -108,
         population: 200,
         coin: 6631,
         key: "residenceHuman29"
      },
      "scrollsManufactoryElf01":
      {
         name: "Scrolls Manufactory 1 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 3,
         population: -113,
         culture: 0,
         product: 41,
         key: "scrollsManufactoryElf01"
      },
      "scrollsManufactoryElf02":
      {
         name: "Scrolls Manufactory 2 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 2,
         width: 3,
         height: 3,
         population: -13,
         culture: -15,
         product: 56,
         key: "scrollsManufactoryElf02"
      },
      "scrollsManufactoryElf03":
      {
         name: "Scrolls Manufactory 3 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 3,
         width: 3,
         height: 3,
         population: -14,
         culture: -14,
         product: 69,
         key: "scrollsManufactoryElf03"
      },
      "scrollsManufactoryElf04":
      {
         name: "Scrolls Manufactory 4 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 4,
         width: 3,
         height: 3,
         population: -16,
         culture: -20,
         product: 85,
         key: "scrollsManufactoryElf04"
      },
      "scrollsManufactoryElf05":
      {
         name: "Scrolls Manufactory 5 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 5,
         width: 3,
         height: 3,
         population: -17,
         culture: -21,
         product: 100,
         key: "scrollsManufactoryElf05"
      },
      "scrollsManufactoryElf06":
      {
         name: "Scrolls Manufactory 6 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 6,
         width: 3,
         height: 4,
         population: -83,
         culture: -34,
         product: 154,
         key: "scrollsManufactoryElf06"
      },
      "scrollsManufactoryElf07":
      {
         name: "Scrolls Manufactory 7 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 7,
         width: 3,
         height: 4,
         population: -37,
         culture: -11,
         product: 173,
         key: "scrollsManufactoryElf07"
      },
      "scrollsManufactoryElf08":
      {
         name: "Scrolls Manufactory 8 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 8,
         width: 3,
         height: 4,
         population: -43,
         culture: -13,
         product: 195,
         key: "scrollsManufactoryElf08"
      },
      "scrollsManufactoryElf09":
      {
         name: "Scrolls Manufactory 9 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 9,
         width: 3,
         height: 4,
         population: -45,
         culture: -14,
         product: 217,
         key: "scrollsManufactoryElf09"
      },
      "scrollsManufactoryElf10":
      {
         name: "Scrolls Manufactory 10 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 10,
         width: 4,
         height: 4,
         population: -201,
         culture: -68,
         product: 317,
         key: "scrollsManufactoryElf10"
      },
      "scrollsManufactoryElf11":
      {
         name: "Scrolls Manufactory 11 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 11,
         width: 4,
         height: 4,
         population: -91,
         culture: -24,
         product: 345,
         key: "scrollsManufactoryElf11"
      },
      "scrollsManufactoryElf12":
      {
         name: "Scrolls Manufactory 12 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 12,
         width: 4,
         height: 4,
         population: -120,
         culture: -26,
         product: 373,
         key: "scrollsManufactoryElf12"
      },
      "scrollsManufactoryElf13":
      {
         name: "Scrolls Manufactory 13 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 13,
         width: 4,
         height: 4,
         population: -122,
         culture: -29,
         product: 402,
         key: "scrollsManufactoryElf13"
      },
      "scrollsManufactoryElf14":
      {
         name: "Scrolls Manufactory 14 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 14,
         width: 4,
         height: 4,
         population: -125,
         culture: -32,
         product: 430,
         key: "scrollsManufactoryElf14"
      },
      "scrollsManufactoryElf15":
      {
         name: "Scrolls Manufactory 15 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 15,
         width: 4,
         height: 4,
         population: -155,
         culture: -35,
         product: 458,
         key: "scrollsManufactoryElf15"
      },
      "scrollsManufactoryElf16":
      {
         name: "Scrolls Manufactory 16 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 16,
         width: 4,
         height: 5,
         population: -720,
         culture: -116,
         product: 618,
         key: "scrollsManufactoryElf16"
      },
      "scrollsManufactoryElf17":
      {
         name: "Scrolls Manufactory 17 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 17,
         width: 4,
         height: 5,
         population: -295,
         culture: -85,
         product: 665,
         key: "scrollsManufactoryElf17"
      },
      "scrollsManufactoryElf18":
      {
         name: "Scrolls Manufactory 18 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 18,
         width: 4,
         height: 5,
         population: -339,
         culture: -100,
         product: 719,
         key: "scrollsManufactoryElf18"
      },
      "scrollsManufactoryElf19":
      {
         name: "Scrolls Manufactory 19 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 19,
         width: 4,
         height: 5,
         population: -392,
         culture: -119,
         product: 775,
         key: "scrollsManufactoryElf19"
      },
      "scrollsManufactoryElf20":
      {
         name: "Scrolls Manufactory 20 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 20,
         width: 5,
         height: 4,
         population: -419,
         culture: -139,
         product: 835,
         key: "scrollsManufactoryElf20"
      },
      "scrollsManufactoryElf21":
      {
         name: "Scrolls Manufactory 21 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 21,
         width: 5,
         height: 4,
         population: -516,
         culture: -165,
         product: 901,
         key: "scrollsManufactoryElf21"
      },
      "scrollsManufactoryElf22":
      {
         name: "Scrolls Manufactory 22 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 22,
         width: 5,
         height: 4,
         population: -596,
         culture: -194,
         product: 973,
         key: "scrollsManufactoryElf22"
      },
      "scrollsManufactoryElf23":
      {
         name: "Scrolls Manufactory 23 (Elf)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.ELF,
         level: 23,
         width: 5,
         height: 4,
         population: -687,
         culture: -230,
         product: 1,
         key: "scrollsManufactoryElf23"
      },
      "scrollsManufactoryHuman01":
      {
         name: "Scrolls Manufactory 1 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 1,
         width: 2,
         height: 3,
         population: -88,
         culture: 0,
         product: 28,
         key: "scrollsManufactoryHuman01"
      },
      "scrollsManufactoryHuman02":
      {
         name: "Scrolls Manufactory 2 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 2,
         width: 2,
         height: 3,
         population: -9,
         culture: -8,
         product: 38,
         key: "scrollsManufactoryHuman02"
      },
      "scrollsManufactoryHuman03":
      {
         name: "Scrolls Manufactory 3 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 3,
         width: 2,
         height: 3,
         population: -11,
         culture: -8,
         product: 47,
         key: "scrollsManufactoryHuman03"
      },
      "scrollsManufactoryHuman04":
      {
         name: "Scrolls Manufactory 4 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 4,
         width: 2,
         height: 3,
         population: -12,
         culture: -11,
         product: 56,
         key: "scrollsManufactoryHuman04"
      },
      "scrollsManufactoryHuman05":
      {
         name: "Scrolls Manufactory 5 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 5,
         width: 2,
         height: 3,
         population: -14,
         culture: -11,
         product: 66,
         key: "scrollsManufactoryHuman05"
      },
      "scrollsManufactoryHuman06":
      {
         name: "Scrolls Manufactory 6 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 6,
         width: 3,
         height: 3,
         population: -94,
         culture: -25,
         product: 116,
         key: "scrollsManufactoryHuman06"
      },
      "scrollsManufactoryHuman07":
      {
         name: "Scrolls Manufactory 7 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 7,
         width: 3,
         height: 3,
         population: -34,
         culture: -7,
         product: 132,
         key: "scrollsManufactoryHuman07"
      },
      "scrollsManufactoryHuman08":
      {
         name: "Scrolls Manufactory 8 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 8,
         width: 3,
         height: 3,
         population: -31,
         culture: -8,
         product: 148,
         key: "scrollsManufactoryHuman08"
      },
      "scrollsManufactoryHuman09":
      {
         name: "Scrolls Manufactory 9 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 9,
         width: 3,
         height: 3,
         population: -49,
         culture: -8,
         product: 163,
         key: "scrollsManufactoryHuman09"
      },
      "scrollsManufactoryHuman10":
      {
         name: "Scrolls Manufactory 10 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 10,
         width: 3,
         height: 4,
         population: -195,
         culture: -42,
         product: 235,
         key: "scrollsManufactoryHuman10"
      },
      "scrollsManufactoryHuman11":
      {
         name: "Scrolls Manufactory 11 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 11,
         width: 3,
         height: 4,
         population: -83,
         culture: -14,
         product: 257,
         key: "scrollsManufactoryHuman11"
      },
      "scrollsManufactoryHuman12":
      {
         name: "Scrolls Manufactory 12 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 12,
         width: 3,
         height: 4,
         population: -85,
         culture: -15,
         product: 279,
         key: "scrollsManufactoryHuman12"
      },
      "scrollsManufactoryHuman13":
      {
         name: "Scrolls Manufactory 13 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 13,
         width: 3,
         height: 4,
         population: -105,
         culture: -18,
         product: 301,
         key: "scrollsManufactoryHuman13"
      },
      "scrollsManufactoryHuman14":
      {
         name: "Scrolls Manufactory 14 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 14,
         width: 3,
         height: 4,
         population: -127,
         culture: -19,
         product: 323,
         key: "scrollsManufactoryHuman14"
      },
      "scrollsManufactoryHuman15":
      {
         name: "Scrolls Manufactory 15 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 15,
         width: 3,
         height: 4,
         population: -148,
         culture: -22,
         product: 342,
         key: "scrollsManufactoryHuman15"
      },
      "scrollsManufactoryHuman16":
      {
         name: "Scrolls Manufactory 16 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 16,
         width: 4,
         height: 4,
         population: -432,
         culture: -162,
         product: 493,
         key: "scrollsManufactoryHuman16"
      },
      "scrollsManufactoryHuman17":
      {
         name: "Scrolls Manufactory 17 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 17,
         width: 4,
         height: 4,
         population: -233,
         culture: -68,
         product: 534,
         key: "scrollsManufactoryHuman17"
      },
      "scrollsManufactoryHuman18":
      {
         name: "Scrolls Manufactory 18 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 18,
         width: 4,
         height: 4,
         population: -270,
         culture: -80,
         product: 574,
         key: "scrollsManufactoryHuman18"
      },
      "scrollsManufactoryHuman19":
      {
         name: "Scrolls Manufactory 19 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 19,
         width: 4,
         height: 4,
         population: -310,
         culture: -95,
         product: 618,
         key: "scrollsManufactoryHuman19"
      },
      "scrollsManufactoryHuman20":
      {
         name: "Scrolls Manufactory 20 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 20,
         width: 5,
         height: 4,
         population: -1030,
         culture: -294,
         product: 835,
         key: "scrollsManufactoryHuman20"
      },
      "scrollsManufactoryHuman21":
      {
         name: "Scrolls Manufactory 21 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 21,
         width: 5,
         height: 4,
         population: -516,
         culture: -165,
         product: 901,
         key: "scrollsManufactoryHuman21"
      },
      "scrollsManufactoryHuman22":
      {
         name: "Scrolls Manufactory 22 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 22,
         width: 5,
         height: 4,
         population: -596,
         culture: -194,
         product: 973,
         key: "scrollsManufactoryHuman22"
      },
      "scrollsManufactoryHuman23":
      {
         name: "Scrolls Manufactory 23 (Human)",
         typeKey: BuildingType.SCROLLS_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 23,
         width: 5,
         height: 4,
         population: -687,
         culture: -230,
         product: 1,
         key: "scrollsManufactoryHuman23"
      },
      "silkManufactoryElf01":
      {
         name: "Silk Manufactory 1 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 1,
         width: 2,
         height: 3,
         population: -84,
         culture: 0,
         product: 28,
         key: "silkManufactoryElf01"
      },
      "silkManufactoryElf02":
      {
         name: "Silk Manufactory 2 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 2,
         width: 2,
         height: 3,
         population: -9,
         culture: -9,
         product: 38,
         key: "silkManufactoryElf02"
      },
      "silkManufactoryElf03":
      {
         name: "Silk Manufactory 3 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 3,
         width: 2,
         height: 3,
         population: -11,
         culture: -9,
         product: 47,
         key: "silkManufactoryElf03"
      },
      "silkManufactoryElf04":
      {
         name: "Silk Manufactory 4 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 4,
         width: 3,
         height: 3,
         population: -69,
         culture: -27,
         product: 85,
         key: "silkManufactoryElf04"
      },
      "silkManufactoryElf05":
      {
         name: "Silk Manufactory 5 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 5,
         width: 3,
         height: 3,
         population: -19,
         culture: -19,
         product: 100,
         key: "silkManufactoryElf05"
      },
      "silkManufactoryElf06":
      {
         name: "Silk Manufactory 6 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 6,
         width: 3,
         height: 3,
         population: -21,
         culture: -7,
         product: 116,
         key: "silkManufactoryElf06"
      },
      "silkManufactoryElf07":
      {
         name: "Silk Manufactory 7 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 7,
         width: 3,
         height: 3,
         population: -31,
         culture: -7,
         product: 132,
         key: "silkManufactoryElf07"
      },
      "silkManufactoryElf08":
      {
         name: "Silk Manufactory 8 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 8,
         width: 3,
         height: 4,
         population: -129,
         culture: -38,
         product: 195,
         key: "silkManufactoryElf08"
      },
      "silkManufactoryElf09":
      {
         name: "Silk Manufactory 9 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 9,
         width: 3,
         height: 4,
         population: -50,
         culture: -13,
         product: 217,
         key: "silkManufactoryElf09"
      },
      "silkManufactoryElf10":
      {
         name: "Silk Manufactory 10 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 10,
         width: 3,
         height: 4,
         population: -62,
         culture: -15,
         product: 235,
         key: "silkManufactoryElf10"
      },
      "silkManufactoryElf11":
      {
         name: "Silk Manufactory 11 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 11,
         width: 3,
         height: 4,
         population: -75,
         culture: -15,
         product: 257,
         key: "silkManufactoryElf11"
      },
      "silkManufactoryElf12":
      {
         name: "Silk Manufactory 12 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 12,
         width: 3,
         height: 4,
         population: -101,
         culture: -18,
         product: 279,
         key: "silkManufactoryElf12"
      },
      "silkManufactoryElf13":
      {
         name: "Silk Manufactory 13 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 13,
         width: 3,
         height: 4,
         population: -102,
         culture: -20,
         product: 301,
         key: "silkManufactoryElf13"
      },
      "silkManufactoryElf14":
      {
         name: "Silk Manufactory 14 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 14,
         width: 3,
         height: 4,
         population: -104,
         culture: -22,
         product: 323,
         key: "silkManufactoryElf14"
      },
      "silkManufactoryElf15":
      {
         name: "Silk Manufactory 15 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 15,
         width: 3,
         height: 4,
         population: -129,
         culture: -24,
         product: 342,
         key: "silkManufactoryElf15"
      },
      "silkManufactoryElf16":
      {
         name: "Silk Manufactory 16 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 16,
         width: 4,
         height: 5,
         population: -919,
         culture: -229,
         product: 618,
         key: "silkManufactoryElf16"
      },
      "silkManufactoryElf17":
      {
         name: "Silk Manufactory 17 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 17,
         width: 4,
         height: 5,
         population: -295,
         culture: -85,
         product: 665,
         key: "silkManufactoryElf17"
      },
      "silkManufactoryElf18":
      {
         name: "Silk Manufactory 18 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 18,
         width: 4,
         height: 5,
         population: -339,
         culture: -100,
         product: 719,
         key: "silkManufactoryElf18"
      },
      "silkManufactoryElf19":
      {
         name: "Silk Manufactory 19 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 19,
         width: 4,
         height: 5,
         population: -392,
         culture: -119,
         product: 775,
         key: "silkManufactoryElf19"
      },
      "silkManufactoryElf20":
      {
         name: "Silk Manufactory 20 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 20,
         width: 5,
         height: 4,
         population: -419,
         culture: -139,
         product: 835,
         key: "silkManufactoryElf20"
      },
      "silkManufactoryElf21":
      {
         name: "Silk Manufactory 21 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 21,
         width: 5,
         height: 4,
         population: -516,
         culture: -165,
         product: 901,
         key: "silkManufactoryElf21"
      },
      "silkManufactoryElf22":
      {
         name: "Silk Manufactory 22 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 22,
         width: 5,
         height: 4,
         population: -596,
         culture: -194,
         product: 973,
         key: "silkManufactoryElf22"
      },
      "silkManufactoryElf23":
      {
         name: "Silk Manufactory 23 (Elf)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.ELF,
         level: 23,
         width: 5,
         height: 4,
         population: -687,
         culture: -230,
         product: 1,
         key: "silkManufactoryElf23"
      },
      "silkManufactoryHuman01":
      {
         name: "Silk Manufactory 1 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 1,
         width: 3,
         height: 3,
         population: -108,
         culture: 0,
         product: 41,
         key: "silkManufactoryHuman01"
      },
      "silkManufactoryHuman02":
      {
         name: "Silk Manufactory 2 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 2,
         width: 3,
         height: 3,
         population: -12,
         culture: -15,
         product: 56,
         key: "silkManufactoryHuman02"
      },
      "silkManufactoryHuman03":
      {
         name: "Silk Manufactory 3 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 3,
         width: 3,
         height: 3,
         population: -13,
         culture: -14,
         product: 69,
         key: "silkManufactoryHuman03"
      },
      "silkManufactoryHuman04":
      {
         name: "Silk Manufactory 4 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 4,
         width: 3,
         height: 3,
         population: -15,
         culture: -20,
         product: 85,
         key: "silkManufactoryHuman04"
      },
      "silkManufactoryHuman05":
      {
         name: "Silk Manufactory 5 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 5,
         width: 3,
         height: 3,
         population: -16,
         culture: -20,
         product: 100,
         key: "silkManufactoryHuman05"
      },
      "silkManufactoryHuman06":
      {
         name: "Silk Manufactory 6 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 6,
         width: 3,
         height: 4,
         population: -84,
         culture: -33,
         product: 154,
         key: "silkManufactoryHuman06"
      },
      "silkManufactoryHuman07":
      {
         name: "Silk Manufactory 7 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 7,
         width: 3,
         height: 4,
         population: -38,
         culture: -12,
         product: 173,
         key: "silkManufactoryHuman07"
      },
      "silkManufactoryHuman08":
      {
         name: "Silk Manufactory 8 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 8,
         width: 3,
         height: 4,
         population: -33,
         culture: -12,
         product: 195,
         key: "silkManufactoryHuman08"
      },
      "silkManufactoryHuman09":
      {
         name: "Silk Manufactory 9 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 9,
         width: 3,
         height: 4,
         population: -54,
         culture: -14,
         product: 217,
         key: "silkManufactoryHuman09"
      },
      "silkManufactoryHuman10":
      {
         name: "Silk Manufactory 10 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 10,
         width: 4,
         height: 4,
         population: -213,
         culture: -68,
         product: 317,
         key: "silkManufactoryHuman10"
      },
      "silkManufactoryHuman11":
      {
         name: "Silk Manufactory 11 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 11,
         width: 4,
         height: 4,
         population: -90,
         culture: -23,
         product: 345,
         key: "silkManufactoryHuman11"
      },
      "silkManufactoryHuman12":
      {
         name: "Silk Manufactory 12 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 12,
         width: 4,
         height: 4,
         population: -93,
         culture: -26,
         product: 373,
         key: "silkManufactoryHuman12"
      },
      "silkManufactoryHuman13":
      {
         name: "Silk Manufactory 13 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 13,
         width: 4,
         height: 4,
         population: -115,
         culture: -28,
         product: 402,
         key: "silkManufactoryHuman13"
      },
      "silkManufactoryHuman14":
      {
         name: "Silk Manufactory 14 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 14,
         width: 4,
         height: 4,
         population: -138,
         culture: -32,
         product: 430,
         key: "silkManufactoryHuman14"
      },
      "silkManufactoryHuman15":
      {
         name: "Silk Manufactory 15 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 15,
         width: 4,
         height: 4,
         population: -162,
         culture: -35,
         product: 458,
         key: "silkManufactoryHuman15"
      },
      "silkManufactoryHuman16":
      {
         name: "Silk Manufactory 16 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 16,
         width: 4,
         height: 5,
         population: -713,
         culture: -120,
         product: 618,
         key: "silkManufactoryHuman16"
      },
      "silkManufactoryHuman17":
      {
         name: "Silk Manufactory 17 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 17,
         width: 4,
         height: 5,
         population: -291,
         culture: -85,
         product: 665,
         key: "silkManufactoryHuman17"
      },
      "silkManufactoryHuman18":
      {
         name: "Silk Manufactory 18 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 18,
         width: 4,
         height: 5,
         population: -336,
         culture: -100,
         product: 719,
         key: "silkManufactoryHuman18"
      },
      "silkManufactoryHuman19":
      {
         name: "Silk Manufactory 19 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 19,
         width: 4,
         height: 5,
         population: -388,
         culture: -119,
         product: 775,
         key: "silkManufactoryHuman19"
      },
      "silkManufactoryHuman20":
      {
         name: "Silk Manufactory 20 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 20,
         width: 5,
         height: 4,
         population: -419,
         culture: -139,
         product: 835,
         key: "silkManufactoryHuman20"
      },
      "silkManufactoryHuman21":
      {
         name: "Silk Manufactory 21 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 21,
         width: 5,
         height: 4,
         population: -516,
         culture: -165,
         product: 901,
         key: "silkManufactoryHuman21"
      },
      "silkManufactoryHuman22":
      {
         name: "Silk Manufactory 22 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 22,
         width: 5,
         height: 4,
         population: -596,
         culture: -194,
         product: 973,
         key: "silkManufactoryHuman22"
      },
      "silkManufactoryHuman23":
      {
         name: "Silk Manufactory 23 (Human)",
         typeKey: BuildingType.SILK_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 23,
         width: 5,
         height: 4,
         population: -687,
         culture: -230,
         product: 1,
         key: "silkManufactoryHuman23"
      },
      "steelManufactoryElf01":
      {
         name: "Steel Manufactory 1 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 1,
         width: 2,
         height: 2,
         population: -36,
         culture: 0,
         product: 19,
         key: "steelManufactoryElf01"
      },
      "steelManufactoryElf02":
      {
         name: "Steel Manufactory 2 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 2,
         width: 2,
         height: 2,
         population: -4,
         culture: -5,
         product: 25,
         key: "steelManufactoryElf02"
      },
      "steelManufactoryElf03":
      {
         name: "Steel Manufactory 3 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 3,
         width: 2,
         height: 2,
         population: -4,
         culture: -4,
         product: 31,
         key: "steelManufactoryElf03"
      },
      "steelManufactoryElf04":
      {
         name: "Steel Manufactory 4 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 4,
         width: 2,
         height: 2,
         population: -5,
         culture: -7,
         product: 38,
         key: "steelManufactoryElf04"
      },
      "steelManufactoryElf05":
      {
         name: "Steel Manufactory 5 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 5,
         width: 2,
         height: 3,
         population: -33,
         culture: -17,
         product: 66,
         key: "steelManufactoryElf05"
      },
      "steelManufactoryElf06":
      {
         name: "Steel Manufactory 6 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 6,
         width: 2,
         height: 3,
         population: -9,
         culture: -4,
         product: 75,
         key: "steelManufactoryElf06"
      },
      "steelManufactoryElf07":
      {
         name: "Steel Manufactory 7 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 7,
         width: 2,
         height: 3,
         population: -14,
         culture: -4,
         product: 88,
         key: "steelManufactoryElf07"
      },
      "steelManufactoryElf08":
      {
         name: "Steel Manufactory 8 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 8,
         width: 2,
         height: 3,
         population: -15,
         culture: -5,
         product: 97,
         key: "steelManufactoryElf08"
      },
      "steelManufactoryElf09":
      {
         name: "Steel Manufactory 9 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 9,
         width: 3,
         height: 3,
         population: -84,
         culture: -30,
         product: 163,
         key: "steelManufactoryElf09"
      },
      "steelManufactoryElf10":
      {
         name: "Steel Manufactory 10 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 10,
         width: 3,
         height: 3,
         population: -30,
         culture: -9,
         product: 179,
         key: "steelManufactoryElf10"
      },
      "steelManufactoryElf11":
      {
         name: "Steel Manufactory 11 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 11,
         width: 3,
         height: 3,
         population: -36,
         culture: -9,
         product: 195,
         key: "steelManufactoryElf11"
      },
      "steelManufactoryElf12":
      {
         name: "Steel Manufactory 12 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 12,
         width: 3,
         height: 3,
         population: -49,
         culture: -10,
         product: 210,
         key: "steelManufactoryElf12"
      },
      "steelManufactoryElf13":
      {
         name: "Steel Manufactory 13 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 13,
         width: 3,
         height: 3,
         population: -49,
         culture: -12,
         product: 226,
         key: "steelManufactoryElf13"
      },
      "steelManufactoryElf14":
      {
         name: "Steel Manufactory 14 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 14,
         width: 3,
         height: 3,
         population: -50,
         culture: -13,
         product: 242,
         key: "steelManufactoryElf14"
      },
      "steelManufactoryElf15":
      {
         name: "Steel Manufactory 15 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 15,
         width: 3,
         height: 3,
         population: -62,
         culture: -14,
         product: 257,
         key: "steelManufactoryElf15"
      },
      "steelManufactoryElf16":
      {
         name: "Steel Manufactory 16 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 16,
         width: 3,
         height: 5,
         population: -444,
         culture: -135,
         product: 446,
         key: "steelManufactoryElf16"
      },
      "steelManufactoryElf17":
      {
         name: "Steel Manufactory 17 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 17,
         width: 3,
         height: 5,
         population: -141,
         culture: -50,
         product: 480,
         key: "steelManufactoryElf17"
      },
      "steelManufactoryElf18":
      {
         name: "Steel Manufactory 18 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 18,
         width: 3,
         height: 5,
         population: -164,
         culture: -59,
         product: 518,
         key: "steelManufactoryElf18"
      },
      "steelManufactoryElf19":
      {
         name: "Steel Manufactory 19 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 19,
         width: 3,
         height: 5,
         population: -189,
         culture: -70,
         product: 559,
         key: "steelManufactoryElf19"
      },
      "steelManufactoryElf20":
      {
         name: "Steel Manufactory 20 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 20,
         width: 3,
         height: 6,
         population: -742,
         culture: -131,
         product: 725,
         key: "steelManufactoryElf20"
      },
      "steelManufactoryElf21":
      {
         name: "Steel Manufactory 21 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 21,
         width: 3,
         height: 6,
         population: -332,
         culture: -106,
         product: 781,
         key: "steelManufactoryElf21"
      },
      "steelManufactoryElf22":
      {
         name: "Steel Manufactory 22 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 22,
         width: 3,
         height: 6,
         population: -383,
         culture: -125,
         product: 841,
         key: "steelManufactoryElf22"
      },
      "steelManufactoryElf23":
      {
         name: "Steel Manufactory 23 (Elf)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.ELF,
         level: 23,
         width: 3,
         height: 6,
         population: -442,
         culture: -148,
         product: 910,
         key: "steelManufactoryElf23"
      },
      "steelManufactoryHuman01":
      {
         name: "Steel Manufactory 1 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 1,
         width: 2,
         height: 2,
         population: -38,
         culture: 0,
         product: 19,
         key: "steelManufactoryHuman01"
      },
      "steelManufactoryHuman02":
      {
         name: "Steel Manufactory 2 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 2,
         width: 2,
         height: 2,
         population: -4,
         culture: -4,
         product: 25,
         key: "steelManufactoryHuman02"
      },
      "steelManufactoryHuman03":
      {
         name: "Steel Manufactory 3 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 3,
         width: 2,
         height: 2,
         population: -5,
         culture: -4,
         product: 31,
         key: "steelManufactoryHuman03"
      },
      "steelManufactoryHuman04":
      {
         name: "Steel Manufactory 4 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 4,
         width: 2,
         height: 2,
         population: -5,
         culture: -6,
         product: 38,
         key: "steelManufactoryHuman04"
      },
      "steelManufactoryHuman05":
      {
         name: "Steel Manufactory 5 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 5,
         width: 2,
         height: 2,
         population: -6,
         culture: -6,
         product: 44,
         key: "steelManufactoryHuman05"
      },
      "steelManufactoryHuman06":
      {
         name: "Steel Manufactory 6 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 6,
         width: 2,
         height: 2,
         population: -8,
         culture: -2,
         product: 50,
         key: "steelManufactoryHuman06"
      },
      "steelManufactoryHuman07":
      {
         name: "Steel Manufactory 7 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 7,
         width: 3,
         height: 3,
         population: -104,
         culture: -33,
         product: 132,
         key: "steelManufactoryHuman07"
      },
      "steelManufactoryHuman08":
      {
         name: "Steel Manufactory 8 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 8,
         width: 3,
         height: 3,
         population: -20,
         culture: -7,
         product: 148,
         key: "steelManufactoryHuman08"
      },
      "steelManufactoryHuman09":
      {
         name: "Steel Manufactory 9 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 9,
         width: 3,
         height: 3,
         population: -32,
         culture: -6,
         product: 163,
         key: "steelManufactoryHuman09"
      },
      "steelManufactoryHuman10":
      {
         name: "Steel Manufactory 10 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 10,
         width: 3,
         height: 3,
         population: -40,
         culture: -8,
         product: 179,
         key: "steelManufactoryHuman10"
      },
      "steelManufactoryHuman11":
      {
         name: "Steel Manufactory 11 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 11,
         width: 4,
         height: 4,
         population: -275,
         culture: -74,
         product: 345,
         key: "steelManufactoryHuman11"
      },
      "steelManufactoryHuman12":
      {
         name: "Steel Manufactory 12 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 12,
         width: 4,
         height: 4,
         population: -73,
         culture: -17,
         product: 373,
         key: "steelManufactoryHuman12"
      },
      "steelManufactoryHuman13":
      {
         name: "Steel Manufactory 13 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 13,
         width: 4,
         height: 4,
         population: -91,
         culture: -18,
         product: 402,
         key: "steelManufactoryHuman13"
      },
      "steelManufactoryHuman14":
      {
         name: "Steel Manufactory 14 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 14,
         width: 4,
         height: 4,
         population: -110,
         culture: -21,
         product: 430,
         key: "steelManufactoryHuman14"
      },
      "steelManufactoryHuman15":
      {
         name: "Steel Manufactory 15 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 15,
         width: 4,
         height: 4,
         population: -128,
         culture: -23,
         product: 458,
         key: "steelManufactoryHuman15"
      },
      "steelManufactoryHuman16":
      {
         name: "Steel Manufactory 16 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 16,
         width: 3,
         height: 5,
         population: -77,
         culture: -24,
         product: 468,
         key: "steelManufactoryHuman16"
      },
      "steelManufactoryHuman17":
      {
         name: "Steel Manufactory 17 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 17,
         width: 3,
         height: 5,
         population: -156,
         culture: -45,
         product: 480,
         key: "steelManufactoryHuman17"
      },
      "steelManufactoryHuman18":
      {
         name: "Steel Manufactory 18 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 18,
         width: 3,
         height: 5,
         population: -180,
         culture: -54,
         product: 518,
         key: "steelManufactoryHuman18"
      },
      "steelManufactoryHuman19":
      {
         name: "Steel Manufactory 19 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 19,
         width: 3,
         height: 5,
         population: -208,
         culture: -64,
         product: 559,
         key: "steelManufactoryHuman19"
      },
      "steelManufactoryHuman20":
      {
         name: "Steel Manufactory 20 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 20,
         width: 3,
         height: 6,
         population: -600,
         culture: -172,
         product: 725,
         key: "steelManufactoryHuman20"
      },
      "steelManufactoryHuman21":
      {
         name: "Steel Manufactory 21 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 21,
         width: 3,
         height: 6,
         population: -332,
         culture: -106,
         product: 781,
         key: "steelManufactoryHuman21"
      },
      "steelManufactoryHuman22":
      {
         name: "Steel Manufactory 22 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 22,
         width: 3,
         height: 6,
         population: -383,
         culture: -125,
         product: 841,
         key: "steelManufactoryHuman22"
      },
      "steelManufactoryHuman23":
      {
         name: "Steel Manufactory 23 (Human)",
         typeKey: BuildingType.STEEL_MANUFACTORY,
         raceKey: Race.HUMAN,
         level: 23,
         width: 3,
         height: 6,
         population: -442,
         culture: -148,
         product: 910,
         key: "steelManufactoryHuman23"
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
   building.coin = (building.coin !== undefined ? building.coin : 0);
   building.culture = (building.culture !== undefined ? building.culture : 0);
   building.population = (building.population !== undefined ? building.population : 0);
});

Building.cumulativeCoin = function(buildingKey)
{
   InputValidator.validateIsString("buildingKey", buildingKey);

   return cumulative(buildingKey, "coin");
};

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