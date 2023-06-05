import React from 'react';
import './style/index.css';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Quotes from './components/Quotes';
import Home from './components/Home';
import Header from './components/Header';
import Error404 from './components/Error404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header><Home /></Header>,
  },
  {
    path: '/home',
    element: <Header><Home /></Header>,
  },
  {
    path: '/calculator',
    element: <Header><App /></Header>,
  },
  {
    path: '/quote',
    element: <Header><Quotes /></Header>,
  },
  {
    path: '*',
    element: <Error404 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
