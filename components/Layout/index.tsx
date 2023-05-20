import Header from './Header'
import Footer from './Footer'
import React from 'react'

interface props {
  children: React.ReactNode
}

const Layout = ({ children }: props) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
