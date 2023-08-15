import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Inicio from './components/Inicio/Inicio';
import MusicaContextual from './components/MusicaContextual/MusicaContextual';
import CupidoMusical from './components/CupidoMusical/CupidoMusical.jsx';
import RegisterDatos from './components/RegisterDatos/RegisterDatos.jsx';
import Buscador from './components/Buscador/Buscador.jsx';
import Playlist from './components/Playlist/Playlist.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/registerdatos',
    element: <RegisterDatos />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/musica-contextual',
    element: <MusicaContextual />,
  },
  {
    path: '/cupido-musical',
    element: <CupidoMusical />,
  },
  {
    path: '/buscador',
    element: <Buscador />,
  },
  {
    path: '/playlist',
    element: <Playlist />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
