import React, { useState, useEffect } from "react";
import "../Components/CSS/Category.css"
import ArtQuestions from "./ArtQuestions";
import HistoryQuestions from "./HistoryQuestions";
import TechQuestion from "./TechQuestion";
import ScienseQuestions from "./ScienseQuestions";

function Category({ catId }) {
  console.log(catId);

  return (
    <div>
      {catId === "1" && <ScienseQuestions />}
      {catId === "2" && <ArtQuestions />}
      {catId === "3" && <HistoryQuestions />}
      {catId === "4" && <TechQuestion />}
    </div>
  );
}

export default Category;
