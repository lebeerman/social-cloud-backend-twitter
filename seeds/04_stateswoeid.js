exports.seed = function(knex, Promise) {
  return knex("stateswoeid")
    .del()
    .then(function() {
      return knex("stateswoeid").insert([
        {
          WOE_ID: 2347559,
          ISO: "US",
          Name: "Alabama",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347560,
          ISO: "US",
          Name: "Alaska",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347561,
          ISO: "US",
          Name: "Arizona",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347563,
          ISO: "US",
          Name: "California",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347564,
          ISO: "US",
          Name: "Colorado",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347565,
          ISO: "US",
          Name: "Connecticut",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347566,
          ISO: "US",
          Name: "Delaware",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347567,
          ISO: "US",
          Name: "District of Columbia",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347568,
          ISO: "US",
          Name: "Florida",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347569,
          ISO: "US",
          Name: "Georgia",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347570,
          ISO: "US",
          Name: "Hawaii",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347571,
          ISO: "US",
          Name: "Idaho",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347572,
          ISO: "US",
          Name: "Illinois",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347573,
          ISO: "US",
          Name: "Indiana",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347574,
          ISO: "US",
          Name: "Iowa",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347575,
          ISO: "US",
          Name: "Kansas",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347576,
          ISO: "US",
          Name: "Kentucky",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347578,
          ISO: "US",
          Name: "Maine",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347579,
          ISO: "US",
          Name: "Maryland",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347580,
          ISO: "US",
          Name: "Massachusetts",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347581,
          ISO: "US",
          Name: "Michigan",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347582,
          ISO: "US",
          Name: "Minnesota",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347583,
          ISO: "US",
          Name: "Mississippi",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347584,
          ISO: "US",
          Name: "Missouri",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347585,
          ISO: "US",
          Name: "Montana",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347586,
          ISO: "US",
          Name: "Nebraska",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347587,
          ISO: "US",
          Name: "Nevada",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347588,
          ISO: "US",
          Name: "New Hampshire",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347589,
          ISO: "US",
          Name: "New Jersey",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347590,
          ISO: "US",
          Name: "New Mexico",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347591,
          ISO: "US",
          Name: "New York",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347593,
          ISO: "US",
          Name: "North Dakota",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347594,
          ISO: "US",
          Name: "Ohio",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347596,
          ISO: "US",
          Name: "Oregon",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347597,
          ISO: "US",
          Name: "Pennsylvania",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347598,
          ISO: "US",
          Name: "Rhode Island",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347599,
          ISO: "US",
          Name: "South Carolina",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347600,
          ISO: "US",
          Name: "South Dakota",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347601,
          ISO: "US",
          Name: "Tennessee",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347602,
          ISO: "US",
          Name: "Texas",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347603,
          ISO: "US",
          Name: "Utah",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347604,
          ISO: "US",
          Name: "Vermont",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347605,
          ISO: "US",
          Name: "Virginia",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347606,
          ISO: "US",
          Name: "Washington",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347607,
          ISO: "US",
          Name: "West Virginia",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347608,
          ISO: "US",
          Name: "Wisconsin",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347609,
          ISO: "US",
          Name: "Wyoming",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347562,
          ISO: "US",
          Name: "Arkansas",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347595,
          ISO: "US",
          Name: "Oklahoma",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347592,
          ISO: "US",
          Name: "North Carolina",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        },
        {
          WOE_ID: 2347577,
          ISO: "US",
          Name: "Louisiana",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: 23424977
        }
      ]);
    });
};
