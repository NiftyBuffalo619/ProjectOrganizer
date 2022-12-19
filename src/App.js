import './index.css';
import React, { Suspense, useState } from 'react';
import { lazy } from 'react';
import { Routes , Route } from "react-router-dom";
import Loading from "./components/Loading";
import ShowPanel from './components/ShowPanel';
import WhatDayIsToday from "./components/WhatDayIsToday";


function App() {
 // const [showLogin , setData] = React.useState(false);
  return (

    <>
      <Routes>
        <Route path='/' element={<ShowPanel />} />
      </Routes>
      <WhatDayIsToday className="left-0"/>
    </>
  );
}

export default App;