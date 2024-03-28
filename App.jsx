import { useState } from 'react'

function App() {
  const [minval, setMinVal] = useState(0)
  const [maxval, setMaxVal] = useState(100)
  const [randomNumber, setRandomNumber] = useState(0)
  const giveRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * (maxval - minval + 1) + minval))
  }

  return (
    <>
      <div className='Fox'>
        <div className="container">
          <div className='randomNumber'>
            <p>Random Number : <span>{randomNumber}</span></p>
          </div>
          <div className='numContainer'>
            <div>
              <p>Min:</p>
              <input type="number" value={minval} onChange={e => setMinVal(+e.target.value)} />
            </div>

          </div>
          <div className='numContainer'>
            <div>
              <p>Max:</p>
              <input type="number" value={maxval} onChange={e => setMaxVal(+e.target.value)} />
            </div>
          </div>
          <button onClick={giveRandomNumber}>Get Random Number</button>

        </div>
      </div>




    </>
  )
}

export default App
