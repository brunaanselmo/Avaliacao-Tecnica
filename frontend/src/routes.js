import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Empresas from './pages/empresas';
import Setores from './pages/setores';
import Relatorio from './pages/relatorio';


export default function Function_Routes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' exact element={ <Home/> } />
        <Route path='/empresas' exact element={ <Empresas/> } />
        <Route path='/setores' exact element={ <Setores/> } />
        <Route path='/relatorio' exact element={ <Relatorio/> } />
    </Routes>
    </BrowserRouter>
  );
}