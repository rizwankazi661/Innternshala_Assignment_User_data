const axios = require("axios");
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  var axios = require("axios");
  var data = JSON.stringify({
    collection: "User_collection",
    database: "UserDB",
    dataSource: "Cluster0",
  });

  var config = {
    method: "post",
    url: "https://data.mongodb-api.com/app/data-loghs/endpoint/data/v1/action/find",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key":
        "caGm8qbucsk5VueTnfB8mNQU1bsZ7XasuxSGbgzxUe4FoZ1Vg6zs9uHSsnLKcwtI",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      let data_1 = response.data.documents;
      res.render(__dirname + "/main.ejs", {
        user_data: data_1,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(3000, () => {
  console.log("Server address- http://localhost:3000/");
});
