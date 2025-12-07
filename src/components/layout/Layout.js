import React from 'react'
import Header from '../header/Header'

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <main className='w-full max-w-[1220px] px-4 mx-auto'>
        {children}
      </main>
    </div>
  )
}

export default Layout