const generateQuestion = () => {

    const questions = [
        "Explain the difference between stack and queue.",
        "What is a linked list?",
        "Explain time complexity.",
        "What is recursion?",
        "What is a binary tree?"
    ];

    const randomIndex = Math.floor(Math.random() * questions.length);

    return questions[randomIndex];

};

module.exports = {
    generateQuestion
};
const evaluateAnswer = (answer) => {

    if(answer.length < 20){
        return {
            score: 3,
            feedback: "Your answer is too short. Try explaining in more detail."
        };
    }

    if(answer.length < 50){
        return {
            score: 6,
            feedback: "Decent answer but you could add more explanation."
        };
    }

    return {
        score: 9,
        feedback: "Good explanation."
    };

};

module.exports = {
    generateQuestion,
    evaluateAnswer
};