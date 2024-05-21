import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import CreateForm from './_components/CreateForm'
import FormList from './_components/FormList'

function Dashboard() {
    return (
        <div className='p-10'>
            <h2 className='font-bold text-3xl flex items-center justify-between'>Dashboard
                <CreateForm/>
            </h2>
            {/* List of Forms  */}
            <FormList/>
        </div>
    )
}

export default Dashboard