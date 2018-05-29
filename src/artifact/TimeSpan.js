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

if (Object.freeze)
{
   Object.freeze(TimeSpan);
}

export default TimeSpan;