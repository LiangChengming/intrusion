import React, { useState, useEffect, useRef, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import vasion from "./assets/vasion.svg";

export const succ = (element) => {
	const icon = (
		<img
			src={vasion}
			style={{
				width: "25px",
				height: "25px",
			}}
		></img>
	);

	const style = {
		position: "bottom-right",
		autoClose: 2000,
		hideProgressBar: false,
		progressStyle: { backgroundColor: "#5865F2" },
		closeOnClick: true,
		icon: icon,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
	};

	toast.success(<div style={{ paddingLeft: "5px" }}>{element}</div>, style);
};
