const express = require( "express")
const router = express.Router();
const sendMessageToKafka = require("../controllers/kafkaPublisher.controller");

router.post('/', sendMessageToKafka);

module.exports = router;