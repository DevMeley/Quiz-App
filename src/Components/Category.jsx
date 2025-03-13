import React from "react";

function Category({ catId }) {
  console.log(catId);

  const questions = [
    {
      question: "Rolex is a company that specializes in what type of product?",
      Answers: {
        incorrect_answers: ["Cars", "Computers", "Sports equipment", "Watches"],
      },
    },
    {
      question: "Rolex is a company that specializes in what type of product?",
      Answers: {
        incorrect_answers: ["Cars", "Computers", "Sports equipment", "Watches"],
      },
    },
    {
      question: "Rolex is a company that specializes in what type of product?",
      Answers: {
        incorrect_answers: ["Cars", "Computers", "Sports equipment", "Watches"],
      },
    },
    {
      question: "Rolex is a company that specializes in what type of product?",
      Answers: {
        incorrect_answers: ["Cars", "Computers", "Sports equipment", "Watches"],
      },
    }
  ];
  return (
    <div>
      {catId === "1" && (
        <>
        h
          {questions.map((ques) => (
            <div className="v">
              <p>{ques.question}</p>
              <li>{ques.Answers.incorrect_answers}</li>
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
