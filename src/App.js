import React, { useState, useEffect, useRef } from "react";
import useGameLogic from "./useGameLogic";
import Button from "./Button";
import "./App.css";

const App = () => {
	const {
		textAreaRef,
		text,
		handleChange,
		gameRunning,
		time,
		startGame,
		wordCount,
	} = useGameLogic();

	return (
		<div>
			<h1>Speed Typing Game</h1>
			<textarea
				ref={textAreaRef}
				value={text}
				onChange={handleChange}
				disabled={!gameRunning}
			/>
			<h3>Choose your desired test time</h3>
			<Button
				gameTime={30}
				startGame={startGame}
				gameRunning={gameRunning}
			/>
			<Button
				gameTime={45}
				startGame={startGame}
				gameRunning={gameRunning}
			/>
			<Button
				gameTime={60}
				startGame={startGame}
				gameRunning={gameRunning}
			/>

			<h2>Time Remaining: {time} sec</h2>
			<Button startGame={startGame} gameRunning={gameRunning} />
			<h4>Total Words: {wordCount} </h4>
		</div>
	);
};

export default App;
