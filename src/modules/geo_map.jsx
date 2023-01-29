import React from "react";
import ReactEcharts from "echarts-for-react";

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

const onEvents = {
  click: (params) => {
    const { seriesIndex, data } = params;
    if (seriesIndex === 0) return;

    console.log(`点击了${data.name}, 值为${data.value[2]}`);
  },
};

export const GeoChart = (props) => {
  var data = mapData;
  if (props.data != undefined) {
    data = props.data;
  }

  const values = data.map((i) => i.value);
  var minValue = Math.min(...values);
  var maxValue = Math.max(...values);

  console.log("min=", minValue);
  console.log("max=", maxValue);

  console.log("data=", data);

  const option = {
    geo: {
      map: "china",
      label: {
        normal: {
          show: false,
          textStyle: {
            color: "#1a1a1a",
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
          areaColor: "#E7EFE5",
          borderWidth: 0.2,
        },
        emphasis: {
          areaColor: "#EF9F46",
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
      show: true,
      type: "continuous",
      min: minValue,
      max: maxValue,
      right: 10,
      top: 10,
      seriesIndex: [0],
      color: ["#FFFFFF", "#CEE3C3", "#97C47E", "#4B8F27"],
      textStyle: {
        color: "#00000",
      },
      calculable: true,
      zlevel: 2,
    },
    series: [
      {
        name: "foo",
        type: "map",
        geoIndex: 0,
        data: data,
        zlevel: 3,
      },
      // {
      //   name: "bar",
      //   type: "effectScatter",
      //   animation: false,
      //   data: pointData,
      //   coordinateSystem: "geo",
      //   showEffectOn: "render",
      //   rippleEffect: {
      //     scale: 3,
      //     brushType: "fill",
      //   },
      //   itemStyle: {
      //     normal: {
      //       color: "#efe7e5",
      //       shadowBlur: 5,
      //       shadowColor: "red",
      //     },
      //   },
      //   zlevel: 1,
      // },
    ],
  };

  return (
    <div className={props.className}>
      <div className=" absolute top-5 left-10 font-bold">{props.title}</div>
      <ReactEcharts
        style={{ padding: "10px" }}
        option={option}
        onEvents={onEvents}
        autoResize={false}
        theme="chalk"
      />
    </div>
  );
};
