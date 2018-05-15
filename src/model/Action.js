import InputValidator from "../utility/InputValidator.js";

const Action = {};

Action.ADD_ROW = "addRow";
Action.RESET = "reset";
Action.SET_CATEGORY = "setCategory";
Action.SET_CONSTRUCT = "setConstruct";
Action.SET_COUNT = "setCount";
Action.SET_LEVEL = "setLevel";
Action.SET_RACE = "setRace";
Action.SET_TYPE = "setType";

Action.addRow = function()
{
   return (
   {
      type: Action.ADD_ROW,
   });
};

Action.reset = function()
{
   return (
   {
      type: Action.RESET,
   });
};

Action.setCategory = function(id, categoryKey)
{
   InputValidator.validateIsNumber("id", id);
   InputValidator.validateIsString("categoryKey", categoryKey);

   return (
   {
      type: Action.SET_CATEGORY,
      id: id,
      categoryKey: categoryKey,
   });
};

Action.setConstruct = function(construct)
{
   InputValidator.validateNotNull("construct", construct);

   return (
   {
      type: Action.SET_CONSTRUCT,
      construct: construct,
   });
};

Action.setCount = function(id, count)
{
   InputValidator.validateIsNumber("id", id);
   InputValidator.validateIsNumber("count", count);

   return (
   {
      type: Action.SET_COUNT,
      id: id,
      count: count,
   });
};

Action.setLevel = function(id, level)
{
   InputValidator.validateIsNumber("id", id);
   InputValidator.validateIsNumber("level", level);

   return (
   {
      type: Action.SET_LEVEL,
      id: id,
      level: level,
   });
};

Action.setRace = function(raceKey)
{
   InputValidator.validateIsString("raceKey", raceKey);

   return (
   {
      type: Action.SET_RACE,
      raceKey: raceKey,
   });
};

Action.setType = function(id, typeKey)
{
   InputValidator.validateIsNumber("id", id);
   InputValidator.validateIsString("typeKey", typeKey);

   return (
   {
      type: Action.SET_TYPE,
      id: id,
      typeKey: typeKey,
   });
};

if (Object.freeze)
{
   Object.freeze(Action);
}

export default Action;