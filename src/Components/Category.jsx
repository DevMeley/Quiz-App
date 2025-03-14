import React, { useState } from "react";
import "../Components/Category.css";

function Category({ catId }) {
  console.log(catId);

  const [index, setIndex] = useState(0)

  const questions = [
    {
      question: "Rolex is a company that specializes in what type of product?",
      Answers: {
        option1: "Cars",
        option2: "Computers",
        option3: "Sports equipment",
        option4: "Watches",
      },
    },
    {
      question: "Rolex is a company that specializes in what type of product?",
      Answers: {
        option1: "Cars",
        option2: "Computers",
        option3: "Sports equipment",
        option4: "Watches",
      },
    },
    {
      question: "Rolex is a company that specializes in what type of product?",
      Answers: {
        option1: "Cars",
        option2: "Computers",
        option3: "Sports equipment",
        option4: "Watches",
      },
    },
    {
      question: "Rolex is a company that specializes in what type of product?",
      Answers: {
        option1: "Cars",
        option2: "Computers",
        option3: "Sports equipment",
        option4: "Watches",
      },
    },
  ];
  return (
    <div>
      {catId === "1" && (
        <>
          <div className="up">
            <div className="timer">ggg</div>
            <div className="number">1/3</div>
          </div>
          {questions.map((ques) => (
            <div className="container">
              <p>{ques.question}</p>
              <div className="options">
                <p>{ques.Answers.option1}</p>
                <p>{ques.Answers.option2}</p>
                <p>{ques.Answers.option3}</p>
                <p>{ques.Answers.option4}</p>
              </div>
              <button className="next">Next</button>
            </div>
          ))}
        </>
      )}
      {catId === "2" && <p>2</p>}
      {catId === "3" && <p>3</p>}
      {catId === "4" && <p>4</p>}
    </div>
  );
}

export default Category;
