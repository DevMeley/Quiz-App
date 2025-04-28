import React from "react";
import "../Components/CSS/main.css";
import { Link } from "react-router-dom";
import download10 from "../assets/download (1).jpeg"
import download11 from "../assets/download.jpeg"

function Main({ setCatId }) {
  const Categories = [
    {
      id: "1",
      category: "Science ",
      image: download10,
      Level: "medium",
      Type: "Multiple Choice",
    },
    {
      id: "2",
      category: "Art",
      image: download11,
      Level: "medium",
      Type: "Multiple Choice",
    },
    {
      id: "3",
      category: "History",
      image: download11,
      Level: "medium",
      Type: "Multiple Choice",
    },
    {
      id: "4",
      category: "Technology",
      image: download10,
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
