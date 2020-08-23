import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";

function App() {
    let STARTING_TIME = 15;

    const [text, setText] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const textAreaRef = useRef();

    const handleChange = (e) => {
        const { value } = e.target;
        setText(value);
    };

    const calculateWordCount = (text) => {
        const wordsArr = text.trim().split(" ");
        return wordsArr.filter((word) => word !== "").length;
    };

    const startGame = (time) => {
        setIsTimeRunning(true);
        setTimeRemaining(time);
        setText("");
        setWordCount(0);
        textAreaRef.current.disabled = false;
        textAreaRef.current.focus();
    };

    const endGame = () => {
        setIsTimeRunning(false);
        setWordCount(calculateWordCount(text));
    };

    useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining((time) => time - 1);
            }, 1000);
        } else if (timeRemaining === 0) {
            endGame();
        }
    }, [timeRemaining, isTimeRunning]);

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                ref={textAreaRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <Button
                time={30}
                startGame={startGame}
                isTimeRunning={isTimeRunning}
            />
            <Button
                time={60}
                startGame={startGame}
                isTimeRunning={isTimeRunning}
            />
            <Button
                time={90}
                startGame={startGame}
                isTimeRunning={isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>

            <Button startGame={startGame} isTimeRunning={isTimeRunning} />

            <h1>Word count: {wordCount}</h1>
        </div>
    );
}

export default App;
