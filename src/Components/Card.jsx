import React from 'react';

const Card = ({letter, imageFirst, front, setFront, simul, slide}) => {
  if (!imageFirst) { setFront(false) }
  return (
    simul
      ? <div className={"card-body simul " + slide}>
        <img src={require(`../Alphabet/${letter}.svg`)} alt={letter} /> 
        <h1>{letter.toUpperCase()}</h1> 
      </div> 
      : <div className={"card-body " + front + " " + slide} onClick={() => setFront(!front)}>
        {front
          ? <img src={require(`../Alphabet/${letter}.svg`)} alt={letter} />
          : <div className="back"><h1>{letter.toUpperCase()}</h1></div>}
      </div>
  )
}

export default Card
