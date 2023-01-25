import React from "react";
import "./css/trend.css";
import { SimpleChart } from "./simpleChart";
import { GeoChart } from "./geo_map";
import { SummaryCard } from "./summaryCard";
import pie from "../assets/pie.svg";

export const TrendSummary = (props) => {
  const data = {
    name: "核心指标名称",
    value: 239421034923,
    detail: [
      { name: "详细指标1", value: 20392 },
      { name: "详细指标2", value: 1032 },
      { name: "详细指标3", value: 202 },
      { name: "详细指标4", value: 9032 },
      { name: "详细指标5", value: 1234 },
    ],
    icon: pie,
  };

  const data2 = {
    name: "核心指标名称",
    value: 2394210,
    detail: [
      { name: "详细指标1", value: 20392 },
      { name: "详细指标2", value: 1032 },
      { name: "详细指标3", value: 202 },
    ],
    icon: pie,
  };

  return (
    <div className="trend-wrapper">
      <div className="trend-summary-info">
        <SummaryCard className="id-card-type-1 shadow-box" data={data} />
        <SummaryCard className="id-card-type-2 shadow-box" data={data2} />
        <SummaryCard className="id-card-type-2 shadow-box" data={data2} />
        <SummaryCard className="id-card-type-2 shadow-box" data={data2} />
      </div>
      <div className="trend-summary-info">
        <GeoChart className="geo-chart shadow-box" />
        <SimpleChart
          type="pie"
          className="shadow-box trend-pie-chart"
          id="trend-pie-chart"
        />
      </div>
      <div className="trend-summary-info">
        <SummaryCard className="id-card-type-3 shadow-box" data={data} />
        <SimpleChart
          type="line"
          className="shadow-box trend-timeline-chart"
          id="trend-detail-time-line-chart"
        />
      </div>
    </div>
  );
};
