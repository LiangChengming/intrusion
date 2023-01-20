import React, { useRef, useState } from "react";

import "./css/frame.css";
import finger from "../assets/id.svg";
import valient from "../assets/valient.svg";
import person from "../assets/person.svg";
import phone from "../assets/phone.svg";
import vasion from "../assets/vasion.svg";

import facebook_logo from "../assets/facebook-logo.png";
import ins_logo from "../assets/ins-logo.png";
import youtube_logo from "../assets/youtube-logo.png";
import twitter_logo from "../assets/twitter-logo.png";
import raddit_logo from "../assets/raddit-logo.png";
import redbook_logo from "../assets/redbook-logo.png";
import weibo_logo from "../assets/weibo-logo.png";
import zhihu_logo from "../assets/zhihu-logo.png";
import blibli_logo from "../assets/blibli-logo.png";
import tiktok_logo from "../assets/tiktok-logo.png";
import kuaishou_logo from "../assets/kuaishou-logo.png";
import gallery from "../assets/gallery.svg";
import { ChartById } from "./by_id";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  Switch,
  useNavigate,
} from "react-router-dom";

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
    },
    {
      primary: "人工智能回复",
      categories: [
        { name: "舆论引导", value: "news", icon: valient },
        { name: "其他/Oth", value: "oths", icon: valient },
      ],
      icon: finger,
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
        { name: "raddit", value: "raddit", icon: raddit_logo },
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
            // console.log(event.currentTarget.attributes.name.value);
            // const url = `/id/${event.currentTarget.attributes.name.value}/${target.current.app}/`;
            const url = `id/${event.currentTarget.attributes.name.value}/`;
            console.log("url=", url);
            navigate(url);
          }}
        >
          <img src={y.icon} className="v-info-icon" />
          <label className="v-info-name"> {y.name}</label>
        </div>
      );
    });
    return (
      <div className="v-info-main" key={x.primary}>
        <div className="v-info-main-type">
          <img src={x.icon} className="v-info-icon"></img>
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
            y.value == target.current.app
              ? "v-info-type v-sub-active"
              : "v-info-type"
          }
          key={y.value}
        >
          <img src={y.icon} className="v-info-icon" />
          <div className="v-info-name">{y.name}</div>
        </div>
      );
    });
    return subitem;
  });

  return (
    <div className="main-frame">
      <div className="v-bar">
        <div className="logo">
          <img src={vasion} />
        </div>
        {ls1}
      </div>

      <div className="v-sub-bar">
        <img src={gallery} className="v-sub-logo"></img>
        {ls2}
      </div>

      <div className="main-content">
        <Routes>
          <Route exact path="id/:x/" element={<ChartById />} />
          <Route path="/" element={<ChartById />} />
        </Routes>
      </div>
    </div>
  );
};
