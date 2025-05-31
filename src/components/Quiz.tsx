import React, { useState } from "react";

const Quiz: React.FC = () => {
  const initialAnswers = [null, null, null];
  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questioBank = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which language is used for web apps?",
      options: ["PHP", "Python", "Javascript", "All"],
      answer: "All",
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax eXtension",
        "Just a Simple eXample",
        "None of the above",
      ],
      answer: "JavaScript XML",
    },
  ];

  function handleSelectionOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;

    setUserAnswers(newUserAnswers);
  }

  function goToNext() {
    if (currentQuestion < 2) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }
  function goToPrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }
  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p className="question">{questioBank[currentQuestion].question}</p>
      {questioBank[currentQuestion].options.map((option) => (
        <button
          className="option"
          onClick={() => handleSelectionOption(option)}
        >
          {option}
        </button>
      ))}
      <div className="nav-buttons">
        <button onClick={goToPrev} disabled={currentQuestion === 0}>
          {" "}
          Previous{" "}
        </button>
        <button onClick={goToNext} disabled={currentQuestion === 2}>
          {" "}
          Next{" "}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
