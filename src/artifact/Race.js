const Race = {
   ELF: "elf",
   HUMAN: "human",

   properties:
   {
      "elf":
      {
         name: "Elf",
         key: "elf",
      },
      "human":
      {
         name: "Human",
         key: "human",
      },
   },
};

Race.keys = function()
{
   return Object.keys(Race.properties);
};

Race.values = function()
{
   return Object.values(Race.properties);
};

if (Object.freeze)
{
   Object.freeze(Race);
}

export default Race;