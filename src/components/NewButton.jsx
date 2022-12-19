import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";

export default function NewButton() {
  return (
      <>
      <button className='btn rounded-full bg-lime-900 px-4 py-2 flex '><AiFillPlusCircle size={16}/>New</button>
      </>
  )
}
