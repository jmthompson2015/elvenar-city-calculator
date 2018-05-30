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

QUnit.test("determineTimeSpan() empty map", function(assert)
{
   // Setup.
   const map = {};

   // Run.

   // Verify.
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.FIVE_MINUTES), undefined);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.FIFTEEN_MINUTES), undefined);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.ONE_HOUR), undefined);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.THREE_HOURS), undefined);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.NINE_HOURS), undefined);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.ONE_DAY), undefined);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.TWO_DAYS), undefined);
});

QUnit.test("determineTimeSpan() undefined map", function(assert)
{
   // Setup.
   let map;

   // Run.

   // Verify.
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.FIVE_MINUTES), undefined);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.FIFTEEN_MINUTES), undefined);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.ONE_HOUR), undefined);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.THREE_HOURS), undefined);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.NINE_HOURS), undefined);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.ONE_DAY), undefined);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.TWO_DAYS), undefined);
});

QUnit.test("determineTimeSpan() manufactory", function(assert)
{
   // Setup.
   const map = {};
   map[TimeSpan.THREE_HOURS] = 1;
   map[TimeSpan.NINE_HOURS] = 2;
   map[TimeSpan.ONE_DAY] = 3;
   map[TimeSpan.TWO_DAYS] = 4;

   // Run.

   // Verify.
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.FIVE_MINUTES).key, TimeSpan.THREE_HOURS);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.FIFTEEN_MINUTES).key, TimeSpan.THREE_HOURS);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.ONE_HOUR).key, TimeSpan.THREE_HOURS);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.THREE_HOURS).key, TimeSpan.THREE_HOURS);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.NINE_HOURS).key, TimeSpan.NINE_HOURS);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.ONE_DAY).key, TimeSpan.ONE_DAY);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.TWO_DAYS).key, TimeSpan.TWO_DAYS);
});

QUnit.test("determineTimeSpan() workshop", function(assert)
{
   // Setup.
   const map = {};
   map[TimeSpan.FIVE_MINUTES] = 1;
   map[TimeSpan.FIFTEEN_MINUTES] = 2;
   map[TimeSpan.ONE_HOUR] = 3;
   map[TimeSpan.THREE_HOURS] = 4;
   map[TimeSpan.NINE_HOURS] = 5;
   map[TimeSpan.ONE_DAY] = 6;

   // Run.

   // Verify.
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.FIVE_MINUTES).key, TimeSpan.FIVE_MINUTES);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.FIFTEEN_MINUTES).key, TimeSpan.FIFTEEN_MINUTES);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.ONE_HOUR).key, TimeSpan.ONE_HOUR);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.THREE_HOURS).key, TimeSpan.THREE_HOURS);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.NINE_HOURS).key, TimeSpan.NINE_HOURS);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.ONE_DAY).key, TimeSpan.ONE_DAY);
   assert.equal(TimeSpan.determineTimeSpan(map, TimeSpan.TWO_DAYS).key, TimeSpan.ONE_DAY);
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
      1 - // values
      1; // determineTimeSpan
   assert.equal(result.length, count);
});

const TimeSpanTest = {};
export default TimeSpanTest;