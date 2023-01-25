import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./css/common.css";
import "./css/frame.css";
import finger from "../assets/id.svg";
import valient from "../assets/valient.svg";
import person from "../assets/person.svg";
import phone from "../assets/phone.svg";
import vasion from "../assets/vasion.svg";

import facebook_logo from "../assets/facebook.svg";
import ins_logo from "../assets/instgram.svg";
import youtube_logo from "../assets/youtube.svg";
import twitter_logo from "../assets/twitter.svg";
import reddit_logo from "../assets/reddit.svg";
import redbook_logo from "../assets/xiaohongshu.svg";
import weibo_logo from "../assets/weibo.svg";
import zhihu_logo from "../assets/zhihu.svg";
import blibli_logo from "../assets/bilibili.svg";
import tiktok_logo from "../assets/tiktok.svg";
import kuaishou_logo from "../assets/kuaishou.svg";

// import gallery from "../assets/gallery.svg";
import { ChartById } from "./by_id";
import { TrendSummary } from "./trend";

import { Routes, Route, useNavigate } from "react-router-dom";
import { DetailPage } from "./detail";

export const MainFrame = () => {
  const target = useRef({ cate: "phone", app: "weibo" });
  const navigate = useNavigate();

  const menus = [
    {
      primary: "ID检测",
      categories: [
        { name: "电话诈骗", value: "phone", icon: phone },
        { name: "邪教组织", value: "person", icon: person },
        { name: "恐怖暴力", value: "valient", icon: valient },
      ],
      icon: finger,
      catalog: "id",
    },
    {
      primary: "AI智能回复",
      categories: [
        { name: "舆论引导", value: "news", icon: valient },
        { name: "其他/Oth", value: "oths", icon: valient },
      ],
      icon: finger,
      catalog: "trend",
    },
  ];

  const subMenus = [
    {
      primary: "国内",
      categories: [
        { name: "微博", value: "weibo", icon: weibo_logo },
        { name: "抖音", value: "tiktok", icon: tiktok_logo },
        { name: "快手", value: "kuaishou", icon: kuaishou_logo },
        { name: "blibli", value: "blibli", icon: blibli_logo },
        { name: "知乎", value: "zhihu", icon: zhihu_logo },
        { name: "小红书", value: "redbook", icon: redbook_logo },
      ],
      icon: facebook_logo,
    },
    {
      primary: "国际",
      categories: [
        { name: "facebook", value: "facebook", icon: facebook_logo },
        { name: "twitter", value: "twitter", icon: twitter_logo },
        { name: "reddit", value: "reddit", icon: reddit_logo },
        { name: "youtube", value: "youtube", icon: youtube_logo },
        { name: "instgram", value: "instgram", icon: ins_logo },
      ],
      icon: facebook_logo,
    },
  ];

  const ls1 = menus.map((x) => {
    const subitem = x.categories.map((y) => {
      return (
        <div
          className={
            y.value === target.current.cate
              ? "v-info-type v-bar-active"
              : "v-info-type"
          }
          name={y.value}
          key={y.value}
          onClick={(event) => {
            target.current.cate = event.currentTarget.attributes.name.value;
            const url = `/${x.catalog}/${event.currentTarget.attributes.name.value}/${target.current.app}/`;
            navigate(url);
          }}
        >
          <img alt="Icon" src={y.icon} className="v-info-icon" />
          <label className="v-info-name"> {y.name}</label>
        </div>
      );
    });
    return (
      <div className="v-info-main" key={x.primary}>
        <div className="v-info-main-type">
          <img alt="Icon" src={x.icon} className="v-info-icon"></img>
          <label className="v-info-name">{x.primary}</label>
        </div>
        {subitem}
      </div>
    );
  });

  const ls2 = subMenus.map((x) => {
    const subitem = x.categories.map((y) => {
      return (
        <div
          className={
            y.value === target.current.app
              ? "h-info-type h-sub-active"
              : "h-info-type"
          }
          name={y.value}
          key={y.value}
          onClick={(event) => {
            target.current.app = event.currentTarget.attributes.name.value;
            const url = `/id/${target.current.cate}/${event.currentTarget.attributes.name.value}/`;
            navigate(url);
          }}
        >
          <img alt="Icon" src={y.icon} className="h-info-icon" />
          <div className="h-info-name">{y.name}</div>
        </div>
      );
    });
    return subitem;
  });

  return (
    <div className="main-frame">
      <div className="v-bar">
        <div className="logo">
          <img alt="Icon" src={vasion} />
        </div>
        {ls1}
      </div>

      <div className="main-content">
        <div className="h-sub-bar">{ls2}</div>
        <Routes>
          <Route path="/" element={<ChartById />} />
          <Route
            exact
            path="trend/:category/:app/"
            element={<TrendSummary />}
          />
          <Route exact path="id/:category/:app/" element={<ChartById />} />
          <Route
            exact
            path="id/:category/:app/detail/:uid/"
            element={<DetailPage />}
          />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
};
