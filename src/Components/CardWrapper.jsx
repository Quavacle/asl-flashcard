import React, { useState, useEffect } from 'react';
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import Card from './Card'

const CardWrapper = ({ nextTime, random, imageFirst, simul }) => {
  const alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  // Slide for our animation
  const [slide, setSlide] = useState('slide-in')
  const [letter, setLetter] = useState(alph[0])
  // Card side
  const [front, setFront] = useState(true)

  // Set timer for card switch out and for random based on use prefs
  useEffect(() => {
    const change = setTimeout(() => {
      random ? randomLetter() : changeLetter()
    }, nextTime || 100 * 100 * 100)
    return () => clearTimeout(change)
  })

  // Set event listener for keyboard shortcuts, making sure to remove to avoid exponentional triggers
  // This doesn't seem like the most performant way to do this, but the app is light as it is so will be
  // revisited at a later date (possibly)

  useEffect(() => {
    const handleKeys = (e) => {
      const { keyCode } = e;
      if (keyCode === 37) {
        return changeLetter(false)
      } else if (keyCode === 32) {
        return setFront(!front)
      } else if (keyCode === 39) {
        return changeLetter()
      }
    }
    document.addEventListener('keyup', handleKeys)
    return () => document.removeEventListener('keyup', handleKeys)
  })

  const findLetter = (letter) => {
    const index = alph.findIndex(curr => curr === letter)
    return index
  }

  // Random generator for letter
  const randomLetter = () => {
    const min = Math.ceil(0)
    const max = Math.floor(25)
    const randomL = () => Math.floor(Math.random() * (max - min) + min)
    setLetter(alph[randomL()])
  }

  const changeLetter = (move = true) => {
    // Find index of current letter
    const index = findLetter(letter)
    // Animate card off of page
    setSlide('slide-out')
    // Bring new card in
    setTimeout(() => setSlide('slide-in'), 250)
    // Check for random status, if not, move forward or backwards depeneding on param
    if (random) {
      return randomLetter()
    } else {
      // If move is positive, move forward in alphabet, if negative, move backward
      // Conditionals to move forward or backwards over the end and beginning of the array
      move
      ? (index === 25 ? setLetter(alph[0]) : setLetter(alph[index + 1]))
      : (index === 0 ? setLetter(alph[25]) : setLetter(alph[index - 1]))
    }
  }

  return (
    <div className="card-wrapper">
      <div className="nav-wrapper">
        <NavLeft
          changeLetter={changeLetter}
          letter={letter}
        />
        <Card
          letter={letter}
          imageFirst={imageFirst}
          setFront={setFront}
          front={front}
          simul={simul}
          nextTime={nextTime}
          slide={slide}
        />
        <NavRight
          changeLetter={changeLetter}
          letter={letter}
        />
      </div>
    </div>
  )
}

export default CardWrapper
