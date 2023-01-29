import React from "react";
import ReactEcharts from "echarts-for-react";

export const SimpleChart = (props) => {
  var x = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  if (props.x != undefined) {
    x = props.x;
  }

  // data of x
  const categories = {
    type: "category",
    data: x,
    axisTick: {
      show: true,
    },
    axisLine: {
      show: true,
    },
  };

  const valueType = {
    type: "value",
    axisTick: {
      show: true,
    },
    axisLine: {
      show: true,
    },
  };

  // data of y
  var seriesData = [400, 300, 350, 200, 280];
  if (props.y != undefined) {
    seriesData = props.y;
  }

  const options = {
    // title: [{ text: "大标题", left: "10", top: "-20" }],
    grid: { top: 20, right: 40, bottom: 20, left: 40, containLabel: true },
    xAxis: props.type !== "hbar" ? categories : valueType,
    yAxis:
      props.type === "hbar"
        ? [
            categories,
            {
              type: "category",
              data: seriesData,
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
            },
          ]
        : valueType,
    legend: {
      orient: "horizontal",
      right: 10,
      top: "center",
      icon: "rect",
      data: [{ name: "line-A", icon: "rect" }],
    },
    series: [
      {
        data: seriesData,
        // bar or line
        type: props.type === "hbar" ? "bar" : props.type,
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div className="w-full relative">
      <div className=" absolute top-5 left-10 font-bold">{props.title}</div>
      <ReactEcharts
        option={options}
        className={props.className}
        style={props.style}
        theme="chalk"
      ></ReactEcharts>
    </div>
  );
};
