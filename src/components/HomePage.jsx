import React from 'react';
import Nabvar from './Nabvar'
import Sidebar from './Sidebar'
import { Pie } from 'react-chartjs-2';
import '../css/home.css';
import Pagos from '../Pages/Pagos';
import { Routes, Route } from 'react-router-dom';

const HomePage = () => {

    const data = {
        labels: ['agua', 'luz', 'gas'],
        datasets: [{
            data: [50, 30, 20],
            backgroundColor: ['blue', 'yellow', 'green']
        }]
    };

    const opciones = {
        responsive: true
    }

    return (
        <div>
            <Nabvar />
            <div className="flex">
                <Sidebar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <h1>Bienvenido a la página de inicio</h1>
                                <div className="chart-container">
                                    <Pie data={data} options={opciones} />
                                </div>
                            </>
                        } />
                        <Route path="/pagos" element={<Pagos />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default HomePage;