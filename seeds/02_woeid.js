exports.seed = function(knex, Promise) {
  return knex("woeid")
    .del()
    .then(function() {
      return knex("woeid").insert([
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
          Name: "Italy",
          Language: "ITA",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 23424856,
          ISO: "JP",
          Name: "Japan",
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
          Name: "Korea",
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
        },
        {
          WOE_ID: 23424738,
          ISO: "AE",
          Name: "United Arab Emirates",
          Language: "ARA",
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
          WOE_ID: 2383489,
          ISO: "US",
          Name: "Colorado Springs",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12587747
        },
        {
          WOE_ID: 2352824,
          ISO: "US",
          Name: "Albuquerque",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12589279
        },
        {
          WOE_ID: 2487610,
          ISO: "US",
          Name: "Salt Lake City",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12590278
        },
        {
          WOE_ID: 2388929,
          ISO: "US",
          Name: "Dallas",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12590063
        },
        {
          WOE_ID: 2486982,
          ISO: "US",
          Name: "St. Louis",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12589067
        },
        {
          WOE_ID: 2381475,
          ISO: "US",
          Name: "Cleveland",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: 12589544
        },
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
