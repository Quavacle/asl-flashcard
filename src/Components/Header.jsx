import React from 'react'

const Header = ({ setOpen, setAbout }) => {
  return (
    <div className="header">
      <h1>ASL <br />
      Alphabet Flash Cards</h1>
      <button onClick={() => setOpen(true)} className="settings-button">Settings</button>
      <button onClick={() => setAbout(true)} className="about-button">About</button>
    </div>
  )
}

export default Header