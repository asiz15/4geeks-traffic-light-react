import React, { useState } from "react";

export const TrafficLight = () => {
	const [selectedLight, setSelectedLight] = useState(null);
	const [lights, setLights] = useState(["red", "yellow", "green"]);

	const handleClick = color => {
		setSelectedLight(color);
	};

	return (
		<div className="traffic-light">
			{lights.map((light, index) => {
				return (
					<div
						className={`light ${light} ${
							light === selectedLight ? `${light}--selected` : ""
						}`}
						key={index}
						onClick={() => handleClick(light)}></div>
				);
			})}
		</div>
	);
};
