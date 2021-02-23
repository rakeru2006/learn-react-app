import React, {Component} from 'react'



class App extends Component {
  Constructor(props){
    super(props)
    this.state ={
      items:[],
      loading:false
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api/")
    .then((response)) => response.json())
    .then((response)) => {
      this.setState({
        items:response.results,
        loading:true
      })
    }

  }

  render(){
    return(
      <div>Hello Word</div>
      )
    
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