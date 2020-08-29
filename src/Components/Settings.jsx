import React from 'react'

export const Settings = ({ setFree, setOpen, setNextTime, nextTime, setRandom, random, setSimul, simul }) => {

  const handleTime = (time) => {
    setNextTime(null)
    setNextTime(time)
  }

  return (
    <div className="settings modal">
      <h2>Settings</h2>
      <div className="settings-wrapper">
        <div className="control">
          <label>Set Timer for Card Change</label>
          <sub>Study Mode</sub>
          <input type="range" min={1000} max={7000} step={1000} defaultValue={nextTime}
            onChange={(e) => { handleTime(e.target.value) }} />
          <sub>{nextTime ? (nextTime / 1000) : '∞'} seconds</sub>
        </div>
        <div className="control">
          <label>Random?</label>
          <input className="checkbox" type={"checkbox"} checked={random} onChange={(e) => setRandom(e.target.checked)}/>
        </div>
        <div className="control">
          <label>Show Letter and Picture Simultaneously?</label>
          <input className="checkbox" type={"checkbox"} checked={simul} onChange={(e) => setSimul(e.target.checked)} />
        </div>
        <div className="apply">
          <button onClick={() => { setFree(false); setOpen(false)}}>Apply!</button>
          <button onClick={()=> { setFree(true); setOpen(false)}}>Let me go at my own pace</button>
        </div>
      </div>
    </div>
  )
}

export default Settings
