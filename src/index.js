import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { MainFrame } from './modules/frame';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>

    <Routes>
      <Route extact path="/" element={<MainFrame />} />
    </Routes>
  </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
