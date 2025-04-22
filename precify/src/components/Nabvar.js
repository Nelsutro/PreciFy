import React from 'react';
import {Routes, Route, BrowserRouter, NavLink} from 'react-router-dom';
import '../styles/navbar.css'

import Calculo from '../pages/Calculo';
import Perfil from '../pages/Perfil';
import Home from '../pages/Home';

import perfil from '../img/perfil.png';
import logo from '../img/logoprecify.jpeg';


export const MyRoutersComponent = () => {

    return (
        <BrowserRouter>
        <NavBar />
               <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Calculo" element={<Calculo />} />
                <Route path="/Perfil" element={<Perfil />} />
            </Routes>
        </BrowserRouter>
    );
}


function NavBar() {

    return ( 
        <>
        <nav>
            <img src={logo} alt='Logo' />
            <div>
                <h1>PreciFy</h1>
            </div>
            <ul>
                    <li>
                            <NavLink to="/">Home</NavLink>
                    </li>
                        <li>
                                <NavLink to="/Calculo">Cálculo</NavLink>
                        </li>
                <li>
                    <button className='logout'>Cerrar Sesión</button>
                </li>
            </ul>
            <div className="profile-icon">
                <NavLink to='/Perfil'> <img src={perfil} alt='Perfil' /></NavLink>
            </div>
    </nav>
    </>
    );
}
