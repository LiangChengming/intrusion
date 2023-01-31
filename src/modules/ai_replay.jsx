import React, { useState } from "react";
import { Tabular } from "./table";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { weibo_auto_reply } from "./core_data.js";
import { EventNote } from "@mui/icons-material";
import { toast } from "react-toastify";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export const AiReplyPage = (props) => {
  const [rows, setRows] = useState([]);
  var poster = weibo_auto_reply.map((item, i) => {
    return (
      <div
        className="h-[220px] min-h-[220px] min-w-[500px] bg-white p-2 m-2 box-border hover:bg-pastel-green"
        onClick={(ev) => {
          setRows(
            weibo_auto_reply[ev.currentTarget.attributes.offset.value].comments
          );
        }}
        key={i}
        offset={i}
      >
        <div className=" w-full flex justify-between items-center">
          <div className="flex justify-start items-center">
            <img
              src={item.avatar}
              className="h-[50px] w-[50px]  mr-3 rounded-full"
            />
            <div className="flex flex-col items-start justify-start">
              <label>{item.name}</label>
              <label className=" text-xs text-shade-black/30">
                {item.time}
              </label>
            </div>
          </div>
          <div
            className=" w-[80px] h-[30px] text-sm flex justify-center items-center bg-earth-green/30 rounded-md hover:bg-earth-green/60 cursor-pointer"
            onClick={(ev) => {
              ev.stopPropagation();
              toast.success("Replying via AIGC");
            }}
          >
            自动回复
          </div>
        </div>

        <div className=" pl-16 text-shade-black/60 h-[130px] pr-5 cursor-pointer">
          {item.weibo}
        </div>
        <div className="w-full h-[20px] flex justify-between items-center px-20">
          <div>
            <IosShareOutlinedIcon
              sx={{ color: "#ccc", width: "15px", height: "15px" }}
            />
            <label className="text-[#CCC] text-xs ml-2 ">
              {getRandomInt(0, 50)}
            </label>
          </div>
          <div>
            <ChatBubbleOutlineOutlinedIcon
              sx={{ color: "#ccc", width: "15px", height: "15px" }}
            />
            <label className="text-[#CCC] text-xs ml-2 ">
              {getRandomInt(1, 20)}
            </label>
          </div>
          <div>
            <ThumbUpOutlinedIcon
              sx={{ color: "#ccc", width: "15px", height: "15px" }}
            />
            <label className="text-[#CCC] text-xs ml-2 ">
              {getRandomInt(10, 300)}
            </label>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full h-full flex justify-start  items-center">
      <div className=" w-[800px] min-w-[500px] h-full bg-shade-gray overflow-auto">
        {poster}
      </div>
      <div className=" w-full h-full relative ">
        <Tabular
          autoHeight="calc(100% - 40px)"
          rows={rows.map((r, i) => {
            return { id: i, comment: r };
          })}
          columns={[
            {
              field: "id",
              headerName: "ID",
              width: 100,
              editable: false,
            },
            {
              field: "comment",
              headerName: "内容",
              width: 100,
              flex: 1,
              editable: false,
            },
          ]}
        />
      </div>
    </div>
  );
};
