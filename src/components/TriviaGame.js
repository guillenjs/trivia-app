import React, { Component } from 'react'
import TriviaQuestion from './TriviaQuestion'
import Leaderboard from './Leaderboard'
import TriviaScore from './TriviaScore'


export default class TriviaGame extends Component {
        state = {
            questions:[],
            triviaQuiz:""
        }
        //for pagination of questions 
        //Make fetch request of questions for all questions questions
        componentDidMount() {
            fetch('http://localhost:3000/questions')
                .then(res => res.json())
                .then(questionsArr => {
                    console.log(questionsArr)
                    this.setState({
                        questions: questionsArr
                    })
                    this.createQuiz()
                })
        }

    
    createQuiz = () => {
        for(let i = 0; i < 10; i++){
           let randomItem = this.state.questions[Math.floor(Math.random()*this.state.questions.length)];
            console.log(randomItem)
            if(this.state.TriviaQuestion.includes(randomItem)){
                i -= 1
            }
            else{
                
            }
        }
    }

        
        //make an array with 10 random questions 
        //with none of them repeating and set to state of current quiz 

        //In the question component only render one question, first question in state 
        //once answered add to score +1 or +0
        //remove question from state render next question that is first 

        //Once done reflect score in percentage, ask if you they want to take another quiz.
        // if take another button clicked then create a new quiz
    render() {
        console.log(this.state.questions)
        console.log(this.quiz.add.length)
        return (
            <div>
                <header><h1>T R I V I A <i>400</i></h1></header>
                <div className="grid-container">
                    <div className="questions">
                        <TriviaQuestion />
                    </div>

                    <div className="score">
                        <TriviaScore />
                    </div>

                    <div className="leaderboard">
                        <Leaderboard />
                    </div>
                </div>
            </div>
        )
    }
}
