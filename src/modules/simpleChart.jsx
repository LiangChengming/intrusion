import React from "react";
import ReactEcharts from "echarts-for-react";

export const SimpleChart = (props) => {
  // data of x
  const categories = {
    type: "category",
    data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
  };

  const valueType = {
    type: "value",
  };

  // data of y
  const seriesData = [400, 300, 350, 200, 280];

  const options = {
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
    <ReactEcharts
      option={options}
      className={props.className}
      style={props.style}
      theme="chalk"
    ></ReactEcharts>
  );
};
