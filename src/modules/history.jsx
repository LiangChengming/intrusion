import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  ToggleButton,
  Box,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Tabular } from "./table";

export const HistoryPage = (props) => {
  const [period, setPeriod] = useState("week");

  return (
    <Box className="h-full flex justify-center items-center flex-col w-full">
      <Box className="bg-shade-gray/20 w-full  flex justify-center items-center">
        <ToggleButtonGroup
          className="mt-5"
          value={period}
          exclusive
          onChange={(event, newVal) => {
            console.log(newVal);
            setPeriod(newVal);
          }}
          color="primary"
        >
          <ToggleButton sx={{ width: "250px" }} value="today">
            今日
          </ToggleButton>
          <ToggleButton sx={{ width: "250px" }} value="week">
            本周
          </ToggleButton>
          <ToggleButton sx={{ width: "250px" }} value="month">
            本月
          </ToggleButton>
          <ToggleButton sx={{ width: "250px" }} value="year">
            本年
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box className=" relative w-full h-full">
        <Typography className=" absolute top-3 left-20">
          最新敏感内容
        </Typography>
        <Tabular autoHeight="100%"></Tabular>
      </Box>
      <Box className=" relative w-full  h-full">
        <Typography className=" absolute top-3 left-20">
          全部舆情内容
        </Typography>
        <Tabular autoHeight="100%"></Tabular>
      </Box>
    </Box>
  );
};
