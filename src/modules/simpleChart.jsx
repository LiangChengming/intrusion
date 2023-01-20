import React from "react";
import ReactEcharts from "echarts-for-react";

export const SimpleChart = (props) => {
  const categories = {
    type: "category",
    data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
  };
  const valueType = {
    type: "value",
  };

  const seriesData = [400, 300, 350, 200, 280];

  const options = {
    grid: { top: 20, right: 40, bottom: 20, left: 40, containLabel: true },
    xAxis: props.type != "hbar" ? categories : valueType,
    yAxis: props.type == "hbar" ? categories : valueType,
    series: [
      {
        data: seriesData,
        // bar or line
        type: props.type == "hbar" ? "bar" : props.type,
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
    ></ReactEcharts>
  );
};
