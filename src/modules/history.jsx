import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  ToggleButton,
  Box,
  ToggleButtonGroup,
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
      <Tabular autoHeight="calc(100% - 5rem)"></Tabular>
    </Box>
  );
};
