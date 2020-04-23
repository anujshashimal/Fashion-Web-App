const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const index = express();

index.use(bodyParser.urlencoded({ extended: true }));
index.use(bodyParser.json());

index.use("/api", require("./router/sensor-routes"));

index.use(function (err, req, res, next) {
    console.log(err);
    res.status(422).send({ error: err.message });
});


mongoose.connect(
    "mongodb://localhost:27017/restDB?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false"
)
    .then(() => {
        index.listen(5000);
    })
    .catch((error) => {
        console.log(error);
    });
