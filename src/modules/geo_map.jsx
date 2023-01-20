import React from "react";
import { render } from "react-dom";
import echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import china from "echarts/map/json/china.json";

echarts.registerMap("china", china);

const mapData = [
  { name: "辽宁", value: 5 },
  { name: "黑龙江", value: 4 },
  { name: "湖南", value: 2 },
  { name: "安徽", value: 6 },
  { name: "山东", value: 5 },
  { name: "新疆", value: 4 },
  { name: "江苏", value: 21 },
  { name: "浙江", value: 76 },
  { name: "山西", value: 44 },
  { name: "内蒙古", value: 76 },
  { name: "陕西", value: 74 },
  { name: "香港", value: 40 },
  { name: "澳门", value: 20 },
];

export const pointData = [
  { name: "point1", value: [125.03, 46.58, 20] },
  { name: "point2", value: [114.31, 30.52, 40] },
  { name: "point3", value: [117.27, 31.86, 25] },
  { name: "point4", value: [113, 28.21, 70] },
  { name: "point5", value: [119.57, 39.95, 30] },
];

const option = {
  geo: {
    map: "china",
    label: {
      normal: {
        show: true,
        textStyle: {
          color: "#000",
          fontSize: 9,
        },
      },
      emphasis: {
        show: true,
        textStyle: {
          color: "#feffff",
          fontSize: 10,
        },
      },
    },
    roam: false,
    zoom: 1.2,
    itemStyle: {
      normal: {
        areaColor: "#eee",
        borderWidth: 0.2,
      },
      emphasis: {
        areaColor: "#5867F2",
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 20,
        borderWidth: 0,
        // shadowColor: "rgba(0, 0, 0, 0.5)",
      },
    },
    zlevel: 1,
  },
  visualMap: {
    show: false,
    type: "continuous",
    min: 0,
    max: 100,
    right: 10,
    top: 10,
    seriesIndex: [0],
    color: ["#FFFFFF", "#CFB813", "#68FB00"],
    textStyle: {
      color: "#feffff",
    },
    calculable: false,
    zlevel: 2,
  },
  series: [
    {
      name: "foo",
      type: "map",
      geoIndex: 0,
      data: mapData,
      zlevel: 3,
    },
    {
      name: "bar",
      type: "effectScatter",
      animation: false,
      data: pointData,
      coordinateSystem: "geo",
      showEffectOn: "render",
      rippleEffect: {
        scale: 3,
        brushType: "fill",
      },
      itemStyle: {
        normal: {
          color: "#efe7e5",
          shadowBlur: 5,
          shadowColor: "red",
        },
      },
      zlevel: 1,
    },
  ],
};

const onEvents = {
  click: (params) => {
    const { seriesIndex, data } = params;
    if (seriesIndex === 0) return;

    console.log(`点击了${data.name}, 值为${data.value[2]}`);
  },
};

export const GeoChart = (props) => {
  return (
    <ReactEcharts
      className={props.className}
      style={props.style}
      option={option}
      onEvents={onEvents}
      autoResize={false}
    />
  );
};
