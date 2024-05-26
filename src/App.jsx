import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Profile from './Pages/Profile';
import Pagos from './Pages/Pagos';
import PrivateRoute from './components/PrivateRoute'; // Importa el componente PrivateRoute
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Aquí verificas si el usuario está autenticado.
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/home/*" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
