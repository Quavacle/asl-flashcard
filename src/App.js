import React, { useState } from 'react'
import './App.css'
import CardWrapper from './Components/CardWrapper'
import Settings from './Components/Settings'
import Header from './Components/Header'
import About from './Components/About'

function App() {
  const [about, setAbout] = useState(false)
  const [settings, setSettings] = useState(false)
  const [free, setFree] = useState(true)
  const [nextTime, setNextTime] = useState(null)
  const [random, setRandom] = useState(false)
  const [imageFirst, setImageFirst] = useState(true)
  const [simul, setSimul] = useState(false)

  return (
    <div className="App">
      {about ? <About setAbout={setAbout} /> : null}
      {settings
        ? <Settings
          setOpen={setSettings}
          setFree={setFree}
          setNextTime={setNextTime}
          nextTime={nextTime}
          setRandom={setRandom}
          random={random}
          setImageFirst={setImageFirst}
          imageFirst={imageFirst}
          setSimul={setSimul}
          simul={simul}
        />
        : null}
      <Header setOpen={setSettings} setAbout={setAbout} />
      <CardWrapper
        free={free}
        nextTime={nextTime}
        random={random}
        imageFirst={imageFirst}
        simul={simul}
      />
    </div>
  );
}

export default App;
