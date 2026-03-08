const { generateQuestion, evaluateAnswer } = require("../services/aiService");

const startInterview = (req, res) => {

    const question = generateQuestion();

    res.json({
        question: question
    });

};

const submitAnswer = (req, res) => {

    const { answer } = req.body;

    const result = evaluateAnswer(answer);

    res.json(result);

};

module.exports = {
    startInterview,
    submitAnswer
};