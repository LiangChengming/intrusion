import React from "react";
import { GeoChart } from "./geo_map";
import { SimpleChart } from "./simpleChart";
import { LineAndBarChart } from "./lineAndBar";
import { useParams, useNavigate } from "react-router-dom";
import { Tabular } from "./table";

import { succ } from "../toast.js";
import {
  id_list,
  region_counts,
  sex_tgi,
  age_tgi,
  sex_counts,
  age_counts,
} from "./core_data.js";
import "./css/by_id.css";
import "./css/common.css";

export const ChartById = (props) => {
  let { category, app } = useParams();
  const navigate = useNavigate();

  const tbdata = {
    rows: id_list,
    columns: [
      {
        // field: "id",
        headerName: "账号信息",
        width: 250,
        editable: false,
        renderCell: (params) => {
          const rowval = params.row;
          return (
            <div className="w-[400px] flex justify-start items-center">
              <img
                src={rowval.avatar}
                key={rowval.id}
                alt=""
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "5px",
                }}
              ></img>
              <label style={{ paddingLeft: "15px" }}>{params.id}</label>
            </div>
          );
        },
      },
      {
        field: "risk",
        headerName: "风险值",
        // type: "number",
        width: 100,
        editable: true,
        headerAlign: "left",
      },
      {
        field: "readCount",
        headerName: "阅读量",
        // type: "number",
        width: 100,
        editable: true,
        headerAlign: "left",
      },
      {
        field: "interactiveCount",
        headerName: "交互数量",
        // type: "number",
        width: 100,
        editable: true,
        headerAlign: "left",
        flex: 1,
      },
    ],
  };

  // 当前页面Table支持的操作
  const table_actions = (rowval) => {
    const onClick = (e) => {
      // toast.success("Clicked !");
      succ("指令下发执行中 ... ");
    };
    const navito = (event) => {
      const url = `detail/${rowval.id}/`;
      navigate(url);
    };
    return (
      <div className="table-row-action-area">
        <a
          className="table-row-action-button"
          // style={{ backgroundColor: "#FC7300" }}
          onClick={onClick}
        >
          封号
        </a>
        <a
          className="table-row-action-button"
          // style={{ backgroundColor: "#1F8A70" }}
          onClick={onClick}
        >
          禁言
        </a>
        <a
          className="table-row-action-button"
          // style={{ backgroundColor: "#5867F2" }}
          onClick={onClick}
        >
          限流
        </a>

        <a
          className="table-row-action-button"
          // style={{ backgroundColor: "#FF9500", color: "#FFF" }}
          onClick={navito}
        >
          详情
        </a>
      </div>
    );
  };

  const genBarDataWithTgi = (data, tgi) => {
    var x = [
      ...new Set(
        data.map((e) => {
          return e.name;
        })
      ),
    ].sort();

    var splitBykey = {};
    data.map((e) => {
      if (e.key in splitBykey) {
        splitBykey[e.key].data.push(parseInt(e.count));
      } else {
        splitBykey[e.key] = {
          name: e.key,
          type: "bar",
          yAxisIndex: 0,
          data: [parseInt(e.count)],
        };
      }
    });
    var y = [];
    var ks = Object.keys(splitBykey).sort();
    ks.map((k) => {
      y.push(splitBykey[k]);
    });

    y.push({
      name: "TGI",
      type: "line",
      yAxisIndex: 1,
      data: x.map((e) => {
        var v = 0;
        for (var k = 0; k < tgi.length; k++) {
          if (tgi[k].name == e) {
            v = tgi[k].tgi;
          }
        }
        return v;
      }),
    });

    return { x, y };
  };

  const sexCount = genBarDataWithTgi(sex_counts, sex_tgi);
  const ageCount = genBarDataWithTgi(age_counts, age_tgi);

  console.log("sexCount=", sexCount);

  return (
    <div className="id-chart-wrapper">
      <div className="w-full flex justify-start align-middle gap-2 px-5">
        <LineAndBarChart
          className="bg-shade-gray/20"
          style={{ width: "50%", height: "500px" }}
          title="性别分布"
          x={sexCount.x}
          y={sexCount.y}
        />
        <SimpleChart
          type="hbar"
          className="bg-shade-gray/20"
          style={{ width: "50%", height: "500px" }}
          title="地域分布"
          x={region_counts.map((i) => i.region)}
          y={region_counts.map((i) => i.count)}
        />
      </div>
      <div className="w-full flex justify-start align-middle gap-2 px-5">
        {/* <SimpleChart
          type="bar"
          className="bg-shade-gray/20"
          style={{ width: "50%", height: "500px" }}
          title="年龄分布"
          x={age_counts.map((i) => i.name)}
          y={age_counts.map((i) => i.count)}
        /> */}

        <LineAndBarChart
          className="bg-shade-gray/20"
          style={{ width: "50%", height: "500px" }}
          title="年龄分布"
          x={ageCount.x}
          y={ageCount.y}
        />
        <GeoChart
          style={{
            width: "50%",
            height: "500px",
            backgroundColor: "#eeeeee80",
          }}
          data={region_counts.map((e) => {
            return {
              name: e.region,
              value: e.count,
            };
          })}
          title="账号地域分布"
        />
      </div>

      <div className="w-full flex justify-start align-middle gap-2 px-5">
        <Tabular
          buttons={table_actions}
          rows={tbdata.rows}
          columns={tbdata.columns}
        />
      </div>
    </div>
  );
};
