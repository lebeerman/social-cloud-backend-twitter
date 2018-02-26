exports.seed = function(knex, Promise) {
  return knex("citieswoeid")
    .del()
    .then(function() {
      return knex("citieswoeid").insert([
        {
          WOE_ID: 2391279,
          ISO: "US",
          Name: "Denver",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587743
        },
        {
          WOE_ID: 2471390,
          ISO: "US",
          Name: "Phoenix",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587587
        },
        {
          WOE_ID: 2459115,
          ISO: "US",
          Name: "New York",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 2347591
        },
        {
          WOE_ID: 2442047,
          ISO: "US",
          Name: "Los Angeles",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12590145
        },
        {
          WOE_ID: 2379574,
          ISO: "US",
          Name: "Chicago",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12588093
        },
        {
          WOE_ID: 2424766,
          ISO: "US",
          Name: "Houston",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12590107
        },
        {
          WOE_ID: 2471217,
          ISO: "US",
          Name: "Philadelphia",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12589778
        },
        {
          WOE_ID: 2357536,
          ISO: "US",
          Name: "Austin",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12590233
        },
        {
          WOE_ID: 2487956,
          ISO: "US",
          Name: "San Francisco",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587707
        },
        {
          WOE_ID: 2378426,
          ISO: "US",
          Name: "Charlotte",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12589433
        },
        {
          WOE_ID: 2391585,
          ISO: "US",
          Name: "Detroit",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12588795
        },
        {
          WOE_ID: 2490383,
          ISO: "US",
          Name: "Seattle",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12590456
        },
        {
          WOE_ID: 2514815,
          ISO: "US",
          Name: "Washington DC",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587802
        },
        {
          WOE_ID: 2367105,
          ISO: "US",
          Name: "Boston",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12588712
        },
        {
          WOE_ID: 2457170,
          ISO: "US",
          Name: "Nashville",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12589930
        },
        {
          WOE_ID: 2358820,
          ISO: "US",
          Name: "Baltimore",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12588679
        },
        {
          WOE_ID: 2475687,
          ISO: "US",
          Name: "Portland",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12589717
        },
        {
          WOE_ID: 2436704,
          ISO: "US",
          Name: "Las Vegas",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12589233
        },
        {
          WOE_ID: 2357024,
          ISO: "US",
          Name: "Atlanta",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587929
        },
        {
          WOE_ID: 2478307,
          ISO: "US",
          Name: "Raleigh",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12589465
        },
        {
          WOE_ID: 2450022,
          ISO: "US",
          Name: "Miami",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587815
        },
        {
          WOE_ID: 2452078,
          ISO: "US",
          Name: "Minneapolis",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12588823
        },
        {
          WOE_ID: 2458833,
          ISO: "US",
          Name: "New Orleans",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12588631
        },
        {
          WOE_ID: 2405641,
          ISO: "US",
          Name: "Fort Collins",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587762
        },
        {
          WOE_ID: 2367231,
          ISO: "US",
          Name: "Boulder",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587734
        },
        {
          WOE_ID: 2383489,
          ISO: "US",
          Name: "Colorado Springs",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587747
        }
      ]);
    });
};
