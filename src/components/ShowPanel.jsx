import React from 'react';
import ShowProfile from './ShowProfile';
import NewButton from './NewButton';

export default function ShowPanel() {
  return (
    <>
    <div className='h-screen w-56 bg-gray-900'>
      <ShowProfile />
      <div className=''></div>
      <NewButton />
    </div>
    </>
  )
}