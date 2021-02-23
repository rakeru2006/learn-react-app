import React, {Component} from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'



class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      items:[],
      loading:false
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        items:response.results,
        loading:true
      })
    })
  }

  render(){
      var {items,loading} = this.state

      if(!loading){
        return(
        <div>Loading....</div>
        )
      }
      else{

      return(
        <div className="container">

        {items.map(item => (
          <img src={item.picture.medium } alt = {item.name.first}/>

        ))}

        </div>
      ) 
      }
  }
}

export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/