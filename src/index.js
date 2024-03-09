import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'; 
import Browser from './pages/Browser';
import Display from './pages/Display';
import Movie from './pages/Movie';
import Register from './pages/Register';


// const routes = createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>
//   },
//   {
//     path:'/Register',
//     element:<Register/>
//   },
//   {
//     path:'/Display',
//     element:<Display/>
//   },
//   {
//     path:'/Movie',
//     element:<Movie/>
//   },
//   {
//     path:'/Browser',
//     element:<Browser/>
//   },
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <RouterProvider router={routes}/> */}
    <App/>
  </>
);

reportWebVitals();
