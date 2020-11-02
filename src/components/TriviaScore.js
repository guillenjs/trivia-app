import React from 'react'

export default function TriviaScore(props) {
    

    return (
        <div className = 'trivia-score'>
              current score
              <br></br>
              <br></br>
            <div className="current-score">
                {props.score}/10
            </div>
        </div>
    )
}
