import React, { useState } from "react";
import questions from "../data";
import Question from "./question";
import Result from "./result";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentIndex].answer) {
      setScore(score + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div>
      {quizFinished ? (
        <Result score={score} total={questions.length} restartQuiz={restartQuiz} />
      ) : (
        <Question
          question={questions[currentIndex].question}
          options={questions[currentIndex].options}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
