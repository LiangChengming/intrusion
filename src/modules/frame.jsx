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
} from "react-router-dom";

export const MainFrame = () => {
  const [target, setTarget] = useState({ cate: "/id/phone/", app: "weibo" });

  const menus = [
    {
      primary: "ID检测",
      categories: [
        { name: "电话诈骗", url: "/id/phone/", icon: phone },
        { name: "邪教组织", url: "/id/person/", icon: person },
        { name: "恐怖暴力", url: "/id/valient/", icon: valient },
      ],
      icon: finger,
    },
    {
      primary: "人工智能回复",
      categories: [
        { name: "舆论引导", url: "/ai/news/", icon: valient },
        { name: "其他/Oth", url: "/ai/oths/", icon: valient },
      ],
      icon: finger,
    },
  ];

  const subMenus = [
    {
      primary: "国内",
      categories: [
        { name: "微博", url: "weibo", icon: weibo_logo },
        { name: "抖音", url: "tiktok", icon: tiktok_logo },
        { name: "快手", url: "kuaishou", icon: kuaishou_logo },
        { name: "blibli", url: "blibli", icon: blibli_logo },
        { name: "知乎", url: "zhihu", icon: zhihu_logo },
      ],
      icon: facebook_logo,
    },
    {
      primary: "国际",
      categories: [
        { name: "facebook", url: "facebook", icon: facebook_logo },
        { name: "twitter", url: "twitter", icon: twitter_logo },
        { name: "raddit", url: "raddit", icon: raddit_logo },
        { name: "youtube", url: "youtube", icon: youtube_logo },
        { name: "instgram", url: "instgram", icon: ins_logo },
      ],
      icon: facebook_logo,
    },
  ];

  const ls1 = menus.map((x) => {
    const subitem = x.categories.map((y) => {
      return (
        <div
          className={
            y.url == target.cate ? "v-info-type v-bar-active" : "v-info-type"
          }
          value={y.url}
          key={y.url}
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
            y.url == target.app ? "v-info-type v-sub-active" : "v-info-type"
          }
          key={y.url}
        >
          <img src={y.icon} className="v-info-icon" />
          <div className="v-info-name">{y.name}</div>
        </div>
      );
    });
    return (
      <div className="v-sub-bar" key={x.primary}>
        {subitem}
      </div>
    );
  });

  return (
    <Router>
      <div className="main-frame">
        <div className="v-bar">
          <div className="logo">
            <img src={vasion} />
          </div>
          {ls1}
        </div>

        <div className="v-sub-bar">
          <img src={gallery} className="v-sub-logo"></img>

          <div className="v-info-type v-sub-active">
            <img src={weibo_logo} className="v-info-icon" />
            <div className="v-info-name">微博</div>
          </div>

          <div className="v-info-type ">
            <img src={tiktok_logo} className="v-info-icon" />
            <div className="v-info-name">抖音</div>
          </div>

          <div className="v-info-type active">
            <img src={kuaishou_logo} className="v-info-icon" />
            <div className="v-info-name">快手</div>
          </div>

          <div className="v-info-type">
            <img src={redbook_logo} className="v-info-icon" />
            <div className="v-info-name">小红书</div>
          </div>

          <div className="v-info-type">
            <img src={blibli_logo} className="v-info-icon" />
            <div className="v-info-name">blibli</div>
          </div>

          <div className="v-info-type">
            <img src={zhihu_logo} className="v-info-icon" />
            <div className="v-info-name">知乎</div>
          </div>

          <div className="v-info-type">
            <img src={facebook_logo} className="v-info-icon" />
            <div className="v-info-name">Facebook</div>
          </div>

          <div className="v-info-type">
            <img src={youtube_logo} className="v-info-icon" />
            <div className="v-info-name">youtube</div>
          </div>

          <div className="v-info-type">
            <img src={ins_logo} className="v-info-icon" />
            <div className="v-info-name">instgram</div>
          </div>

          <div className="v-info-type">
            <img src={twitter_logo} className="v-info-icon" />
            <div className="v-info-name">twitter</div>
          </div>

          <div className="v-info-type">
            <img src={raddit_logo} className="v-info-icon" />
            <div className="v-info-name">raddit</div>
          </div>
        </div>

        <div className="main-content">
          <Routes>
            <Route
              extact
              path="/"
              action={(request) => {
                // await api data
                console.log("invoke ajax: for data");
              }}
              element={<ChartById />}
            />

            <Route
              extact
              path="/ai"
              action={(request) => {
                // await api data
              }}
              element={<ChartById />}
            />
          </Routes>
        </div>
        {/* <div className="h-bar">
          <div className="h-tab-list">
        </div>
        </div>
      </div> */}
      </div>
    </Router>
  );
};
