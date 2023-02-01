import React from "react";
import ReactEcharts from "echarts-for-react";

export const LineAndBarChart = (props) => {
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

  const valueType = [
    {
      // name: props.title,
      type: "value",
      axisTick: {
        show: true,
      },
      axisLine: {
        show: true,
      },
    },
    {
      name: "TGI",
      type: "value",
      axisTick: {
        show: true,
      },
      axisLine: {
        show: true,
      },
    },
  ];

  // data of y
  var seriesData = [400, 300, 350, 200, 280];
  if (props.y != undefined) {
    seriesData = props.y;
  }

  const options = {
    title: {
      text: props.title,
      top: "20px",
      left: "30px",
    },
    calculable: true,
    legend: {
      icon: "circle",
      x: "center",
      y: "20px",
      data: seriesData.map((t) => t.key),
      textStyle: {
        color: "#000",
      },
    },

    xAxis: categories,
    yAxis: valueType,
    series: seriesData.map((serial) => {
      return {
        name: serial.name,
        data: serial.data,
        type: serial.type,
        yAxisIndex: serial.yAxisIndex,
        smooth: true,
      };
    }),
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
    />
  );
};
