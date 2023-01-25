import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export const Tabular = (props) => {
  const headerClassName = "data-grid-header-class";

  const rows =
    props.rows != undefined && props.rows.length > 0
      ? props.rows
      : [
          { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
          { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
          { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
          { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
          { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
          { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
          { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
          { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
          { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
          { id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
          { id: 11, lastName: "Roxie", firstName: "Harvey", age: 65 },
          { id: 12, lastName: "Roxie", firstName: "Harvey", age: 65 },
          { id: 13, lastName: "Roxie", firstName: "Harvey", age: 65 },
          { id: 14, lastName: "Roxie", firstName: "Harvey", age: 65 },
          { id: 15, lastName: "Roxie", firstName: "Harvey", age: 65 },
          { id: 16, lastName: "Roxie", firstName: "Harvey", age: 65 },
        ];

  const columns =
    props.columns != undefined && props.columns.length > 0
      ? props.columns
      : [
          {
            field: "id",
            headerName: "ID",
            width: 100,
          },
          {
            field: "firstName",
            headerName: "First name",
            width: 150,
            editable: true,
            // headerAlign: "center",
          },
          {
            field: "lastName",
            headerName: "Last name",
            width: 200,
            editable: true,
          },
          {
            field: "age",
            headerName: "Age",
            type: "number",
            width: 100,
            editable: true,
            headerAlign: "left",
          },
          {
            field: "fullName",
            headerName: "Full name",
            description: "This column has a value getter and is not sortable.",
            sortable: true,
            // width: 300,
            flex: 1,
            valueGetter: (params) =>
              `${params.row.firstName || ""} ${params.row.lastName || ""}`,
          },
          ,
        ];

  // 外部业务逻辑需要在table中插入的按钮
  if (props.buttons != undefined) {
    columns.push({
      field: "Under Control",
      headerName: "Under Control",
      description: "forbidden",
      sortable: false,
      // headerClassName: headerClassName,
      width: 260,
      headerAlign: "center",
      // flex: 1,
      renderCell: props.buttons,
    });
  }

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      // rowsPerPageOptions={[10]}
      // checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
      style={{
        padding: "30px",
        color: "#E7EFE599",
        minHeight: "450px",
        height: "515px",
        width: "100%",
        backgroundColor: "#00000099",
        borderRadius: "10px",
        border: 0,
      }}
      sx={{
        "& .MuiDataGrid-row:hover": {
          backgroundColor: "#5867f250",
          color: "#FFF",
        },
      }}
      rowSpacingType="margin"
      density="compact"
      autoHeight={true}
      autoPageSize={false}
      getCellClassName={() => "data-grid-cell-class"}
      getRowClassName={() => "data-grid-row-class"}
    />
  );
};
