import React from "react";

import ReactECharts from "echarts-for-react";
import { GeoChart } from "./geo_map";
import geo from "../assets/geo.svg";
import badguy from "../assets/badguy.svg";
import { id_list } from "./core_data.js";

import "./css/by_id.css";
import { SimpleChart } from "./simpleChart";
import { useParams } from "react-router-dom";
import { Tabular } from "./table";
import { DetailInfo } from "./detail";

export const ChartById = (props) => {
  let { category, app } = useParams();

  console.log("inf=", { category, app });
  // 根据category和app查询数据，并渲染

  return (
    <div className="id-chart-wrapper">
      {/* <div className="headline">
        <img src={geo} className="id-data-head-icon"></img>
        <div className="id-data-headline"> 地域分布 </div>
      </div> */}
      <GeoChart className="geo-chart shadow-box" />

      {/* <div className="headline">
        <div className="id-data-headline"> 危险ID </div>
      </div> */}
      <SimpleChart
        type="hbar"
        id="city-bar"
        className="simple-chart shaow-box"
      />
      <SimpleChart type="line" className="simple-chart shaow-box" />
      <SimpleChart type="line" className="simple-chart shaow-box" />
      <Tabular />

      <DetailInfo></DetailInfo>
    </div>
  );
};
