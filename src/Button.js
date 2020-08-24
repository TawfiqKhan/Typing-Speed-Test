import React from 'react'

const Button =(props)=> {
	return (
			<button
				onClick ={()=> {
					props.startGame(props.gameTime);
				}}
				disabled = {props.gameRunning}
			>
			{props.gameTime ? `${props.gameTime} Sec` : "Start"}</button>
		)
}

export default Button