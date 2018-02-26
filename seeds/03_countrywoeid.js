exports.seed = function(knex, Promise) {
  return knex("countrywoeid")
    .del()
    .then(function() {
      return knex("countrywoeid").insert([
        {
          WOE_ID: 23424829,
          ISO: "DE",
          Name: "Germany",
          Language: "GER",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424975,
          ISO: "GB",
          Name: "United Kingdom",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424748,
          ISO: "AU",
          Name: "Australia",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424853,
          ISO: "IT",
          Name: "Italia",
          Language: "ITA",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424856,
          ISO: "JP",
          Name: "%u65E5%u672C-Japan",
          Language: "JPN",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424982,
          ISO: "VE",
          Name: "Venezuela",
          Language: "SPA",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424942,
          ISO: "ZA",
          Name: "South Africa",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424916,
          ISO: "NZ",
          Name: "New Zealand",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424957,
          ISO: "CH",
          Name: "Switzerland",
          Language: "GER",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424911,
          ISO: "NP",
          Name: "Nepal",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424976,
          ISO: "UA",
          Name: "Ukraine",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424868,
          ISO: "KR",
          Name: "%uD55C%uAD6D-Korea",
          Language: "KOR",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424900,
          ISO: "MX",
          Name: "Mexico",
          Language: "SPA",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424936,
          ISO: "RU",
          Name: "Russia",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424775,
          ISO: "CA",
          Name: "Canada",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424954,
          ISO: "SE",
          Name: "Sweden",
          Language: "SWE",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424819,
          ISO: "FR",
          Name: "France",
          Language: "FRE",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424910,
          ISO: "NO",
          Name: "Norway",
          Language: "NOR",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424948,
          ISO: "SG",
          Name: "Singapore",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
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
          WOE_ID: 23424781,
          ISO: "CN",
          Name: "%u4E2D%u570B-China",
          Language: "CHI",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424738,
          ISO: "AE",
          Name: "UAE-%u0627%u0644%u0627%u0645%u0627%u0631%u0627%u062A",
          Language: "ARA",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424848,
          ISO: "IN",
          Name: "India",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424852,
          ISO: "IL",
          Name: "Israel",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        }
      ]);
    });
};
