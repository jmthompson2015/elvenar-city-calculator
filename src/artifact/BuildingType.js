import InputValidator from "../utility/InputValidator.js";

import BuildingCategory from "./BuildingCategory.js";
import Race from "./Race.js";

const BuildingType = {
   BUILDERS_HUT: "buildersHut",
   CRYSTAL_MANUFACTORY: "crystalManufactory",
   ELIXIR_MANUFACTORY: "elixirManufactory",
   GEMS_MANUFACTORY: "gemsManufactory",
   MAGIC_ACADEMY: "magicAcademy",
   MAGIC_DUST_MANUFACTORY: "magicDustManufactory",
   // MAGIC_RESIDENCE: "magicResidence",
   // MAGIC_WORKSHOP: "magicWorkshop",
   MAIN_HALL: "mainHall",
   MARBLE_MANUFACTORY: "marbleManufactory",
   PLANKS_MANUFACTORY: "planksManufactory",
   RESIDENCE: "residence",
   SCROLLS_MANUFACTORY: "scrollsManufactory",
   SILK_MANUFACTORY: "silkManufactory",
   STEEL_MANUFACTORY: "steelManufactory",
   TRADER: "trader",
   WORKSHOP: "workshop",

   LUMINOUS_SIGNPOST_ELF: "luminousSignpostElf",
   PURPLE_BLOSSOM_TREES_ELF: "purpleBlossomTreesElf",
   SHRINE_OF_ENAR_ELF: "shrineOfEnarElf",
   FLYING_BOAT_ELF: "flyingBoatElf",
   ANCHOR_POINT_ELF: "anchorPointElf",
   SPOT_OF_WHISPERING_TREES_ELF: "spotOfWhisperingTreesElf",
   FLOWER_CAGE_ELF: "flowerCageElf",
   WELL_OF_FLOATING_ISLANDS_ELF: "wellOfFloatingIslandsElf",
   ANCIENT_RUNES_ELF: "ancientRunesElf",
   ORANGE_BERRIES_TREES_ELF: "orangeBerriesTreesElf",
   PROTECTOR_OF_THE_WOODS_ELF: "protectorOfTheWoodsElf",
   STATUE_OF_THE_SACRED_SAGE_ELF: "statueOfTheSacredSageElf",
   GIFT_OF_THE_GARDEN_FAIRY_ELF: "giftOfTheGardenFairyElf",
   VALLORIAN_SEASNAKE_ELF: "vallorianSeasnakeElf",
   MYSTERIOUS_CYCLONE_ELF: "mysteriousCycloneElf",
   STAIRWAY_OF_THE_WIND_ELF: "stairwayOfTheWindElf",
   SPLENDID_STONE_OF_ART_ELF: "splendidStoneOfArtElf",
   CROP_OF_JOY_ELF: "cropOfJoyElf",
   MOTHERTREE_ELF: "mothertreeElf",
   TEMPLE_OF_AGES_ELF: "templeOfAgesElf",
   ENARS_UNICORN_ELF: "enarsUnicornElf",
   GODDESS_OF_FERTILITY_ELF: "goddessOfFertilityElf",
   ALTAR_OF_THE_FOREFATHERS_ELF: "altarOfTheForefathersElf",
   NATURES_BLESSING_ELF: "naturesBlessingElf",
   GOLDEN_TORCH_TOWER_ELF: "goldenTorchTowerElf",
   GARDEN_OF_HARMONY_ELF: "gardenOfHarmonyElf",
   HARMONY_BOARDWALK_ELF: "harmonyBoardwalkElf",
   GLORIOUS_STATUE_HUMAN: "gloriousStatueHuman",
   BLUE_FLOWERS_HUMAN: "blueFlowersHuman",
   PRISON_OF_THE_CONDEMNED_HUMAN: "prisonOfTheCondemnedHuman",
   HOLY_CODEX_HUMAN: "holyCodexHuman",
   MAGIC_CHASM_HUMAN: "magicChasmHuman",
   DELICATESSEN_BUTCHER_HUMAN: "delicatessenButcherHuman",
   BARBECUE_AREA_HUMAN: "barbecueAreaHuman",
   HALLOWED_SHRINE_HUMAN: "hallowedShrineHuman",
   GOLDEN_GUARDS_HUMAN: "goldenGuardsHuman",
   RED_FLOWERS_HUMAN: "redFlowersHuman",
   FLOATING_CITADEL_HUMAN: "floatingCitadelHuman",
   MONSTER_FOUNTAIN_HUMAN: "monsterFountainHuman",
   SMALL_FORECOURT_HUMAN: "smallForecourtHuman",
   LORD_OF_THE_LEGEND_HUMAN: "lordOfTheLegendHuman",
   DECORATIVE_FLOWER_POT_HUMAN: "decorativeFlowerPotHuman",
   MAGE_TOWER_HUMAN: "mageTowerHuman",
   FRATRICIDAL_WAR_MEMORIAL_HUMAN: "fratricidalWarMemorialHuman",
   TWIN_FLOWERBED_HUMAN: "twinFlowerbedHuman",
   ASTROLABE_HUMAN: "astrolabeHuman",
   BATTLE_MONUMENT_HUMAN: "battleMonumentHuman",
   MONUMENT_SQUARE_HUMAN: "monumentSquareHuman",
   FOUNTAIN_OF_YOUTH_HUMAN: "fountainOfYouthHuman",
   CENTRAL_PLACE_HUMAN: "centralPlaceHuman",
   ROYAL_GUARD_HUMAN: "royalGuardHuman",
   DRAGONS_KEEP_HUMAN: "dragonsKeepHuman",
   SMALL_GARDEN_HUMAN: "smallGardenHuman",
   BATTLE_ARENA_HUMAN: "battleArenaHuman",

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
      "gemsManufactory":
      {
         name: "Gems Manufactory",
         categoryKey: BuildingCategory.MANUFACTORY,
         key: "gemsManufactory",
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
      // "magicResidence":
      // {
      //    name: "Magic Residence",
      //    categoryKey: BuildingCategory.BASIC,
      //    key: "magicResidence",
      // },
      // "magicWorkshop":
      // {
      //    name: "Magic Workshop",
      //    categoryKey: BuildingCategory.BASIC,
      //    key: "magicWorkshop",
      // },
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
      "planksManufactory":
      {
         name: "Planks Manufactory",
         categoryKey: BuildingCategory.MANUFACTORY,
         key: "planksManufactory",
      },
      "residence":
      {
         name: "Residence",
         categoryKey: BuildingCategory.BASIC,
         key: "residence",
      },
      "scrollsManufactory":
      {
         name: "Scrolls Manufactory",
         categoryKey: BuildingCategory.MANUFACTORY,
         key: "scrollsManufactory",
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

      "luminousSignpostElf":
      {
         name: "Luminous Signpost (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "luminousSignpostElf"
      },
      "purpleBlossomTreesElf":
      {
         name: "Purple Blossom Trees (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "purpleBlossomTreesElf"
      },
      "shrineOfEnarElf":
      {
         name: "Shrine of Enar (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "shrineOfEnarElf"
      },
      "flyingBoatElf":
      {
         name: "Flying Boat (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "flyingBoatElf"
      },
      "anchorPointElf":
      {
         name: "Anchor Point (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "anchorPointElf"
      },
      "spotOfWhisperingTreesElf":
      {
         name: "Spot of Whispering Trees (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "spotOfWhisperingTreesElf"
      },
      "flowerCageElf":
      {
         name: "Flower Cage (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "flowerCageElf"
      },
      "wellOfFloatingIslandsElf":
      {
         name: "Well of Floating Islands (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "wellOfFloatingIslandsElf"
      },
      "ancientRunesElf":
      {
         name: "Ancient Runes (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "ancientRunesElf"
      },
      "orangeBerriesTreesElf":
      {
         name: "Orange Berries Trees (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "orangeBerriesTreesElf"
      },
      "protectorOfTheWoodsElf":
      {
         name: "Protector of the Woods (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "protectorOfTheWoodsElf"
      },
      "statueOfTheSacredSageElf":
      {
         name: "Statue of the Sacred Sage (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "statueOfTheSacredSageElf"
      },
      "giftOfTheGardenFairyElf":
      {
         name: "Gift of the Garden Fairy (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "giftOfTheGardenFairyElf"
      },
      "vallorianSeasnakeElf":
      {
         name: "Vallorian Seasnake (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "vallorianSeasnakeElf"
      },
      "mysteriousCycloneElf":
      {
         name: "Mysterious Cyclone (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "mysteriousCycloneElf"
      },
      "stairwayOfTheWindElf":
      {
         name: "Stairway of the Wind (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "stairwayOfTheWindElf"
      },
      "splendidStoneOfArtElf":
      {
         name: "Splendid Stone of Art (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "splendidStoneOfArtElf"
      },
      "cropOfJoyElf":
      {
         name: "Crop of Joy (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "cropOfJoyElf"
      },
      "mothertreeElf":
      {
         name: "Mothertree (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "mothertreeElf"
      },
      "templeOfAgesElf":
      {
         name: "Temple of Ages (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "templeOfAgesElf"
      },
      "enarsUnicornElf":
      {
         name: "Enar's Unicorn (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "enarsUnicornElf"
      },
      "goddessOfFertilityElf":
      {
         name: "Goddess of Fertility (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "goddessOfFertilityElf"
      },
      "altarOfTheForefathersElf":
      {
         name: "Altar of the Forefathers (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "altarOfTheForefathersElf"
      },
      "naturesBlessingElf":
      {
         name: "Nature's Blessing (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "naturesBlessingElf"
      },
      "goldenTorchTowerElf":
      {
         name: "Golden Torch Tower (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "goldenTorchTowerElf"
      },
      "gardenOfHarmonyElf":
      {
         name: "Garden of Harmony (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "gardenOfHarmonyElf"
      },
      "harmonyBoardwalkElf":
      {
         name: "Harmony Boardwalk (Elf)",
         categoryKey: BuildingCategory.CULTURE,
         key: "harmonyBoardwalkElf"
      },
      "gloriousStatueHuman":
      {
         name: "Glorious Statue (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "gloriousStatueHuman"
      },
      "blueFlowersHuman":
      {
         name: "Blue Flowers (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "blueFlowersHuman"
      },
      "prisonOfTheCondemnedHuman":
      {
         name: "Prison of the Condemned (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "prisonOfTheCondemnedHuman"
      },
      "holyCodexHuman":
      {
         name: "Holy Codex (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "holyCodexHuman"
      },
      "magicChasmHuman":
      {
         name: "Magic Chasm (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "magicChasmHuman"
      },
      "delicatessenButcherHuman":
      {
         name: "Delicatessen Butcher (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "delicatessenButcherHuman"
      },
      "barbecueAreaHuman":
      {
         name: "Barbecue Area (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "barbecueAreaHuman"
      },
      "hallowedShrineHuman":
      {
         name: "Hallowed Shrine (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "hallowedShrineHuman"
      },
      "goldenGuardsHuman":
      {
         name: "Golden Guards (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "goldenGuardsHuman"
      },
      "redFlowersHuman":
      {
         name: "Red Flowers (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "redFlowersHuman"
      },
      "floatingCitadelHuman":
      {
         name: "Floating Citadel (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "floatingCitadelHuman"
      },
      "monsterFountainHuman":
      {
         name: "Monster Fountain (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "monsterFountainHuman"
      },
      "smallForecourtHuman":
      {
         name: "Small Forecourt (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "smallForecourtHuman"
      },
      "lordOfTheLegendHuman":
      {
         name: "Lord of the Legend (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "lordOfTheLegendHuman"
      },
      "decorativeFlowerPotHuman":
      {
         name: "Decorative Flower Pot (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "decorativeFlowerPotHuman"
      },
      "mageTowerHuman":
      {
         name: "Mage Tower (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "mageTowerHuman"
      },
      "fratricidalWarMemorialHuman":
      {
         name: "Fratricidal War Memorial (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "fratricidalWarMemorialHuman"
      },
      "twinFlowerbedHuman":
      {
         name: "Twin Flowerbed (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "twinFlowerbedHuman"
      },
      "astrolabeHuman":
      {
         name: "Astrolabe (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "astrolabeHuman"
      },
      "battleMonumentHuman":
      {
         name: "Battle Monument (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "battleMonumentHuman"
      },
      "monumentSquareHuman":
      {
         name: "Monument Square (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "monumentSquareHuman"
      },
      "fountainOfYouthHuman":
      {
         name: "Fountain of Youth (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "fountainOfYouthHuman"
      },
      "centralPlaceHuman":
      {
         name: "Central Place (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "centralPlaceHuman"
      },
      "royalGuardHuman":
      {
         name: "Royal Guard (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "royalGuardHuman"
      },
      "dragonsKeepHuman":
      {
         name: "Dragon's Keep (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "dragonsKeepHuman"
      },
      "smallGardenHuman":
      {
         name: "Small Garden (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "smallGardenHuman"
      },
      "battleArenaHuman":
      {
         name: "Battle Arena (Human)",
         categoryKey: BuildingCategory.CULTURE,
         key: "battleArenaHuman"
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
   const type = BuildingType.properties[typeKey];
   type.category = BuildingCategory.properties[type.categoryKey];

   if (typeKey.endsWith("Elf"))
   {
      type.raceKey = Race.ELF;
   }
   else if (typeKey.endsWith("Human"))
   {
      type.raceKey = Race.HUMAN;
   }
});

BuildingType.keysByRaceCategory = function(raceKey, categoryKey)
{
   InputValidator.validateIsString("raceKey", raceKey);
   InputValidator.validateIsString("categoryKey", categoryKey);

   return BuildingType.keys().filter(key =>
   {
      const type = BuildingType.properties[key];
      return ([raceKey, undefined].includes(type.raceKey)) && type.categoryKey === categoryKey;
   });
};

if (Object.freeze)
{
   Object.freeze(BuildingType);
}

export default BuildingType;