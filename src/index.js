import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Main_top } from './Components/Main_top';
import {createBrowserRouter,RouterProvider,Route,Link} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main_top/>
);

