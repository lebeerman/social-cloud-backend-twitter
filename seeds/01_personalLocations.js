exports.seed = function(knex, Promise) {
  return knex("personalLocations")
    .del()
    .then(function() {
      return knex("personalLocations").insert([
        {
          WOE_ID: 766273,
          ISO: "ES",
          Name: "Madrid",
          Language: "SPA",
          PlaceType: "Town",
          Parent_ID: 12688024
        },
        {
          WOE_ID: 23424950,
          ISO: "ES",
          Name: "Spain",
          Language: "SPA",
          PlaceType: "Country",
          Parent_ID: 1
        },
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
          WOE_ID: 2379574,
          ISO: "US",
          Name: "Chicago",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12588093
        },
        {
          WOE_ID: 2379574,
          ISO: "US",
          Name: "Chicago",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12588093
        }
      ]);
    });
};
