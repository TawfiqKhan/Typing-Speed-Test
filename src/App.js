import "./App.css";
import React, {useState, useEffect} from "react"


function App() {
    const STARTING_TIME = 5
    
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    
    const handleChange =(e)=> {
        const {value} = e.target
        setText(value)
    }
    
    const calculateWordCount =(text)=> {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    const startGame =()=> {
        setIsTimeRunning(true)
        setTimeRemaining(STARTING_TIME)
        setText("")
    }
    
    const endGame =()=> {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
    }
    
    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App
