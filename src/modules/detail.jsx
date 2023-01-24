import React from "react";

import "./css/detail.css";

import "./css/card1.css";
import "./css/card2.css";
import "./css/card3.css";
import pie from "../assets/pie.svg";

import { SimpleChart } from "./simpleChart";
import { SummaryCard } from "./summaryCard";

export const DetailPage = (props) => {
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
    <div className="id-detail-wrapper">
      <div className="id-detail-header">
        <SummaryCard className="id-card-type-1 shadow-box" data={data} />
        <SummaryCard className="id-card-type-2 shadow-box" data={data2} />
        <SummaryCard className="id-card-type-2 shadow-box" data={data2} />
        <SummaryCard className="id-card-type-2 shadow-box" data={data2} />
      </div>
      <div className="id-detail-area">
        <SummaryCard className="id-card-type-3 shadow-box" data={data} />
        <SimpleChart
          type="line"
          className="shadow-box id-timeline-chart"
          id="id-detail-time-line-chart"
        />
      </div>
    </div>
  );
};
