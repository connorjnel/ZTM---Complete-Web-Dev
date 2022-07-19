import React from "react";

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div className="center">
			<img src={imageUrl} alt="" className="mt5" />
		</div>
	);
};

export default FaceRecognition;
