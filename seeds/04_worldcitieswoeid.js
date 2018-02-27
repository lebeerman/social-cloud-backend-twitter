exports.seed = function(knex, Promise) {
  return knex("worldcitieswoeid")
    .del()
    .then(function() {
      return knex("worldcitieswoeid").insert([
        {
          WOE_ID: 1225448,
          ISO: "TH",
          Name: "Bangkok",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 2347165
        },
        {
          WOE_ID: 44418,
          ISO: "GB",
          Name: "London",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 23416974
        },
        {
          WOE_ID: 615702,
          ISO: "FR",
          Name: "Paris",
          Language: "FRE",
          PlaceType: "Town",
          Parent_ID: 12597155
        },
        {
          WOE_ID: 1062617,
          ISO: "SG",
          Name: "Singapore",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 24703044
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
          WOE_ID: 2344116,
          ISO: "TR",
          Name: "Istanbul",
          Language: "UNK",
          PlaceType: "Town",
          Parent_ID: 29390475
        },
        {
          WOE_ID: 1940345,
          ISO: "AE",
          Name: "Dubai",
          Language: "ARA",
          PlaceType: "Town",
          Parent_ID: 55922623
        },
        {
          WOE_ID: 766273,
          ISO: "ES",
          Name: "Madrid",
          Language: "SPA",
          PlaceType: "Town",
          Parent_ID: 12688024
        },
        {
          WOE_ID: 753692,
          ISO: "ES",
          Name: "Barcelona",
          Language: "SPA",
          PlaceType: "Town",
          Parent_ID: 12693396
        },
        {
          WOE_ID: 676757,
          ISO: "DE",
          Name: "Munich",
          Language: "GER",
          PlaceType: "Town",
          Parent_ID: 20071093
        },
        {
          WOE_ID: 862592,
          ISO: "NO",
          Name: "Oslo",
          Language: "NOR",
          PlaceType: "Town",
          Parent_ID: 2346395
        },
        {
          WOE_ID: 2295411,
          ISO: "IN",
          Name: "Mumbai",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 2345750
        },
        {
          WOE_ID: 2122265,
          ISO: "RU",
          Name: "Moscow",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12598709
        },
        {
          WOE_ID: 4118,
          ISO: "CA",
          Name: "Toronto",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 29375205
        },
        {
          WOE_ID: 2348079,
          ISO: "NZ",
          Name: "Auckland",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 15021756
        },
        {
          WOE_ID: 906057,
          ISO: "SE",
          Name: "Stockholm",
          Language: "SWE",
          PlaceType: "Town",
          Parent_ID: 12587478
        },
        {
          WOE_ID: 638242,
          ISO: "DE",
          Name: "Berlin",
          Language: "GER",
          PlaceType: "Town",
          Parent_ID: 12596838
        },
        {
          WOE_ID: 727232,
          ISO: "NL",
          Name: "Amsterdam",
          Language: "DUT",
          PlaceType: "Town",
          Parent_ID: 12592040
        },
        {
          WOE_ID: 19344,
          ISO: "GB",
          Name: "Edinburgh",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12696195
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
          WOE_ID: 455825,
          ISO: "BR",
          Name: "Rio de Janeiro",
          Language: "POR",
          PlaceType: "Town",
          Parent_ID: 12581062
        },
        {
          WOE_ID: 468739,
          ISO: "AR",
          Name: "Buenos Aires",
          Language: "SPA",
          PlaceType: "Town",
          Parent_ID: 20070753
        },
        {
          WOE_ID: 721943,
          ISO: "IT",
          Name: "Rome",
          Language: "ITA",
          PlaceType: "Town",
          Parent_ID: 12675698
        },
        {
          WOE_ID: 1105779,
          ISO: "AU",
          Name: "Sydney",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 2344700
        },
        {
          WOE_ID: 1118370,
          ISO: "JP",
          Name: "Tokyo",
          Language: "JPN",
          PlaceType: "Town",
          Parent_ID: 2345889
        },
        {
          WOE_ID: 9807,
          ISO: "CA",
          Name: "Vancouver",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 29375222
        },
        {
          WOE_ID: 1591691,
          ISO: "ZA",
          Name: "Cape Town",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 56189700
        }
      ]);
    });
};
