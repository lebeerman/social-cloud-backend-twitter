require("dotenv").load();

const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");
const Twitter = require("twitter");
const morgan = require('morgan');
const devMode = process.env.NODE_ENV !== 'production';
const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

app.use(cors());
app.use(bodyParser.json());
app.use(morgan(devMode ? 'dev' : 'combined'));

app.get("/", (request, response) => {
  queries
    .list("personalLocations")
    .then(personalLocations =>
      queries.list("woeid").then(woeid =>
        response.json({
          personalLocations: personalLocations,
          woeid: woeid
        })
      )
    )
    .catch(error => console.log(error));
});

app.get("/tweets", (request, response, next) => {
  let params = { id: 23424977 };
  client.get("trends/place", params, (error, tweets, twitterResponse) => {
    if (error) {
      next(error);
    } else {
      console.log(tweets);
      response.send({ tweets });
    }
  });
});

app.get("/tweets/:id", (request, response, next) => {
  var id = {id: request.params.id};
  client.get("trends/place", id, (error, tweets, twitterResponse) => {
    if (error && error.code === 34) {
      res.status(200).send({ tweets: { trends: [] }, error: error.message });
    } else if (error && error.code === 36) {
      res.status(200).send({ tweets: { trends: [] } });
    } else if (error) {
      next(error);
    } else {
      console.log(tweets);
      response.send({ tweets });
    }
  });
});

app.get("/personalLocations", (request, response) => {
  queries
    .list("personalLocations")
    .then(personalLocations => {
      response.json({ personalLocations });
    })
    .catch(error => console.log(error));
});

app.get("/personalLocations/:id", (request, response) => {
  queries
    .read(request.params.id, "personalLocations")
    .then(personalLocations => {
      personalLocations
        ? response.json({ personalLocations })
        : response.sendStatus(404);
    })
    .catch(console.error);
});

app.get("/woeid", (request, response) => {
  queries
    .list("woeid")
    .then(woeid => {
      response.json({ woeid });
    })
    .catch(error => console.log(error));
});

app.get("/woeid/:id", (request, response) => {
  queries
    .read(request.params.id, "woeid")
    .then(woeid => {
      woeid ? response.json({ woeid }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/personalLocations", (request, response) => {
  queries
    .createLocations(request.body)
    .then(personalLocations => {
      response.status(201).json({ personalLocations: personalLocations });
    })
    .catch(console.error);
});

app.delete("/personalLocations/:id", (request, response) => {
  queries
    .deleteLocations(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.put("/personalLocations/:id", (request, response) => {
  queries
    .updateLocations(request.params.id, request.body)
    .then(personalLocations => {
      response.json({ personalLocations: personalLocations[0] });
    })
    .catch(console.error);
});

// After all custom route s, handle fails & not found paths!
app.use(notFound);
app.use(errorHandler);

function notFound(req, res, next) {
  const url = req.originalUrl;
  if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
    // Don"t log less important auto requests
    console.error("[404: Requested file not found] ", url);
    return res.status(200).send({message: "url path not found"});
  }
  res.status(404).send({error: "Url not found", status: 404, url});
}

function errorHandler(err, req, res, next) {
  console.error("ERROR", err);
  const stack =  devMode ? err.stack : undefined;
  res.status(500).send({
    error: err.message,
    url: req.originalUrl,
    stack,
  });
}

module.exports = app;
