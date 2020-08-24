import { useState, useEffect, useRef } from "react";

const useGameLogic = (gameTime = 15) => {
	const [time, setTime] = useState(gameTime);
	const [gameRunning, setGameRunning] = useState(false);
	const [text, setText] = useState("");
	const [wordCount, setWordCount] = useState(0);
	const textAreaRef = useRef();

	function handleChange(e) {
		const { value } = e.target;
		setText(value);
	}

	function countWords(text) {
		// let words = text.replace(/(^\s*)|(\s*$)/gi,"");
		// words = words.replace(/[ ]{2,}/gi," ");
		// words = words.replace(/\n /,"\n");
		// const totalWords = words.split(" ").length
		const words = text.trim().split(" ");
		const filteredWords = words.filter((word) => word !== "");
		const totalWords = filteredWords.length;
		setWordCount(totalWords);
	}

	function startGame(gameTime = 15) {
		setTime(gameTime);
		setText("");
		setWordCount(0);
		setGameRunning(true);
		textAreaRef.current.disabled = false;
		textAreaRef.current.focus();
	}

	function endGame() {
		countWords(text);
		setGameRunning(false);
	}

	useEffect(() => {
		if (gameRunning && time > 0) {
			setTimeout(() => {
				setTime((time) => time - 1);
			}, 1000);
		} else if (time === 0) {
			endGame();
		}
	}, [gameRunning, time]);

	return {
		textAreaRef,
		text,
		handleChange,
		gameRunning,
		time,
		startGame,
		wordCount,
	};
};

export default useGameLogic;
