import InputValidator from "../utility/InputValidator.js";

import Building from "../artifact/Building.js";

class Construct
{
   constructor(id, categoryKey, raceKey, typeKey, level, count)
   {
      InputValidator.validateIsNumber("id", id);
      InputValidator.validateIsString("categoryKey", categoryKey);
      InputValidator.validateIsString("raceKey", raceKey);
      InputValidator.validateIsString("typeKey", typeKey);
      InputValidator.validateIsNumber("level", level);
      InputValidator.validateIsNumber("count", count);

      this._id = id;
      this._categoryKey = categoryKey;
      this._typeKey = typeKey;
      this._raceKey = raceKey;
      this._level = level;
      this._count = count;
      this._building = Building.find(raceKey, typeKey, level);
   }

   get id()
   {
      return this._id;
   }

   get categoryKey()
   {
      return this._categoryKey;
   }

   get raceKey()
   {
      return this._raceKey;
   }

   get typeKey()
   {
      return this._typeKey;
   }

   get level()
   {
      return this._level;
   }

   get count()
   {
      return this._count;
   }

   get building()
   {
      return this._building;
   }

   toPlainObject()
   {
      return (
      {
         id: this.id,
         categoryKey: this.categoryKey,
         raceKey: this.raceKey,
         typeKey: this.typeKey,
         level: this.level,
         count: this.count,
      });
   }
}

Construct.fromPlainObject = function(instance)
{
   InputValidator.validateNotNull("instance", instance);

   return new Construct(instance.id, instance.categoryKey, instance.raceKey, instance.typeKey, instance.level, instance.count);
};

export default Construct;