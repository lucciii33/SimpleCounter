//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

var seconds = 0;

const SecondCounter = () => {
	counter;
	seconds += 1;
	let secondString = "000000" + seconds.toString();
	secondString = secondString.slice(-6);
	var counter = {
		num1: secondString.charAt(0),
		num2: secondString.charAt(1),
		num3: secondString.charAt(2),
		num4: secondString.charAt(3),
		num5: secondString.charAt(4),
		num6: secondString.charAt(5),
	};

	ReactDOM.render(<Home counter={counter} />, document.querySelector("#app"));
};

setInterval(SecondCounter, 1000);
