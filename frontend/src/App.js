import React, { useState } from "react";

function App() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState("");
  const [feedback, setFeedback] = useState("");

  const startInterview = async () => {

    const response = await fetch("http://localhost:5000/interview/start");
    const data = await response.json();

    setQuestion(data.question);
    setScore("");
    setFeedback("");
    setAnswer("");

  };

  const submitAnswer = async () => {

    const response = await fetch("http://localhost:5000/interview/submit", {

      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        answer: answer
      })

    });

    const data = await response.json();

    setScore(data.score);
    setFeedback(data.feedback);

  };

  return (

    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>AI Mock Interview</h1>

      <button onClick={startInterview}>
        Start Interview
      </button>

      <h2>{question}</h2>

      <textarea
        rows="5"
        cols="50"
        placeholder="Type your answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <br/><br/>

      <button onClick={submitAnswer}>
        Submit Answer
      </button>

      <h3>Score: {score}</h3>

      <p>{feedback}</p>

    </div>

  );

}

export default App;