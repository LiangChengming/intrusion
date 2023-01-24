import React from "react";

// import geo from "../assets/geo.svg";
// import badguy from "../assets/badguy.svg";
// import { id_list } from "./core_data.js";

import "./css/by_id.css";
import "./css/common.css";

import { GeoChart } from "./geo_map";
import { SimpleChart } from "./simpleChart";
import { useParams } from "react-router-dom";
import { Tabular } from "./table";
import { DetailPage } from "./detail";

export const ChartById = (props) => {
  let { category, app } = useParams();

  console.log("inf=", { category, app });
  // 根据category和app查询数据，并渲染

  return (
    <div className="id-chart-wrapper">
      <GeoChart className="geo-chart shadow-box" />

      <SimpleChart
        type="hbar"
        id="city-bar"
        className="simple-chart shadow-box"
      />
      <SimpleChart type="line" className="simple-chart shadow-box" />
      <SimpleChart type="line" className="simple-chart shadow-box" />
      <Tabular />

      <DetailPage></DetailPage>
    </div>
  );
};
