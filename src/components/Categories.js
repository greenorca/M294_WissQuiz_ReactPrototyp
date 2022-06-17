import React from 'react'
import './Categories.css'

class Categories extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            categories: [],
            fetchCategories: [],
        }
    
    }

  onTrigger = (event) => {
    this.props.callback(event.target.innerHTML);
    event.preventDefault();
  }

  componentDidMount(){
    this.getData()
  }

  //const [categories, fetchCategories] = useState([])

  getData = () => {
    fetch('http://localhost:8080/cat/all')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.setState({
            categories: res
        }) 
        
      })
  }

  
  render(){
    return (
        <>
        <ul>
            <li>Choose your challenge:</li>
            { this.state.categories.map((item, i) => {
                return <li key={i}  onClick={this.onTrigger}>
                        {item.categoryText}
                    </li>
            })}
        </ul>
        </>
    )
  }
}

export default Categories