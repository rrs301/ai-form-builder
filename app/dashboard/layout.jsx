"use client"
import { SignIn, SignedIn } from '@clerk/clerk-react'
import React from 'react'
import SideNav from './_components/SideNav'

function DashboardLayout({children}) {
  return (
    <SignedIn>
    <div>
        <div className='md:w-64 fixed'>
            <SideNav/>
        </div>
        <div className='md:ml-64'>
      
        {children}
       
        </div>
       
    </div>
    </SignedIn>
  )
}

export default DashboardLayout