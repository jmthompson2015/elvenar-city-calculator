const TimeSpan = {
   FIVE_MINUTES: "fiveMinutes",
   FIFTEEN_MINUTES: "fifteenMinutes",
   ONE_HOUR: "oneHour",
   THREE_HOURS: "threeHours",
   NINE_HOURS: "nineHours",
   ONE_DAY: "oneDay",
   TWO_DAYS: "twoDays",

   properties:
   {
      "fiveMinutes":
      {
         name: "5 minutes",
         minutes: 5,
         key: "fiveMinutes"
      },
      "fifteenMinutes":
      {
         name: "15 minutes",
         minutes: 15,
         key: "fifteenMinutes"
      },
      "oneHour":
      {
         name: "1 hour",
         minutes: 60,
         key: "oneHour"
      },
      "threeHours":
      {
         name: "3 hours",
         minutes: 3 * 60,
         key: "threeHours"
      },
      "nineHours":
      {
         name: "9 hours",
         minutes: 9 * 60,
         key: "nineHours"
      },
      "oneDay":
      {
         name: "1 day",
         minutes: 24 * 60,
         key: "oneDay"
      },
      "twoDays":
      {
         name: "2 days",
         minutes: 2 * 24 * 60,
         key: "twoDays"
      },
   },
};

TimeSpan.keys = function()
{
   return Object.keys(TimeSpan.properties);
};

TimeSpan.values = function()
{
   return Object.values(TimeSpan.properties);
};

TimeSpan.determineTimeSpan = function(map, timeSpanKey)
{
   let answerKey;

   if (map !== undefined)
   {
      answerKey = (map[timeSpanKey] !== undefined ? timeSpanKey : undefined);

      if (answerKey === undefined)
      {
         const keys = Object.keys(map).sort((a, b) =>
         {
            return TimeSpan.properties[a].minutes - TimeSpan.properties[b].minutes;
         });
         let minutes = TimeSpan.properties[timeSpanKey].minutes;
         let low = Number.NEGATIVE_INFINITY;
         let high;

         for (let i = 0; i <= keys.length && answerKey === undefined; i++)
         {
            if (i < keys.length)
            {
               high = TimeSpan.properties[keys[i]].minutes;
               answerKey = (low <= minutes && minutes < high ? keys[i] : undefined);
               low = high;
            }
            else
            {
               answerKey = keys[keys.length - 1];
            }
         }
      }
   }

   return TimeSpan.properties[answerKey];
};

if (Object.freeze)
{
   Object.freeze(TimeSpan);
}

export default TimeSpan;