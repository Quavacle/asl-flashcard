import React from 'react';

const About = ({ setAbout }) => {
  return (
    <div className='about modal'>
      <div className='signature'>
        <h1>About</h1>
        <h3>By Bronson Valiquet Myers</h3>
        <p>
          An ASL flashcard app developed to practice the alphabet. Set a timer
          in the settings tab to cycle through cards, or use the left and right
          arrow keys to change and spaceber to flip the card!
        </p>
      </div>
      <div className='links'>
        <a href='https://www.quavacle/com'>Website</a>
        <a href='https://github.com/Quavacle/asl-flashcard'>Github</a>
      </div>
      <button onClick={() => setAbout(false)}>Close </button>
    </div>
  );
};

export default About;
