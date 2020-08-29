import React from 'react'

const NavLeft = ({ changeLetter }) => {
  return (
    <div className="nav left" onClick={() => changeLetter(false)}>
      <img src={require('../next.svg')} alt="Previous Letter" className="arrow"/>
    </div>
  )
}

export default NavLeft