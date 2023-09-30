import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className='h-16 flex items-center justify-between bg-slate-800 w-full px-16'>
            <h3 className='font-bold text-2xl'>TODOS</h3>
            <Link href="/new" className='border border-1 border-slate-400 padding-btn hover:bg-slate-400 text-sm'>New Todo</Link>
        </nav>
    </header>
  )
}

export default Navbar