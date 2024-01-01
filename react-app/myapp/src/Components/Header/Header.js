import React from 'react'
import './Header.css'

const Header = () => {
    const color=
        {
            backgroundColor:"red",
            border:"2 px solid green"
        }
    
  return (
    <>
        <nav style={{
        backgroundColor:"red",
        border:"2 px solid green"
    }}>Header</nav>

    <nav style={color}>Hello</nav>
    </>
  )
}

export default Header