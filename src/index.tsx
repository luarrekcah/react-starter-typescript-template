import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './index.css';
import About from './pages/About';

import Main from './pages/Main';

import reportWebVitals from './utils/reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container!);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
