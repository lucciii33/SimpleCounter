import React from "react";
import propTypes from "prop-types";
import reactDom from "react-dom";

//create your first compostring
const Home = ({ counter }) => {
	return (
		<div className="container  justify-content-center row">
			<div className="bg-dark text-white d-inline-flex">
				<div className="icon col-1 mx-2">
					<i className="far fa-clock"></i>
				</div>
				<div className="col-2 mx-2">{counter.num1}</div>
				<div className="col-2 mx-2">{counter.num2}</div>
				<div className="col-2 mx-2">{counter.num3}</div>
				<div className="col-2 mx-2">{counter.num4}</div>
				<div className="col-2 mx-2">{counter.num5}</div>
				<div className="col-1 mx-2">{counter.num6}</div>
			</div>
		</div>
	);
};
Home.propTypes = {
	num1: propTypes.string,
	num2: propTypes.string,
	num3: propTypes.string,
	num4: propTypes.string,
	num5: propTypes.string,
	num6: propTypes.string,
};

export default Home;
