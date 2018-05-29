import TimeSpan from "./TimeSpan.js";

QUnit.module("TimeSpan");

QUnit.test("TimeSpan properties 5 minutes", function(assert)
{
   const timeSpanKey = TimeSpan.FIVE_MINUTES;
   const timeSpan = TimeSpan.properties[timeSpanKey];
   assert.equal(timeSpan.name, "5 minutes");
   assert.equal(timeSpan.minutes, 5);
   assert.equal(timeSpan.key, timeSpanKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = TimeSpan.keys();
   const ownPropertyNames = Object.getOwnPropertyNames(TimeSpan);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = TimeSpan[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(TimeSpan.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return TimeSpan[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("keys()", function(assert)
{
   // Run.
   const result = TimeSpan.keys();

   // Verify.
   assert.ok(result);
   const length = 7;
   assert.equal(result.length, length);
   assert.equal(result[0], TimeSpan.FIVE_MINUTES);
   assert.equal(result[length - 1], TimeSpan.TWO_DAYS);

   const properties = Object.getOwnPropertyNames(TimeSpan);
   const count = properties.length - 1 - // properties
      1 - // keys
      1; // values
   assert.equal(result.length, count);
});

const TimeSpanTest = {};
export default TimeSpanTest;