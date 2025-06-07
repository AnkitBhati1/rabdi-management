import { SignIn } from '@clerk/nextjs'
import { useState } from 'react';

export default function Page() {
    
    return (
        <>
        <div className='flex flex-col justify-center items-center mt-36'>
            <h1 className='text-white mb-10 font-bold text-5xl'> Welcome!! Please Log in </h1>
            <SignIn />
        </div>
        </>
    )
}