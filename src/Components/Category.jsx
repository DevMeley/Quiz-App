import React, { useState, useEffect } from "react";
import "../Components/Category.css";
import { data } from "react-router-dom";
import ArtQuestions from "./ArtQuestions";
import HistoryQuestions from "./HistoryQuestions";

const URL = "https://opentdb.com/api.php?amount=10&category=17";


// const URL4 = "https://opentdb.com/api.php?amount=10&category=18";

function Category({ catId }) {
  console.log(catId);

  // const [index, setIndex] = useState(0)
  const [questions, setQuestions] = useState([]);
  const [TechQuestions, setTechQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState("");

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
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions();
  }, []);

  

  
  // API fetch for Technology questions
  useEffect(() => {
    const fetchTechQuestions = async (retryCount = 0) => {
      try {
        const res = await fetch(`${URL4}`);

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
            return fetchTechQuestions(retryCount + 1);
          }
          throw new Error(`API responded with status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        setTechQuestions(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTechQuestions();
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
      selectedOption(null);
    } else {
      console.log("Quiz completed");
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentIndex].correct_answer) {
      setScore("correct");
    }
  };

  return (
    <div>
      {catId === "1" && questions.length > 0 ? (
        <>
          {score}
          <div className="up">
            <div className="timer">ggg</div>
            <div className="number">
              {currentIndex + 1}/{questions.length}
            </div>
          </div>

          <div className="container">
            <p>{questions[currentIndex].question}</p>
            <div className="options">
              {options.map((option, index) => (
                <p onClick={() => handleOptionClick(option)} key={index}>
                  {option}
                </p>
              ))}
            </div>
            <button className="next" onClick={handleNextQuestion}>
              Next
            </button>
          </div>
        </>
      ) : (
        <>
          {catId === "2" && <ArtQuestions />}
          {catId === "3" && <HistoryQuestions />}
          {catId === "4" && <p>4</p>}
        </>
      )}
    </div>
  );
}

export default Category;
