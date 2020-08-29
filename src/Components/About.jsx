import React from 'react'

const About = ({ setAbout }) => {
  return(
    <div className="about modal">
      <h1>About</h1>
      <p>This app was made by Bronson Valiquet Myers</p>
      <button onClick={() => setAbout(false)} >Close </button>
    </div>
  )
}

export default About