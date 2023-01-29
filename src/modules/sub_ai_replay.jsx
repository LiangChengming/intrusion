import React from "react";
import avatar from "../assets/avatar.png";
import { Tabular } from "./table";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

export const SubAiReplayPage = (props) => {
  const fakes = [
    {
      avatar,
      nickname: "小肚子二三事",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ut accusantium amet distinctio?",
      level: 1,
      sign: "23-1-6 08:36 来自上海",
      subreplays: [
        {
          nickname: "开锁师傅",
          value: "adipisicing elit. Eaque!!!",
          sign: "23-1-6 08:36 来自南京",
        },
        {
          nickname: "就是有钱就是造",
          value: "Lorem ipsum dolor sit........",
          sign: "23-1-6 08:36 来自南京",
        },
      ],
    },
    {
      avatar,
      nickname: "TaoziRay",
      value: "Eaque, ut accusantium amet distinctio?",
      level: 1,
      sign: "23-1-6 08:36 来自上海",
      subreplays: [],
    },
    {
      avatar,
      nickname: "仗剑走天涯",
      value: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      level: 1,
      sign: "23-1-6 08:36 来自上海",
      subreplays: [],
    },
    {
      avatar,
      nickname: "开锁吴师傅",
      value: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      level: 1,
      sign: "23-1-6 08:36 来自上海",
      subreplays: [],
    },
  ];

  var comments = [];
  for (var j = 0; j < 3; j++) {
    var subcomments = [];
    for (var i = 0; i < fakes.length; i++) {
      const fake = fakes[i];

      var level2comments = [];
      for (var k = 0; k < fake.subreplays.length; k++) {
        const subfake = fake.subreplays[k];
        level2comments.push(
          <div className="mt-3">
            <div className="flex justify-start items-center text-xs">
              <label className=" text-neon-red">{subfake.nickname}:</label>
              <label>{subfake.value}</label>
            </div>
            <div className="text-xs text-[#aaa]">{subfake.sign}</div>
          </div>
        );
      }

      subcomments.push(
        <div className="flex flex-col justify-start items-start">
          <div className="flex justify-start items-center m-3">
            <img
              src={fake.avatar}
              className=" rounded-full w-[35px] h-[35px]"
            />
            <div className="flex justify-start items-start flex-col pl-3">
              <div className="flex justify-start items-center text-xs">
                <label className=" text-neon-red">{fake.nickname}:</label>
                <label>{fake.value}</label>
              </div>
              <div className="text-xs text-[#aaa]">{fake.sign}</div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-col pl-3 border-l-2 ml-16">
            {level2comments}
          </div>
        </div>
      );
    }
    comments.push(
      <div className="m-2 bg-white flex p-5 justify-start flex-col " key={i}>
        {subcomments}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-start items-center">
      <div className="w-[800px] min-w-[800px] bg-shade-gray/50 h-full">
        {comments}
      </div>
      <div className="w-full h-full">
        <Tabular autoHeight="100%" />
      </div>
    </div>
  );
};
