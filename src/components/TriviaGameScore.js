import React, {useState} from 'react'

export default function TriviaGameScore(props) {
const [submitScore, setSubmitScore] = useState(false)
const [name, setName] = useState('')



let handleScoreSubmit = () => {
    setSubmitScore(!submitScore)
    props.handleLeaderBoard(name)
}

let handleName = (evt) => {
    setName(evt.target.value)
}

 //Once done reflect score in percentage, ask if you they want to take another quiz.
        // if take another button clicked then create a new quiz
        
let renderScore = () => {
    // setSubmitScore(false)
    let average =  (props.score/10) * 100
    return <div className="score-average"> 
                You got {average}% correct!!
                {/* create a submit score  section and then start new game button that alread exist*/}
                {submitScore?
                    <div className ="submit-score">T H A N K  Y O U! {name}</div>:
                    <div className ="submit-score">
                        <input placeholder="name" value={name} onChange={handleName}></input>
                        <button onClick={handleScoreSubmit}>Submit Score</button>
                    </div>
                    
                }
                <button onClick={props.newQuiz}>New Round</button>
            </div>
}

    return (
        <div className="question-container">
            <div>{renderScore()}</div>
        </div>
    )
}
