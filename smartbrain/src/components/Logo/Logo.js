import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
	return (
		<div className="ma4 mt0 ">
			<Tilt perspective={9999} transitionSpeed={100} tiltMaxAngleX={15} tiltMaxAngleY={15}>
				<div className="w-10 br2 shadow-2 Tilt" style={{ height: "150px", width: "150px" }}>
					<div className="Tilt-inner pa3 ">
						<img src={brain} alt="SmartBrain Logo" style={{ paddingTop: "25px" }} />
					</div>
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;
