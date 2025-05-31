import React from "react";

const Quiz: React.FC = () => {
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
    console.log(option);
  }
  return (
    <div>
      <h2>Question 1</h2>
      <p className="question">{questioBank[0].question}</p>
      {questioBank[0].options.map((option) => (
        <button
          className="option"
          onClick={() => handleSelectionOption(option)}
        >
          {option}
        </button>
      ))}
      <div className="nav-buttons">
        <button> Previous </button>
        <button> Next </button>
      </div>
    </div>
  );
};

export default Quiz;
