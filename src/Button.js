import React from "react";

const Button = (props) => {
	return (
		<button
			onClick={() => {
				props.startGame(props.time ? props.time : 15);
			}}
			disabled={props.isTimeRunning}
		>
			{props.time ? `${props.time} Sec ` : "Start"}
		</button>
	);
};

export default Button;
