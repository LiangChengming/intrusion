import React from "react";
import { useParams } from "react-router-dom";

import "./css/detail.css";

import "./css/card1.css";
import "./css/card2.css";
import "./css/card3.css";
import pie from "../assets/pie.svg";
import avatar from "../assets/avatar.png";

import { SimpleChart } from "./simpleChart";
import { SummaryCard } from "./summaryCard";

import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

import { succ } from "../toast.js";
import { Tabular } from "./table";

export const DetailPage = (props) => {
  let { category, app, uid } = useParams();

  const txt = {
    rows: [
      {
        id: 1,
        title: "转发微博: 疫情导致严重经济衰退",
        time: "2022/09/20",
        source: "新浪微博",
      },
      {
        id: 2,
        title: "转发微博: 疫情导致严重经济衰退",
        time: "2022/09/20",
        source: "新浪微博",
      },
      {
        id: 3,
        title: "转发微博: 疫情导致严重经济衰退",
        time: "2022/09/20",
        source: "新浪微博",
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
        field: "title",
        headerName: "Title",
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
  };

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

  const cheatType = () => {
    if (category === "phone") {
      return "电话诈骗";
    }
    if (category === "person") {
      return "邪教组织";
    }
    if (category === "valient") {
      return "恐怖暴力";
    }
    return "其他问题";
  };

  return (
    <div className="id-detail-wrapper">
      <div className="id-detail-header-info">
        <div className="account-type">{cheatType()}</div>
        <div className="user-meta-info">
          <img src={avatar} id="avatar" />
          <div className="profile">
            <label id="account-name">Fight For USA</label>
            <label id="register-date">2019/09/20</label>
            <label id="account-id">29340234920938420</label>
          </div>
        </div>

        <div className="calender">
          <CalendarHeatmap
            startDate={new Date("2022-01-01")}
            endDate={new Date("2023-01-01")}
            values={[
              { date: "2023-01-01", count: 12 },
              { date: "2022-06-10", count: 120 },
              { date: "2022-02-09", count: 300 },
              { date: "2022-02-13", count: 800 },
              { date: "2022-03-09", count: 300 },
              { date: "2022-07-09", count: 300 },
              { date: "2022-05-01", count: 12 },
            ]}
            style={{ width: "500px", height: "200px" }}
          />
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

      <Tabular rows={txt.rows} columns={txt.columns} />
    </div>
  );
};
