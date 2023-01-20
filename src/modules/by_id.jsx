import React from "react";

import ReactECharts from "echarts-for-react";
import { GeoChart } from "./geo_map";
import geo from "../assets/geo.svg";
import badguy from "../assets/badguy.svg";

import "./css/by_id.css";
import { SimpleChart } from "./barChart";

export const ChartById = (props) => {
  return (
    <div className="id-chart-wrapper">
      <div className="id-inner-section" id="geo">
        <div className="headline">
          <img src={geo} className="id-data-head-icon"></img>
          <div className="id-data-headline"> 地域分布 </div>
        </div>
        <GeoChart className="geo-chart" />
        <SimpleChart type="bar" />
      </div>

      <div className="id-inner-section">
        <div className="headline">
          <img src={geo} className="id-data-head-icon"></img>
          <div className="id-data-headline"> 人群属性 </div>
        </div>
        <SimpleChart type="line" />
      </div>

      <div className="id-inner-section">
        <div className="headline">
          <img src={geo} className="id-data-head-icon"></img>
          <div className="id-data-headline"> 人群属性 </div>
        </div>
        <SimpleChart type="line" />
      </div>

      <div className="id-inner-section">
        <div className="headline">
          <img src={badguy} className="id-data-head-icon"></img>
          <div className="id-data-headline"> 危险ID </div>
        </div>
        <SimpleChart type="line" />
      </div>
    </div>
  );
};
