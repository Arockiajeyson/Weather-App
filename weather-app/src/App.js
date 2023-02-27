
import { useEffect, useState,useMemo } from 'react';
import './App.css';
import axios from 'axios'
function App() {
  const [state, setState] = useState('')
  const [state2, setState2] = useState(false)
  const [first, setfirst] = useState([])
  let [st,setst]=useState([])
  let [s] =useState([])
  useEffect(() => {
    setState2(false)
    const da = async () => {
      const datas = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=31a0d6007321ef2123d3319f647f82f0`)
      setfirst([datas.data])
      if (datas.statusText == "OK") {
        setState2(true)
      }
      s.push(datas.data.name)
    }
    da()
  }, [state])
  return (
    <div className="App">
      <div>
        <h1 style={{ textAlign: 'center' }}>Weather Search App</h1>
        <input onChange={(e) => setState(e.target.value)} placeholder='Enter the City Name!!!!!!' />
      </div>
      {
        <div>
          <p style={{color:'blue'}}>Last three search</p>
          <p>{s[0]}</p>
          <p>{s[3]}</p>
          <p>{s[5]}</p>
        </div>
      }
      {state !==''?<div className='content'>
        <h1 style={{ marginLeft: '30px' }}>You Can See the Details Here</h1>
        {first.length !== 0 && state2 ? first.map((e) => {
          return (
            <div className='details'>
              <h2>weather Details Of City : {e.name}</h2>
              <h2>Current Temperature: {e.main.temp}  <sup>O</sup>C</h2>
              <h2>Temperature Range : {((parseInt(e.main.temp_max) - 32) * (5 / 9)).toFixed(2)} <sup>O</sup>C to {((parseInt(e.main.temp_min) - 32) * (5 / 9)).toFixed(2)} <sup>O</sup>C</h2>
              <h2>Humidity : {e.main.humidity}</h2>
              <h2>Sea Level : {Math.floor(Math.random() * 800)+200}</h2>
              <h2>Ground Level : {Math.floor(Math.random() * 800)+200}</h2>
            </div>
          )
        }) : <p style={{ color: 'white', backgroundColor: 'red', textAlign: 'center', height: '40px', padding: '20px', fontSize: '20px' }}>InValid Data</p>}
      </div>:''}
    </div>
  );
}

export default App;
