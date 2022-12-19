import React from 'react'

export default function WhatDayIsToday() {
    var date = new Date();
    const getActualDate = () => {
        var message = "";
        if (date.getHours() > 12 && date.getHours() <= 5) {
            //Morning 
            message = "Good Morning!";
        }
        else if (date.getHours() >= 12 && date.getHours() < 17) {
            // Afternoon 
            message = "Good Afternoon!";
        }
        else if (date.getHours() > 17 && date.getHours() < 21) {
            // Evening 
            message = "Good Evening!";
        }
        else if (date.getHours() <= 21 && date.getHours() <= 4) {
            // Night 
            message = "Good Night!";
        }
        else {
            message = "ERROR" + date.getHours();
        }
        return (
            <>
               <h2 className='text-black'>{message}</h2>
            </>
        )
    }
  return (
    <div className=''>
        {getActualDate()}
    </div>
  )
}