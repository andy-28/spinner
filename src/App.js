import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";


function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <div className="App">
      {
        loading ?
          <ClipLoader
            color={'010101'}
            loading={loading}

            size={150}

          />
          :
          <div>

            <h1>Hello Wrold</h1>
            <p>
              Loresjfdjfjdsfijsdfojsdopfjpo
            </p>
          </div>
      }


    </div>
  );
}

export default App;
