import React, { Component } from 'react'
import { render } from 'react-dom'

export class TriviaQuestion extends Component {

    state={
        answer: ""
    }
    //Check if answer is correct or not and send answer to parent component to remove question and add score
    handleAnswer = (a) => {
        // let answer = a === this.props.quiz.correct? true:false
        

        this.setState({
            answer: a
        })

    }


    nextQuestion = (ans) => {
        this.setState({
            answer: ""
        })
        this.props.removeQuestion(ans)
    }

    //render all answers and put them in random order 
    renderAnswers = () => {
        let answers = [this.props.quiz.correct]

        this.props.quiz.incorrect.forEach(answer => {
            answers = [...answers, answer]
        })

        answers.sort(() => Math.random() - 0.5)
    


        if(this.state.answer !== "")
        {
            let answer = this.state.answer === this.props.quiz.correct? true:false

            if(answer === true)
                {
                   return <span
                        value = {this.state.answer}
                        className="answer" 
                        >CORRECT {this.state.answer}
                        <button onClick={()=>this.nextQuestion(answer)}>Next</button>
                    </span>
                }
            else
                {
                   return <span
                    value = {this.state.answer}
                    className="answer" 
                    >WRONG {this.state.answer}
                    <button onClick={()=>this.nextQuestion(answer)}>Next</button>
                </span>
                }
            
        }
        else 
           {
               return answers.map(a => 
                        <span
                            key={a.id}
                            value = {a}
                            className="answer" 
                            onClick={()=>this.handleAnswer(a)}>{a}
                        </span>)
           }
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
