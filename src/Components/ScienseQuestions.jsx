import React, { useEffect, useState } from "react";
import LoadingState from "./LoadingState";

const URL = "https://opentdb.com/api.php?amount=10&category=17";

function ScienseQuestions() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  // API fetch for science questions
  useEffect(() => {
    const fetchQuestions = async (retryCount = 0) => {
      try {
        const res = await fetch(`${URL}`);

        if (!res.ok) {
          if (res.status === 429 && retryCount < 3) {
            console.log(
              `Rate limited (429). Retrying in ${
                (retryCount + 1) * 3
              } seconds...`
            );
            await new Promise((resolve) =>
              setTimeout(resolve, (retryCount + 1) * 1000)
            );
            return fetchQuestions(retryCount + 1);
          }
          throw new Error(`API responded with status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        setQuestions(data.results);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      const currentQuestion = questions[currentIndex];
      const shuffledOptions = shuffleArray([
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
      ]);
      setOptions(shuffledOptions);
    }
  }, [questions, currentIndex]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      setCompleted(true);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentIndex].correct_answer) {
      setScore(score + 1);
      setTimeout(handleNextQuestion, 1000);
    } else {
      setTimeout(handleNextQuestion, 1000);
    }
  };

  return (
    <div>
      {!isLoading ? (
        <LoadingState />
      ) : (
        <>
          <div className="up">
            {/* <div className="timer">ggg</div> */}
            <div className="score">Score: {score}</div> 
            <div className="number">
              {currentIndex + 1}/{questions.length}
            </div>
          </div>

          <div className="container">
            {!completed ? (
              <>
                <p>{questions[currentIndex].question}</p>
                <div className="options">
                  {options.map((option, index) => (
                    <p
                      className={`${
                        selectedOption
                          ? option === questions[currentIndex].correct_answer
                            ? "correct"
                            : option === selectedOption
                            ? "wrong"
                            : ""
                          : ""
                      }`}
                      onClick={() => handleOptionClick(option)}
                      key={index}
                    >
                      {option}
                    </p>
                  ))}
                </div>
                <button className="next" onClick={handleNextQuestion}>
                  Next
                </button>
              </>
            ) : (
              <div className="completed">
                <p>Quiz completed, you score {score}</p>
                <button className="next">Return to home</button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ScienseQuestions;
