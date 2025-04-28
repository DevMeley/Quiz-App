import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NoPage from "./Components/NoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Category from "./Components/Category";
import Main from "./Components/Mainn";

function App() {
  const [catId, setCatId] = useState("");

  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="body">
          <Routes>
            <Route path="/quiz" element={<Category catId={catId} />} />
            <Route path="/" element={<Main setCatId={setCatId} />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );

  {
    /* <Home /> */
  }
  {
    /* <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NoPage />} />
    
    </Routes>
  </BrowserRouter> */
  }
}

export default App;
