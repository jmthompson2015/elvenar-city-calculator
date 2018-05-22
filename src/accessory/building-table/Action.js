import InputValidator from "../../utility/InputValidator.js";

const Action = {};

Action.SET_CATEGORY = "setCategory";
Action.SET_RACE = "setRace";
Action.SET_TYPE = "setType";

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