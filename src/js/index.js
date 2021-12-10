//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let segundo0 = 0;
let segundo1 = 0;
let minuto0 = 0;
let minuto1 = 0;
let hora0 = 0;
let hora1 = 0;
setInterval(() => {
	segundo0++;
	if (segundo0 > 9) {
		segundo0 = 0;
		segundo1++;
		if (segundo1 > 5) {
			segundo1 = 0;
			minuto0++;
			if (minuto0 > 9) {
				minuto0 = 0;
				minuto1++;
				if (minuto1 > 5) {
					minuto1 = 0;
					hora0++;
					if (hora0 > 9) {
						hora0 = 0;
						hora1++;
						if (hora1 > 9) {
							hora1 = 0;
						}
					}
				}
			}
		}
	}
	ReactDOM.render(
		<Home
			segundo0={segundo0}
			segundo1={segundo1}
			minuto0={minuto0}
			minuto1={minuto1}
			hora0={hora0}
			hora1={hora1}
		/>,
		document.querySelector("#app")
	);
}, 1000);
