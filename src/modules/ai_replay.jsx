import React from "react";
import avatar from "../assets/avatar.png";
import { Tabular } from "./table";

export const AiReplayPage = (props) => {
  const fake = {
    nickname: "fake user",
    avatar: avatar,
    lorem:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minus quis numquam voluptate temporibus sunt suscipit minima? Velit molestias, iusto dolorum veritatis eligendi et, quas quaerat, exercitationem quidem blanditiis quisquam.",
    share: 30,
    comment: 7,
    like: 18,
    pubtime: "2022/01/30 来自 vivo Y 70s 5G",
  };

  var poster = [];
  for (var i = 0; i < 10; i++) {
    poster.push(
      <div className="h-[220px] min-h-[220px] bg-white p-2 m-2 box-border hover:bg-pastel-green">
        <div className=" w-full flex justify-between items-center">
          <div className="flex justify-start items-center">
            <img
              src={fake.avatar}
              className="h-[50px] w-[50px]  mr-3 rounded-full"
            />
            <div className="flex flex-col items-start justify-start">
              <label>{fake.nickname}</label>
              <label className=" text-xs text-shade-black/30">
                {fake.pubtime}
              </label>
            </div>
          </div>
          <div className=" w-[80px] h-[30px] text-sm flex justify-center items-center bg-earth-green/30 rounded-md hover:bg-earth-green/60 cursor-pointer">
            自动回复
          </div>
        </div>

        <div className=" pl-16 text-shade-black/80">{fake.lorem}</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-start  items-center">
      <div className=" w-[800px] h-full bg-shade-gray overflow-auto">
        {poster}
      </div>
      <div className=" w-full h-full relative ">
        {/* <div className=" absolute top-5 right-10 w-[200px] h-[40px] bg-earth-green/30 flex justify-center items-center text-shade-black/80 rounded-md z-30 cursor-pointer hover:bg-earth-green">
          使用选中内容回复
        </div> */}
        <Tabular autoHeight="calc(100% - 60px)" />
      </div>
    </div>
  );
};
