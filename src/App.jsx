import HomePage from'./components/HomePage'
import Login from'./components/Login'
import Profile from'./components/Profile'
import Pagos from './Pages/Pagos'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {


  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home/*" element={<HomePage/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
