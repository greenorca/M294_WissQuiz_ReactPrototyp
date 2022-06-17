import React from "react"

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

  export default Question