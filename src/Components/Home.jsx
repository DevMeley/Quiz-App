import React from "react";
import { useState } from "react";
import Category from "./Category";
import { BrowserRouter, data, Route, Routes } from "react-router-dom";
import Main from "./Mainn";

function Home() {
  const [catId, setCatId] = useState("");

  return (
    <div>
      <div className="body">
        {/* <BrowserRouter>
          <Routes>
            {catId ? (
              <Route path="/quiz" element={<Category catId={catId} />} />
            ) : (
              <Route path="/" element={<Main setCatId={setCatId} />} />
            )}
          </Routes>
        </BrowserRouter> */}
        {catId ? (
              <Category catId={catId} />
            ) : (
              <Main setCatId={setCatId} />
        )}
      </div>
    </div>
  );
}

export default Home;
