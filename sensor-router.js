const express = require("express");
const router = express.Router();
const Sensor = require("../models/sensor-det-models");
require("dotenv").config();
const nodeailer = require("nodemailer");

// let transporter = nodeailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "anujshashimal456@gmail.com",
//         pass: process.env.PASSWORD,
//     },
// });

router.post("/sensor", (req, res, next) => {
    Sensor.create(req.body)
        .then((sensor) => {
            res.send(sensor);
        })
        .catch(next);
});


router.get("/sensor", (req, res, next) => {

    Sensor.find({}, (err, sensors) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Access-Control-Allow-Headers', '*');

        res.send(sensors);


    }).catch(next);
});

router.get("/sensor/:id", (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', '*');

    Sensor.find({ id: req.params.id }, (err, sensors) => {
        var sensorMap = {};
        sensors.forEach((sensor) => {
            sensorMap[sensor.id] = sensor;
        });
        res.send(sensorMap);
    }).catch(next);
});



module.exports = router;