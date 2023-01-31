import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { MainFrame } from './modules/frame';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import chalk_theme from './chalk.json';
import china from "echarts/map/json/china.json";
import echarts from "echarts";
const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log("chalk=", chalk_theme);
// console.log("pars=", JSON.parse(chalk_theme.toString()));

echarts.registerMap("china", china);
echarts.registerTheme("chalk", chalk_theme);

root.render(

  <Router>
    <Routes>
      <Route extact path="/*" element={<MainFrame />} />
    </Routes>
  </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
