import React from 'react'

function TechQuestion() {

    const [ArtQuestions, setArtQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState("");
  return (
    <div>
        <>
        {!isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {score}
            <div className="up">
              <div className="timer">ggg</div>
              <div className="number">
                {currentIndex + 1}/{HistQuestions.length}
              </div>
            </div>

            <div className="container">
              <p>{HistQuestions[currentIndex].question}</p>
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
  )
}

export default TechQuestion