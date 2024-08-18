import React from 'react'
import Header from './Header'
import NavBar from './NavBar'

function AppLayout({children}) {
  return (
    <div className="desktop-background">
      <div className='app-container'>
        <div className="app-content">
          <Header/>
          <div className="content-holder container">
              {children}
          </div> 
          <NavBar/>
        </div>
      </div>
    </div>
  )
}

export default AppLayout