import React from "react"
import './App.css';

class Question extends React.Component {

  onTrigger = (event) => {
        this.props.parentCallback(event.target.innerHTML);
        event.preventDefault();
    }

  generateAnswerButtons(){
    let answers = []
    for (let answer of this.props.answers){
      answers.push(
        <button className="answer" key={answer.id} onClick={this.onTrigger}>
          {answer.answer}
        </button>
      )
    }
    // randomize order
    answers = answers.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

    return answers
  }

  render(){
    let img_src = this.props.image ? this.props.image : "img/question_smiley.jpg"

    return (
      <div className="question-frame">
        <div className="question">
          <div className="container">
            <img src={img_src} alt=""/>
          </div>
          <h2>{this.props.question}</h2>
        </div>
        <div className="button-bar">
          { this.generateAnswerButtons() }
        </div>
      </div>
    )
  }
}

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
        <h1>Welcome to the Wiss - Quiz</h1>
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
