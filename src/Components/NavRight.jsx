import React from 'react'

const NavRight = ({ changeLetter }) => {
  return (
    <div className="nav right" onClick={() => changeLetter(true)}>
      <img src={require('../next.svg')} alt="Next Letter" className="next arrow"/>
    </div>
  )
}

export default NavRight