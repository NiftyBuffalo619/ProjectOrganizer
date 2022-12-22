import './index.css';
import React, { Suspense, useState } from 'react';
import { lazy } from 'react';
import { Routes , Route } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./components/Home";
import WhatDayIsToday from "./components/WhatDayIsToday";


function App() {
 // const [showLogin , setData] = React.useState(false);
  return (

    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;