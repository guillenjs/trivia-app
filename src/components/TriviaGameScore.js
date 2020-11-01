import React from 'react'

export default function TriviaGameScore(props) {


let renderScore = () => {
    let average =  (props.score/10) * 100
    return <div className="score-average"> 
                You got {average}% correct!!
                <button onClick={props.newQuiz}>New Round</button>
            </div>
}

    return (
        <div className="question-container">
            <div>{renderScore()}</div>
        </div>
    )
}
