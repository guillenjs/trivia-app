import React, { Component } from 'react'
import { render } from 'react-dom'

export class TriviaQuestion extends Component {

    //Check if answer is correct or not and send answer to parent component to remove question and add score
    handleAnswer = (a) => {
        let answer = a === this.props.quiz.correct? true:false
        this.props.removeQuestion(answer)
    }

    //render all answers and put them in random order 
    renderAnswers = () => {
        let answers = [this.props.quiz.correct]

        this.props.quiz.incorrect.forEach(answer => {
            answers = [...answers, answer]
        })

        answers.sort(() => Math.random() - 0.5)
    


       return answers.map(a => 
                        <span
                            key={a.id}
                            value = {a}
                            className="answer" 
                            onClick={()=>this.handleAnswer(a)}>{a}
                        </span>)
    }


    render() {
        console.log(this.props.quiz.correct)
        return (
            <div className="question-container">
                <span className="question">{this.props.quiz.question}</span>
                {this.renderAnswers()}
            </div>
        )
    }
}

export default TriviaQuestion
