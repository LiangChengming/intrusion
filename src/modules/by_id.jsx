import React from "react";

// import geo from "../assets/geo.svg";
// import badguy from "../assets/badguy.svg";
// import { id_list } from "./core_data.js";

import "./css/by_id.css";
import "./css/common.css";

import { GeoChart } from "./geo_map";
import { SimpleChart } from "./simpleChart";
import { useParams, useNavigate } from "react-router-dom";
import { Tabular } from "./table";
import { succ } from "../toast.js";

export const ChartById = (props) => {
  let { category, app } = useParams();

  const navigate = useNavigate();

  // TODO 根据category和app查询数据，并渲染实际数据
  console.log("inf=", { category, app });

  // 当前页面Table支持的操作
  const table_actions = (rowval) => {
    const onClick = (e) => {
      // toast.success("Clicked !");
      succ("指令下发执行中 ... ");
    };
    const navito = (event) => {
      const url = `detail/${rowval.id}/`;
      navigate(url);
    };
    return (
      <div className="table-row-action-area">
        <a
          className="table-row-action-button"
          style={{ backgroundColor: "#FC7300" }}
          onClick={onClick}
        >
          封号
        </a>
        <a
          className="table-row-action-button"
          style={{ backgroundColor: "#1F8A70" }}
          onClick={onClick}
        >
          禁言
        </a>
        <a
          className="table-row-action-button"
          style={{ backgroundColor: "#5867F2" }}
          onClick={onClick}
        >
          限流
        </a>

        <a
          className="table-row-action-button"
          style={{ backgroundColor: "#FFF", color: "#000" }}
          onClick={navito}
        >
          详情
        </a>
      </div>
    );
  };

  return (
    <div className="id-chart-wrapper">
      <GeoChart className="geo-chart bg-neutral-green " />

      <SimpleChart
        type="hbar"
        id="city-bar"
        className="simple-chart shadow-box"
      />
      <SimpleChart type="line" className="simple-chart shadow-box" />
      <SimpleChart type="line" className="simple-chart shadow-box" />
      <Tabular buttons={table_actions} />
    </div>
  );
};
