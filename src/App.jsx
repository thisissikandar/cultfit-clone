import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar';
import { Allroutes } from './Allroutes/Allroutes';
import { Footer } from './components/Footer';

function App() {
  const [c, setc] = useState("#15171C");

  return (
    <div className="App">
    <Navbar c={c} />
    <Allroutes setc={setc} />
    <Footer />
  </div>
  )
}

export default App
