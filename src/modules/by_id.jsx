import React from "react";

import ReactECharts from "echarts-for-react";
import { GeoChart } from "./geo_map";
import geo from "../assets/geo.svg";

import "./css/by_id.css";

export const ChartById = (props) => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div className="id-chart-wrapper">
      <div className="id-inner-section" id="geo">
        <div className="headline">
          <img src={geo} className="id-data-head-icon"></img>
          <div className="id-data-headline"> 地域分布 </div>
        </div>
        <GeoChart className="geo-chart" />
        <ReactECharts
          className="line-chart"
          option={options}
          notMerge={true}
          lazyUpdate={true}
        />
      </div>

      <div className="id-inner-section">
        <div className="headline">
          <img src={geo} className="id-data-head-icon"></img>
          <div className="id-data-headline"> 人群属性 </div>
        </div>
        <ReactECharts
          className="line-chart"
          option={options}
          notMerge={true}
          lazyUpdate={true}
        />
      </div>

      <div className="id-inner-section">
        <div className="headline">
          <img src={geo} className="id-data-head-icon"></img>
          <div className="id-data-headline"> 人群属性 </div>
        </div>
        <ReactECharts
          className="line-chart"
          option={options}
          notMerge={true}
          lazyUpdate={true}
        />
      </div>

      <div className="id-inner-section">
        <div className="headline">
          <img src={geo} className="id-data-head-icon"></img>
          <div className="id-data-headline"> 人群属性 </div>
        </div>
        <ReactECharts
          className="line-chart"
          option={options}
          notMerge={true}
          lazyUpdate={true}
        />
      </div>
    </div>
  );
};
