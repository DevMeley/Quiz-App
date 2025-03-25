import React, { useEffect, useState } from "react";
import LoadingState from "./LoadingState";

const URL2 = "https://opentdb.com/api.php?amount=10&category=25";

function ArtQuestions() {
  const [ArtQuestions, setArtQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);

  // API fecth for Art questions
  useEffect(() => {
    const fetchArtQuestions = async (retryCount = 0) => {
      try {
        const res = await fetch(`${URL2}`);

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
            return fetchArtQuestions(retryCount + 1);
          }
          throw new Error(`API responded with status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data.results);
        setArtQuestions(data.results);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArtQuestions();
  }, []);

  useEffect(() => {
    if (ArtQuestions.length > 0) {
      const currentQuestion = ArtQuestions[currentIndex];
      const shuffledOptions = shuffleArray([
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
      ]);
      setOptions(shuffledOptions);
    }
  }, [ArtQuestions, currentIndex]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleNextQuestion = () => {
    if (currentIndex < ArtQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      selectedOption(null);
    } else {
      console.log("Quiz completed");
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === ArtQuestions[currentIndex].correct_answer) {
      setScore(score + 1);
      handleNextQuestion()
    }
    else{
    handleNextQuestion()
    }
  };

  

  return (
    <div>
      <>
        {!isLoading ? (
          <LoadingState />
        ) : (
          <>
            <div className="up">
              <div className="timer">ggg</div>
              Score: {score}
              <div className="number">
                {currentIndex + 1}/{ArtQuestions.length}
              </div>
            </div>

            <div className="container">
              <p>{ArtQuestions[currentIndex].question}</p>
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
        )}
      </>
    </div>
  );
}

export default ArtQuestions;
