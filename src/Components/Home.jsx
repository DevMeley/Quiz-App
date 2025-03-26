import React from 'react'
import { useState } from "react";
import Category from './Category';
import { data } from 'react-router-dom';
import Main from './Main';

function Home() {
    const [catId, setCatId] = useState("");

  return (
    <div>
        <div className="body">
        {catId ? 
          <Category catId={catId} /> : 
          <Main setCatId={setCatId} />
        }
        </div>
    </div>
  )
}

export default Home