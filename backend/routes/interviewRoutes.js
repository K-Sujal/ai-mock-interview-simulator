const express = require("express");

const router = express.Router();

const { startInterview, submitAnswer } = require("../controllers/interviewController");

router.get("/start", startInterview);

router.post("/submit", submitAnswer);

module.exports = router;