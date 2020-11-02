import React, { Component } from 'react'
import TriviaQuestion from './TriviaQuestion'
import Leaderboard from './Leaderboard'
import TriviaScore from './TriviaScore'
import TriviaGameScore from './TriviaGameScore'


export default class TriviaGame extends Component {
        state = {
            questions:[],
            triviaQuiz:[],
            score: 0,
            leaderboard: []
        }
        //for pagination of questions 
        //Make fetch request of questions for all questions questions
    componentDidMount() {
        fetch('http://localhost:3000/questions')
            .then(res => res.json())
            .then(questionsArr => {
             
                this.setState({
                    questions: questionsArr
                })
                this.createQuiz()
                })
        
        fetch('http://localhost:3000/scores')
                .then(res => res.json())
                .then(scoreArr => {
                    this.setState({
                        leaderboard: scoreArr
                    })
                })
        }

    //make an array with 10 random questions 
    //with none of them repeating and set to state of current quiz 
    createQuiz = () => {
        let newQuiz = []

        for(let i = 0; i < 10; i++){
           let randomItem = this.state.questions[Math.floor(Math.random()*this.state.questions.length)];

            if(newQuiz.includes(randomItem)){
                i -= 1
            }
            else{
                newQuiz.push(randomItem)
            }
        }

        this.setState({
            triviaQuiz: newQuiz
        })
    }

    //once answered add to score +1 or +0
        //remove question from state render next question that is first 
    removeQuestion = (answer) => {
        console.log(answer)
        if (answer === true)
            {
                this.setState((prevState) => ({
                    score: prevState.score + 1,
                  }));
            }
        
        let updatedQuiz = this.state.triviaQuiz.slice(1, this.state.triviaQuiz.length)
        

        this.setState({
            triviaQuiz: updatedQuiz
        })
    }

    handleNewQuiz = () => {
        this.setState({
            triviaQuiz: [],
            score: 0 
        })
        

        this.createQuiz()
    }

    handleLeaderBoard = (n) => {
        let averageScore = (this.state.score/10) * 100

        fetch('http://localhost:3000/scores', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                name: n,
                score: parseInt(averageScore)
            })
        })
            .then(res => res.json())
            .then(newScore => {
                console.log(newScore)
             //update leader board in state after post
             let updatedLeaderBoard = [...this.state.leaderboard, newScore]
            //update state with new array 
                this.setState({
                    leaderboard: updatedLeaderBoard
                })
            })
           
    }

     //In the question component only render one question, first question in state 
    renderQuestion = () => {
        if(this.state.triviaQuiz.length > 0)
            {return <TriviaQuestion 
                        key={this.state.triviaQuiz[0].id} 
                        quiz = {this.state.triviaQuiz[0]} 
                        removeQuestion = {this.removeQuestion}
                    />}
        else
        {
            //create post fetch to persist score in backend 
            

            return <TriviaGameScore 
                        score = {this.state.score} 
                        newQuiz = {this.handleNewQuiz}
                        handleLeaderBoard = {this.handleLeaderBoard}
                    />
        }
    }

  
       
    render() {
       console.log(this.state.triviaQuiz)
       console.log(this.state.score)
       console.log(this.state.leaderboard)
        return (
            <div>
                <header><h1>T R I V I A <i>400</i></h1></header>
                <div className="grid-container">
                    <div className="questions">
                        {this.renderQuestion()}
                    </div>

                    <div className="score">
                        <TriviaScore score = {this.state.score}/>
                    </div>

                    <div className="leaderboard">
                        <Leaderboard leaderboard = {this.state.leaderboard}/>
                    </div>
                </div>
            </div>
        )
    }
}
