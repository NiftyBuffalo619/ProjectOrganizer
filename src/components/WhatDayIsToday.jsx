import React from 'react'

export default function WhatDayIsToday() {
    var date = new Date();
    const getActualDate = () => {
      var message = "";
      if (date.getHours() === 5 && date.getMinutes() > 0 || date.getHours() <= 12) {
        message = "☀Good Morning!";
      }
      else if (date.getHours() === 12 && date.getMinutes() > 0 || date.getHours() <= 17) {
        message = "Good Evening!";
      }
      else if (date.getHours() === 17 && date.getMinutes() > 0 || date.getHours() <= 23) {
        message = "Good Evening!";
      }
      else if (date.getHours() === 23 && date.getMinutes() > 0 || date.getHours() <= 4 && date.getMinutes() <= 59) {
        message = "🌙Good Night!";
      }
      else {
        message = "Error " + date.getHours() + ":" + date.getMinutes();
      }
        return (
            <>
               <h2 className='text-white p-5'>{message}</h2>
            </>
        )
    }
  return (
    <div className=''>
        {getActualDate()}
    </div>
  )
}