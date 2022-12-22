import React from 'react';
import ShowProfile from './ShowProfile';
import { AiFillPlusCircle } from "react-icons/ai";

export default function ShowPanel() {
  return (
    <>
    <div className='h-screen w-56 bg-gray-900'>
      <ShowProfile />
      <div className=''></div>
      <button className='btn rounded-full bg-lime-900 px-4 py-2 flex items-center'><AiFillPlusCircle size={16}/>New</button>
    </div>
    </>
  )
}