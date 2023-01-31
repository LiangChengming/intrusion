import React from "react";
import "./css/trend.css";
import { SimpleChart } from "./simpleChart";
import { GeoChart } from "./geo_map";
import { SummaryCard } from "./summaryCard";
import { Tabular } from "./table";
import { succ } from "../toast";
import pie from "../assets/pie.svg";
import { opinion_all_count } from "./core_data.js";
import ShareIcon from "@mui/icons-material/Share";

export const TrendSummary = (props) => {
  const txt = {
    rows: [
      {
        id: 1,
        nickname: "AI-BOT 1",
        time: "2023-01-24",
        source: "新浪微博",
      },
      {
        id: 2,
        nickname: "AI-BOT 2",
        time: "2022/09/20",
        source: "今日头条",
      },
      {
        id: 3,
        nickname: "AI-BOT 3",
        time: "2022/09/20",
        source: "小红书",
      },
    ],
    columns: [
      {
        field: "id",
        headerName: "ID",
        width: 100,
        sortable: true,
      },
      {
        field: "nickname",
        headerName: "Nickname",
        width: 100,
        flex: 1,
        sortable: true,
      },
      {
        field: "time",
        headerName: "Date",
        width: 100,
        sortable: true,
      },
      {
        field: "source",
        headerName: "platfrom",
        width: 100,
        sortable: true,
      },
    ],

    table_actions: (rowval) => {
      const onClick = (e) => {
        // toast.success("Clicked !");
        succ("指令下发执行中 ... ");
      };
      return (
        <div className="table-row-action-area">
          <a
            className="table-row-action-button"
            // style={{ backgroundColor: "#FC7300" }}
            onClick={onClick}
          >
            删除
          </a>
          <a
            className="table-row-action-button"
            // style={{ backgroundColor: "#1F8A70" }}
            onClick={onClick}
          >
            暂停
          </a>
          <a
            className="table-row-action-button"
            // style={{ backgroundColor: "#5867F2" }}
            onClick={onClick}
          >
            限流
          </a>
        </div>
      );
    },
  };

  const data = {
    name: "整体舆情(过去5天)",
    value: opinion_all_count[0].count,
    detail: opinion_all_count.map((x) => {
      return { name: x.name, value: x.count };
    }),
    icon: <ShareIcon />,
  };

  return (
    <div className="trend-wrapper">
      <div className="trend-summary-info">
        <SummaryCard
          className="id-card-type-3 bg-shade-gray/20 w-1/4"
          data={data}
        />
        <SimpleChart
          type="line"
          title="舆情时序数据"
          className="trend-timeline-chart bg-shade-gray/20 w-3/4"
        />
      </div>

      <div className="trend-summary-info">
        <SimpleChart
          type="pie"
          className="trend-pie-chart bg-shade-gray/20"
          id="trend-pie-chart"
        />
        <GeoChart className="geo-chart bg-shade-gray/20" />
      </div>
      <Tabular
        rows={txt.rows}
        columns={txt.columns}
        buttons={txt.table_actions}
      />
    </div>
  );
};
