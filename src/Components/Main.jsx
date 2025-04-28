import React from "react";
import "../Components/CSS/main.css";
import { Link } from "react-router-dom";

function Main({ setCatId }) {
  const Categories = [
    {
      id: "1",
      category: "Science ",
      image: "public/download.jpeg",
      Level: "medium",
      Type: "Multiple Choice",
    },
    {
      id: "2",
      category: "Art",
      image: "public/download (1).jpeg",
      Level: "medium",
      Type: "Multiple Choice",
    },
    {
      id: "3",
      category: "History",
      image: "public/download.jpeg",
      Level: "medium",
      Type: "Multiple Choice",
    },
    {
      id: "4",
      category: "Technology",
      image: "public/download.jpeg",
      Level: "medium",
      Type: "Multiple Choice",
    },
  ];

  return (
    <div>
      <div className="category">
        {Categories.map((cat) => (
          <div className="cats" key={cat.id}>
            <img src={cat.image} alt="h" />
            <h2>{cat.category}</h2>
            <p>Level: {cat.Level}</p>
            <p>Type: {cat.Type}</p>
            {/* <button
              className="takeQuiz"
              onClick={() => {
                console.log(cat.id);
                setCatId(cat.id);
              }}
            >
              Take Quiz
            </button> */}
            <Link to={"/quiz"}>
            <button
              className="takeQuiz"
              onClick={() => {
                console.log(cat.id);
                setCatId(cat.id);
              }}
            >
              Take Quiz
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
