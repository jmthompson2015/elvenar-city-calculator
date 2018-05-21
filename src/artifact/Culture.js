import BuildingType from "./BuildingType.js";
import Race from "./Race.js";

const Culture = {
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
      "luminousSignpostElf":
      {
         name: "Luminous Signpost (Elf)",
         typeKey: BuildingType.LUMINOUS_SIGNPOST_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 1,
         height: 1,
         culture: 21,
         key: "luminousSignpostElf"
      },
      "purpleBlossomTreesElf":
      {
         name: "Purple Blossom Trees (Elf)",
         typeKey: BuildingType.PURPLE_BLOSSOM_TREES_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 1,
         height: 3,
         culture: 67,
         key: "purpleBlossomTreesElf"
      },
      "shrineOfEnarElf":
      {
         name: "Shrine of Enar (Elf)",
         typeKey: BuildingType.SHRINE_OF_ENAR_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 3,
         culture: 450,
         key: "shrineOfEnarElf"
      },
      "flyingBoatElf":
      {
         name: "Flying Boat (Elf)",
         typeKey: BuildingType.FLYING_BOAT_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 3,
         culture: 250,
         key: "flyingBoatElf"
      },
      "anchorPointElf":
      {
         name: "Anchor Point (Elf)",
         typeKey: BuildingType.ANCHOR_POINT_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 1,
         culture: 170,
         key: "anchorPointElf"
      },
      "spotOfWhisperingTreesElf":
      {
         name: "Spot of Whispering Trees (Elf)",
         typeKey: BuildingType.SPOT_OF_WHISPERING_TREES_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 4,
         height: 3,
         culture: 400,
         key: "spotOfWhisperingTreesElf"
      },
      "flowerCageElf":
      {
         name: "Flower Cage (Elf)",
         typeKey: BuildingType.FLOWER_CAGE_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 1,
         height: 1,
         culture: 62,
         key: "flowerCageElf"
      },
      "wellOfFloatingIslandsElf":
      {
         name: "Well of Floating Islands (Elf)",
         typeKey: BuildingType.WELL_OF_FLOATING_ISLANDS_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 4,
         height: 3,
         culture: 440,
         population: 400,
         key: "wellOfFloatingIslandsElf"
      },
      "ancientRunesElf":
      {
         name: "Ancient Runes (Elf)",
         typeKey: BuildingType.ANCIENT_RUNES_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 2,
         height: 1,
         culture: 60,
         key: "ancientRunesElf"
      },
      "orangeBerriesTreesElf":
      {
         name: "Orange Berries Trees (Elf)",
         typeKey: BuildingType.ORANGE_BERRIES_TREES_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 1,
         culture: 92,
         key: "orangeBerriesTreesElf"
      },
      "protectorOfTheWoodsElf":
      {
         name: "Protector of the Woods (Elf)",
         typeKey: BuildingType.PROTECTOR_OF_THE_WOODS_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 4,
         height: 3,
         culture: 840,
         key: "protectorOfTheWoodsElf"
      },
      "statueOfTheSacredSageElf":
      {
         name: "Statue of the Sacred Sage (Elf)",
         typeKey: BuildingType.STATUE_OF_THE_SACRED_SAGE_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 1,
         height: 2,
         culture: 74,
         key: "statueOfTheSacredSageElf"
      },
      "giftOfTheGardenFairyElf":
      {
         name: "Gift of the Garden Fairy (Elf)",
         typeKey: BuildingType.GIFT_OF_THE_GARDEN_FAIRY_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 1,
         height: 1,
         culture: 36,
         key: "giftOfTheGardenFairyElf"
      },
      "vallorianSeasnakeElf":
      {
         name: "Vallorian Seasnake (Elf)",
         typeKey: BuildingType.VALLORIAN_SEASNAKE_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 4,
         culture: 1000,
         key: "vallorianSeasnakeElf"
      },
      "mysteriousCycloneElf":
      {
         name: "Mysterious Cyclone (Elf)",
         typeKey: BuildingType.MYSTERIOUS_CYCLONE_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 3,
         culture: 440,
         key: "mysteriousCycloneElf"
      },
      "stairwayOfTheWindElf":
      {
         name: "Stairway of the Wind (Elf)",
         typeKey: BuildingType.STAIRWAY_OF_THE_WIND_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 1,
         height: 3,
         culture: 290,
         key: "stairwayOfTheWindElf"
      },
      "splendidStoneOfArtElf":
      {
         name: "Splendid Stone of Art (Elf)",
         typeKey: BuildingType.SPLENDID_STONE_OF_ART_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 1,
         culture: 140,
         key: "splendidStoneOfArtElf"
      },
      "cropOfJoyElf":
      {
         name: "Crop of Joy (Elf)",
         typeKey: BuildingType.CROP_OF_JOY_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 1,
         height: 2,
         culture: 92,
         key: "cropOfJoyElf"
      },
      "mothertreeElf":
      {
         name: "Mothertree (Elf)",
         typeKey: BuildingType.MOTHERTREE_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 2,
         height: 2,
         culture: 400,
         key: "mothertreeElf"
      },
      "templeOfAgesElf":
      {
         name: "Temple of Ages (Elf)",
         typeKey: BuildingType.TEMPLE_OF_AGES_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 5,
         height: 4,
         culture: 1200,
         key: "templeOfAgesElf"
      },
      "enarsUnicornElf":
      {
         name: "Enar's Unicorn (Elf)",
         typeKey: BuildingType.ENARS_UNICORN_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 2,
         height: 1,
         culture: 220,
         key: "enarsUnicornElf"
      },
      "goddessOfFertilityElf":
      {
         name: "Goddess of Fertility (Elf)",
         typeKey: BuildingType.GODDESS_OF_FERTILITY_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 3,
         culture: 550,
         population: 510,
         key: "goddessOfFertilityElf"
      },
      "altarOfTheForefathersElf":
      {
         name: "Altar of the Forefathers (Elf)",
         typeKey: BuildingType.ALTAR_OF_THE_FOREFATHERS_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 1,
         height: 3,
         culture: 160,
         key: "altarOfTheForefathersElf"
      },
      "naturesBlessingElf":
      {
         name: "Nature's Blessing (Elf)",
         typeKey: BuildingType.NATURES_BLESSING_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 2,
         height: 1,
         culture: 100,
         key: "naturesBlessingElf"
      },
      "goldenTorchTowerElf":
      {
         name: "Golden Torch Tower (Elf)",
         typeKey: BuildingType.GOLDEN_TORCH_TOWER_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 3,
         height: 3,
         culture: 1200,
         key: "goldenTorchTowerElf"
      },
      "gardenOfHarmonyElf":
      {
         name: "Garden of Harmony (Elf)",
         typeKey: BuildingType.GARDEN_OF_HARMONY_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 5,
         height: 6,
         culture: 2100,
         key: "gardenOfHarmonyElf"
      },
      "harmonyBoardwalkElf":
      {
         name: "Harmony Boardwalk (Elf)",
         typeKey: BuildingType.HARMONY_BOARDWALK_ELF,
         raceKey: Race.ELF,
         level: 1,
         width: 1,
         height: 2,
         culture: 250,
         key: "harmonyBoardwalkElf"
      },
      "gloriousStatueHuman":
      {
         name: "Glorious Statue (Human)",
         typeKey: BuildingType.GLORIOUS_STATUE_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 1,
         height: 1,
         culture: 21,
         key: "gloriousStatueHuman"
      },
      "blueFlowersHuman":
      {
         name: "Blue Flowers (Human)",
         typeKey: BuildingType.BLUE_FLOWERS_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 1,
         height: 3,
         culture: 67,
         key: "blueFlowersHuman"
      },
      "prisonOfTheCondemnedHuman":
      {
         name: "Prison of the Condemned (Human)",
         typeKey: BuildingType.PRISON_OF_THE_CONDEMNED_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 3,
         height: 3,
         culture: 450,
         key: "prisonOfTheCondemnedHuman"
      },
      "holyCodexHuman":
      {
         name: "Holy Codex (Human)",
         typeKey: BuildingType.HOLY_CODEX_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 2,
         height: 2,
         culture: 110,
         key: "holyCodexHuman"
      },
      "magicChasmHuman":
      {
         name: "Magic Chasm (Human)",
         typeKey: BuildingType.MAGIC_CHASM_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 2,
         height: 1,
         culture: 110,
         key: "magicChasmHuman"
      },
      "delicatessenButcherHuman":
      {
         name: "Delicatessen Butcher (Human)",
         typeKey: BuildingType.DELICATESSEN_BUTCHER_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 3,
         height: 4,
         culture: 430,
         key: "delicatessenButcherHuman"
      },
      "barbecueAreaHuman":
      {
         name: "Barbecue Area (Human)",
         typeKey: BuildingType.BARBECUE_AREA_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 1,
         height: 2,
         culture: 140,
         key: "barbecueAreaHuman"
      },
      "hallowedShrineHuman":
      {
         name: "Hallowed Shrine (Human)",
         typeKey: BuildingType.HALLOWED_SHRINE_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 3,
         height: 3,
         culture: 340,
         population: 320,
         key: "hallowedShrineHuman"
      },
      "goldenGuardsHuman":
      {
         name: "Golden Guards (Human)",
         typeKey: BuildingType.GOLDEN_GUARDS_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 2,
         height: 1,
         culture: 65,
         key: "goldenGuardsHuman"
      },
      "redFlowersHuman":
      {
         name: "Red Flowers (Human)",
         typeKey: BuildingType.RED_FLOWERS_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 3,
         height: 1,
         culture: 99,
         key: "redFlowersHuman"
      },
      "floatingCitadelHuman":
      {
         name: "Floating Citadel (Human)",
         typeKey: BuildingType.FLOATING_CITADEL_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 4,
         height: 3,
         culture: 900,
         key: "floatingCitadelHuman"
      },
      "monsterFountainHuman":
      {
         name: "Monster Fountain (Human)",
         typeKey: BuildingType.MONSTER_FOUNTAIN_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 3,
         height: 3,
         culture: 410,
         key: "monsterFountainHuman"
      },
      "smallForecourtHuman":
      {
         name: "Small Forecourt (Human)",
         typeKey: BuildingType.SMALL_FORECOURT_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 3,
         height: 1,
         culture: 270,
         key: "smallForecourtHuman"
      },
      "lordOfTheLegendHuman":
      {
         name: "Lord of the Legend (Human)",
         typeKey: BuildingType.LORD_OF_THE_LEGEND_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 1,
         height: 2,
         culture: 85,
         key: "lordOfTheLegendHuman"
      },
      "decorativeFlowerPotHuman":
      {
         name: "Decorative Flower Pot (Human)",
         typeKey: BuildingType.DECORATIVE_FLOWER_POT_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 1,
         height: 1,
         culture: 42,
         key: "decorativeFlowerPotHuman"
      },
      "mageTowerHuman":
      {
         name: "Mage Tower (Human)",
         typeKey: BuildingType.MAGE_TOWER_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 3,
         height: 2,
         culture: 570,
         key: "mageTowerHuman"
      },
      "fratricidalWarMemorialHuman":
      {
         name: "Fratricidal War Memorial (Human)",
         typeKey: BuildingType.FRATRICIDAL_WAR_MEMORIAL_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 3,
         height: 1,
         culture: 150,
         key: "fratricidalWarMemorialHuman"
      },
      "twinFlowerbedHuman":
      {
         name: "Twin Flowerbed (Human)",
         typeKey: BuildingType.TWIN_FLOWERBED_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 1,
         height: 2,
         culture: 98,
         key: "twinFlowerbedHuman"
      },
      "astrolabeHuman":
      {
         name: "Astrolabe (Human)",
         typeKey: BuildingType.ASTROLABE_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 3,
         height: 3,
         culture: 1000,
         key: "astrolabeHuman"
      },
      "battleMonumentHuman":
      {
         name: "Battle Monument (Human)",
         typeKey: BuildingType.BATTLE_MONUMENT_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 4,
         height: 3,
         culture: 690,
         key: "battleMonumentHuman"
      },
      "monumentSquareHuman":
      {
         name: "Monument Square (Human)",
         typeKey: BuildingType.MONUMENT_SQUARE_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 1,
         height: 3,
         culture: 330,
         key: "monumentSquareHuman"
      },
      "fountainOfYouthHuman":
      {
         name: "Fountain of Youth (Human)",
         typeKey: BuildingType.FOUNTAIN_OF_YOUTH_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 4,
         height: 3,
         culture: 750,
         population: 700,
         key: "fountainOfYouthHuman"
      },
      "centralPlaceHuman":
      {
         name: "Central Place (Human)",
         typeKey: BuildingType.CENTRAL_PLACE_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 4,
         height: 5,
         culture: 1400,
         key: "centralPlaceHuman"
      },
      "royalGuardHuman":
      {
         name: "Royal Guard (Human)",
         typeKey: BuildingType.ROYAL_GUARD_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 1,
         height: 1,
         culture: 120,
         key: "royalGuardHuman"
      },
      "dragonsKeepHuman":
      {
         name: "Dragon's Keep (Human)",
         typeKey: BuildingType.DRAGONS_KEEP_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 1,
         height: 3,
         culture: 182,
         key: "dragonsKeepHuman"
      },
      "smallGardenHuman":
      {
         name: "Small Garden (Human)",
         typeKey: BuildingType.SMALL_GARDEN_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 2,
         height: 1,
         culture: 120,
         key: "smallGardenHuman"
      },
      "battleArenaHuman":
      {
         name: "Battle Arena (Human)",
         typeKey: BuildingType.BATTLE_ARENA_HUMAN,
         raceKey: Race.HUMAN,
         level: 1,
         width: 4,
         height: 3,
         culture: 1700,
         key: "battleArenaHuman"
      },
   },
};

Culture.keys = function()
{
   return Object.keys(Culture.properties);
};

Culture.values = function()
{
   return Object.values(Culture.properties);
};

Culture.keys().forEach(function(buildingKey)
{
   const building = Culture.properties[buildingKey];
   building.race = Race.properties[building.raceKey];
   building.type = BuildingType.properties[building.typeKey];
});

if (Object.freeze)
{
   Object.freeze(Culture);
}

export default Culture;