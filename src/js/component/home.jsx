import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TrafficLight } from "./TrafficLight";

//create your first component
const Home = () => {
	return (
		<div
			className="d-flex justify-content-center align-items-center"
			style={{ height: "100vh" }}>
			<TrafficLight></TrafficLight>
		</div>
	);
};

export default Home;
