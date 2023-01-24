import React from "react";

import "./css/detail.css";

import "./css/card1.css";
import "./css/card2.css";
import "./css/card3.css";
import pie from "../assets/pie.svg";
import avatar from "../assets/avatar.png";

import { SimpleChart } from "./simpleChart";
import { SummaryCard } from "./summaryCard";

import { succ } from "../toast.js";

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
      <div className="id-detail-header-info">
        <div className="user-meta-info">
          <img src={avatar} id="avatar" />
          <div className="profile">
            <label id="account-name">Fight For USA</label>
            <label id="register-date">2019/09/20</label>
            <label id="account-id">29340234920938420</label>
          </div>
        </div>
        <div className="buttons">
          <div
            className="table-row-action-button"
            style={{
              backgroundColor: "#FC7300",
              width: "100px",
              height: "60px",
            }}
            onClick={() => {
              // props.forbidden_account();
              succ("执行下发...");
            }}
          >
            封号
          </div>

          <div
            className="table-row-action-button"
            style={{
              backgroundColor: "#1F8A70",
              width: "100px",
              height: "60px",
            }}
            onClick={() => {
              // props.slience();
              succ("执行下发...");
            }}
          >
            禁言
          </div>

          <div
            className="table-row-action-button"
            style={{
              backgroundColor: "#5867F2",
              width: "100px",
              height: "60px",
            }}
            onClick={() => {
              // props.limitation();
              succ("执行下发...");
            }}
          >
            限流
          </div>
        </div>
      </div>
      <div className="id-detail-stat-info">
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
