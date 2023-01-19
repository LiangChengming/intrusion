import React, { useRef } from "react";
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
import { ChartById } from "./by_id";

export const MainFrame = () => {
  //   const items = [].map(() => {});
  //   const subitems = [].map(() => {});

  return (
    <div className="main-frame">
      <div className="v-bar">
        <div className="logo">
          <img src={vasion} />
        </div>
        <div className="v-info-type v-bar-active">
          <img src={finger} className="v-info-icon " />
          <label className="v-info-name"> ID检测</label>
        </div>
        <div className="v-info-type">
          <img src={person} className="v-info-icon" />
          <label className="v-info-name"> 邪教组织 </label>
        </div>

        <div className="v-info-type">
          <img src={phone} className="v-info-icon" />
          <label className="v-info-name"> 电话诈骗 </label>
        </div>

        <div className="v-info-type">
          <img src={valient} className="v-info-icon" />
          <label className="v-info-name"> 恐怖暴力</label>
        </div>

        <div className="v-info-type">
          <img src={valient} className="v-info-icon" />
          <label className="v-info-name"> 舆论引导</label>
        </div>

        <div className="v-info-type">
          <img src={valient} className="v-info-icon" />
          <label className="v-info-name"> 其他</label>
        </div>
      </div>

      <div className="v-sub-bar">
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
      </div>

      <div className="main-content">
        <ChartById />
      </div>
      {/* <div className="h-bar">
          <div className="h-tab-list">
        </div>
        </div>
      </div> */}
    </div>
  );
};
