import React from "react";
import "./css/trend.css";
import { SimpleChart } from "./simpleChart";
import { GeoChart } from "./geo_map";
import { SummaryCard } from "./summaryCard";
import {
  opinion_all_count,
  opinion_series_data,
  opinon_region_counts,
} from "./core_data.js";
import ShareIcon from "@mui/icons-material/Share";
import { PieChart } from "./pieChart";

export const TrendSummary = (props) => {
  var splitByName = {};
  opinion_series_data.map((e) => {
    if (e.name in splitByName) {
      splitByName[e.name].data.push(parseInt(e.count));
    } else {
      splitByName[e.name] = { name: e.name, data: [parseInt(e.count)] };
    }
  });
  var series = [];
  var ks = Object.keys(splitByName).sort();
  ks.map((k) => {
    series.push(splitByName[k]);
  });

  const axis = {
    x: [...new Set(opinion_series_data.map((e) => e.time))].sort(),
    y: series,
  };

  const data = {
    name: "整体舆情(过去5天)",
    value: opinion_all_count[0].count,
    detail: opinion_all_count.map((x) => {
      return { name: x.name, value: x.count };
    }),
    icon: <ShareIcon />,
  };

  return (
    <div className="trend-wrapper">
      <div className="trend-summary-info">
        <SummaryCard className="id-card-type-3 bg-shade-gray/20" data={data} />
        <SimpleChart
          multiSerial={true}
          type="line"
          title="舆情时序数据"
          style={{ height: "500px", width: "100%" }}
          className="bg-shade-gray/20"
          x={axis.x}
          y={axis.y}
        />
      </div>
      <div className="trend-summary-info">
        <PieChart
          title="24小时舆情"
          style={{
            width: "500px",
            height: "500px",
            maxWidth: "500px",
            maxHeight: "500px",
            minWidth: "500px",
            minHeight: "500px",
            backgroundColor: "#eeeeee80",
          }}
          data={opinion_all_count
            .filter((e) => e.name != "整体")
            .map((e) => ({
              name: e.name,
              value: e.count,
            }))}
        />
        {/* <SimpleChart
          type="pie"
          style={{
            height: "500px",
            minHeight: "500px",
            minWidth: "500px",
            width: "500px",
          }}
          className=" bg-shade-gray/20"
        /> */}
        <GeoChart
          style={{
            height: "500px",
            width: "100%",
            backgroundColor: "#eeeeee80",
          }}
          data={opinon_region_counts.map((e) => ({
            name: e.region,
            value: e.count,
          }))}
          title="舆情地域数据"
        />
      </div>
    </div>
  );
};
