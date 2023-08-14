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
//esto sera borrado
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
