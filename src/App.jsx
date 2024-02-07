import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { nanoid } from 'nanoid';

function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      <button onClick={() => {
        console.log(items);
        setItems(items => [...items, Math.random()])
      }}>Ajouter un element</button>
      <div className='container'>
        <div>
          <p>Liste avec nanoid</p>
          <ul>
            { items.map(item => <li key={nanoid()}>{item}</li>) }
          </ul>
        </div>

        <div>
          <p>Liste avec l'index</p>
          <ul>
            { items.map((item, i) => <li key={i}>{item}</li>) }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
