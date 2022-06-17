import React from "react"
import './App.css';
import Question from "./components/Question";

class App extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      pool: props.pool,
      index: 0,
      feedback: null,
      score: 0,
      //t0: Date.now() might be used later for timed actions
    }
  }

  handleCallback = (selectedAnswer) => {
    console.log(selectedAnswer + " has been clicked")
    let points = 10
    const answers = this.state.pool[this.state.index].answers
    for (let a of answers){
      if (a.correct===true && a.answer===selectedAnswer){
        this.setState({
          score: this.state.score + points,
          feedback: "Horray, correct!"
        })
        break
      } else {
        this.setState({
          feedback: "You missed it buddy!"
        })
      }
    }
    this.nextQuestion()
  }

  nextQuestion(){
    this.setState({
      index: (this.state.index+1)
    })
    console.log(this.state.pool[this.state.index].question + ", id = "+this.state.index)
  }

  getContent(){
    if ( this.state.index+1 > this.state.pool.length ){
      return (
        <div className="question">
          <div className="container">
            <img src="img/kiss_smiley.jpg" alt=""/>
          </div>
          <h2> Game Over </h2>
        </div>
      )
    }
    else {
      const q = this.state.pool[this.state.index]
      return (
        <Question question={ q.question } image = { q.image } answers={ q.answers }
          parentCallback = {this.handleCallback}
        />
      )
    }
  }

  render(){
    return (
      <div className="App">
        { this.getContent() }

        <div className="score">
          Your score: {this.state.score}
        </div>
        <div className="feedback">
          <h2>{ this.state.feedback }</h2>
        </div>
      </div>
    )
  }
}

export default App;
