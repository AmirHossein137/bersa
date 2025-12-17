import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <main className='w-full max-w-[1220px] px-4 mx-auto'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout