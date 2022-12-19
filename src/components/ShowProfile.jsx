import React, { Suspense } from 'react'
import Loading from './Loading';
import { AiOutlineUser } from 'react-icons/ai';

export default function ShowProfile({ username: username , profile_picture: profile_picture }) {
  return (
    <>
     <Suspense fallback={<Loading />}>
        <div className='flex items-center p-5 space-x-5'>
          <AiOutlineUser size={32}/>
          <p className='text-lg'>{"User Name"}</p>
        </div>
      </Suspense>
    </>
  )
}
