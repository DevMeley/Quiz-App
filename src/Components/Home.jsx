import React from 'react'
import { useState } from "react";
import Category from './Category';
import Main from './main';

function Home() {
    const [catId, setCatId] = useState("");

  return (
    <div>
        <div className="body">
            {catId ? 
                <Category catId={catId}/> : <Main setCatId={setCatId}/>
            }
        </div>
    </div>
  )
}

export default Home